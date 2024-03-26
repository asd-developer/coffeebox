import { v4 as uuid } from 'uuid';

let db;

export async function initIndexedDB() {
    return new Promise((resolve, reject) => {
        let request = indexedDB.open("coffeeDatabase", 1);

        request.onupgradeneeded = function (event) {
            let db = event.target.result;

            let coffeeNamesStore = db.createObjectStore("coffeeNames", { keyPath: "id", autoIncrement: true });
            coffeeNamesStore.createIndex("name", "name", { unique: true }); // Optional index on coffee name
        };

        request.onerror = function (event) {
            console.log("Database error: " + event.target.errorCode);
            reject(event.target.errorCode);
        };

        request.onsuccess = function (event) {
            db = event.target.result;
            console.log("IndexedDB connection initialized successfully");
            resolve();
        };
    });
}

export async function addCoffeeName(coffeeName) {
    if (!db) {
        await initIndexedDB();
    }

    return new Promise((resolve, reject) => {
        let transaction = db.transaction(["coffeeNames"], "readwrite");
        let coffeeNamesStore = transaction.objectStore("coffeeNames");

        let newCoffee = { id: uuid(), name: coffeeName };

        let addRequest = coffeeNamesStore.add(newCoffee);

        addRequest.onsuccess = function (event) {
            console.log("Coffee name added successfully");
            resolve();
        };

        addRequest.onerror = function (event) {
            console.log("Error adding coffee name:", event.target.errorCode);
            reject(event.target.errorCode);
        };

        transaction.oncomplete = function (event) {
            console.log("Transaction completed");
        };

        transaction.onerror = function (event) {
            console.log("Transaction error: " + event.target.errorCode);
            reject(event.target.errorCode);
        };
    });
}

export async function getCoffeeNames() {
    if (!db) {
        await initIndexedDB();
    }

    return new Promise((resolve, reject) => {
        let transaction = db.transaction(["coffeeNames"], "readonly");
        let coffeeNamesStore = transaction.objectStore("coffeeNames");
        let coffeeNames = [];

        let cursorRequest = coffeeNamesStore.openCursor();

        cursorRequest.onsuccess = function (event) {
            let cursor = event.target.result;
            if (cursor) {
                coffeeNames.push(cursor.value); // Collect the coffee name
                cursor.continue(); // Move to the next record
            } else {
                console.log("Coffee names retrieved successfully:", coffeeNames);
                resolve(coffeeNames); // Resolve the promise with coffee names
            }
        };

        cursorRequest.onerror = function (event) {
            console.log("Error retrieving coffee names:", event.target.errorCode);
            reject(event.target.errorCode); // Reject the promise with error
        };

        transaction.oncomplete = function (event) {
            console.log("Transaction completed");
        };

        transaction.onerror = function (event) {
            console.log("Transaction error: " + event.target.errorCode);
            reject(event.target.errorCode); // Reject the promise with error
        };
    });
}
