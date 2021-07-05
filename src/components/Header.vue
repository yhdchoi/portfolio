<template>
  <nav class="bg-white shadow dark:bg-gray-800">
    <div
      class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300"
    >
      <router-link
        :to="{ name: 'Home' }"
        class="border-transparent hover:text-gray-800 dark:hover:text-gray-200 border-b-2 hover:border-green-500 mx-1.5 sm:mx-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </router-link>

      <router-link
        :to="{ name: 'About' }"
        class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >About</router-link
      >

      <router-link
        :to="{ name: 'Projects' }"
        class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-yellow-500 mx-1.5 sm:mx-6"
        >Project</router-link
      >

      <router-link
        :to="{ name: 'Activities' }"
        class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-green-500 mx-1.5 sm:mx-6"
        >Activity</router-link
      >

      <router-link
        :to="{ name: 'Contact' }"
        class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-pink-500 mx-1.5 sm:mx-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </router-link>
    </div>
  </nav>

  <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
</template>
