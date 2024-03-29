<template data-theme="coffee" class="font-unica">
    <header class="w-full p-2">
        <h1 class="font-unica text-xl font-bold text-center">COFFEEBOX</h1>
    </header>

    <main class="w-full h-full">
      <RouterView/>
    </main>

    <footer class="bg-gray-800 text-white py-4 sticky bottom-0">
      <div class="container mx-auto px-6">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Unica+One&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0 auto;
  background-color: rgb(127, 109, 96);
}
</style>
