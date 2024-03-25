import { v4 as uuid } from 'uuid';

let db;

export function initIndexedDB() {
    let request = indexedDB.open("coffeeDatabase", 1);

    request.onupgradeneeded = function (event) {
        let db = event.target.result;

        let coffeeNamesStore = db.createObjectStore("coffeeNames", { keyPath: "id", autoIncrement: true });
        coffeeNamesStore.createIndex("name", "name", { unique: true }); // Optional index on coffee name
    };

    request.onerror = function (event) {
        console.log("Database error: " + event.target.errorCode);
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        console.log("IndexedDB connection initialized successfully");
    };
}

export function addCoffeeName(coffeeName) {
    if (!db) {
        initIndexedDB()
        console.log("IndexedDB connection not initialized. Please call initIndexedDB() first.");
        return;
    }

    let transaction = db.transaction(["coffeeNames"], "readwrite");
    let coffeeNamesStore = transaction.objectStore("coffeeNames");

    let newCoffee = { id: uuid(), name: coffeeName };

    let addRequest = coffeeNamesStore.add(newCoffee);

    addRequest.onsuccess = function (event) {
        console.log("Coffee name added successfully");
    };

    addRequest.onerror = function (event) {
        console.log("Error adding coffee name:", event.target.errorCode);
    };

    transaction.oncomplete = function (event) {
        console.log("Transaction completed");
    };

    transaction.onerror = function (event) {
        console.log("Transaction error: " + event.target.errorCode);
    };
}