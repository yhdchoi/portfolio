<template>
  <div class="h-full bg-black p-10 text-center">
    <div class="w-full">
      <h1 class="font-bold text-5xl text-green-300  hover:text-green-600 mb-10">
        DEcrypt
      </h1>
      <a
        class="flex items-center justify-center"
        href="https://github.com/yhdchoi/decrypt.git"
      >
        <svg
          fill="purple"
          class="w-8 h-8 mb-11 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
        <p class="text-lg text-purple-300  hover:text-purple-600 mb-10">
          DEcrypt Repository
        </p>
      </a>
    </div>

    <div class="max-w-lg mx-auto">
      <div class="text-xl text-white mb-3">
        <p>
          A fullstack web application project built on Vue, Axios and Spring MVC/Boot.
        </p>
      </div>
    </div>
    <br />
    <div class="max-w-lg mx-auto">
      <div class="text-white mb-4">
        <h5 class="text-2xl text-pink-300 font-bold mb-2">Contents:</h5>
        <ul class="text-lg">
          <li>Main Page</li>
          <li>User Menu</li>
          <li>Articles</li>
          <li>Comments</li>
          <li>Replies</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
    <br />

    <h5 class="text-2xl text-blue-300 font-bold mb-2">Description:</h5>
    <p class="text-base text-white mb-10">
      The project is still being built at this momment. <br />
      I've started it as an experiment fo Vue.js but it has developed as a
      fullstack project. It composed with Vue.js, Router, Vuex, Axios and Spring
      Boot.
      <br />
      The reason for choosing Vue.js as frontend framework is that it is more
      flexiable, approachable, <br />
      and is a single-page application that runs on client side <br />
      which leads to a better performance over the traditional server-side or
      multi-page applications.
    </p>

    <h5 class="text-2xl text-yellow-200 font-bold mb-2">TODOs:</h5>
    <p class="text-base text-white mb-10">
      Frontend: Organize data with Vuex. / Request & Response with axios. <br />
      Backend: Test mvc with axios. / Security with JWT.
    </p>

    <!-- Main Page -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-xl font-bold text-purple-300 hover:text-purple-500 mb-2">
        <p>
          1. Main Page
        </p>
      </div>
    </div>
    <p class="text-sm text-white mb-4">
      With Router I have organized the navigation with dedicated dropdown menu
      for users.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/decrypt/homemain.png" />
    <img
      class="w-3/5 mb-6 m-auto"
      src="../assets/decrypt/homemainusermenu.png"
    />
    
    <br />
    <!-- User Menu -->
    <div class="max-w-lg mx-auto">
      <div
        class="text-xl font-bold text-yellow-300 hover:text-yellow-500 mt-4 mb-4"
      >
        <p>
          2. User Menu
        </p>
      </div>
    </div>
    <p class="text-sm text-white mb-4">
      
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/decrypt/profile.png" />
    <img class="w-3/5 mb-4 m-auto" src="../assets/decrypt/inbox.png" />
    <img class="w-3/5 mb-4 m-auto" src="../assets/decrypt/settings.png" />

    <br />
    <!-- Article -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-xl font-bold text-blue-300 hover:text-blue-500 mb-4">
        <p>
          3. Posting, Update, Delete Articles
        </p>
      </div>
    </div>

    <p class="text-sm text-white mb-4">
      The user information is displayed and can be edited on My Profile page.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/decrypt/list.png" />

    <br />

    <!-- Comments -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-xl text-red-300 hover:text-red-500 mb-4">
        <p>
          4. Posting, Update, Delete Comments
        </p>
      </div>
    </div>
    <p class="text-sm text-white mb-4">
      In order to write a new article, click on the 'Write' button on the
      navigation bar.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="" />

    <br />
    <!-- Replies -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-xl text-green-200 hover:text-green-300 mb-4">
        <p>
          5. Posting, Update, Delete Replies
        </p>
      </div>
    </div>
    <p class="text-sm text-white mb-4">
      The comments can be added at the bottom of the Read page for the article.
    </p>

    <img class="w-3/5 mb-4 m-auto" src="" />

    <br />

    <!-- Logout -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-xl text-pink-300 hover:text-pink-500 mb-4">
        <p>
          6. Logout
        </p>
      </div>
    </div>
    <p class="text-sm text-white mb-4">
      By clicking Logout button, you are redirected to the Main public page.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="" />

    <!-- Terminal 1 -->
    <div class="w-3/5 mx-auto text-left">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-36 bg-gray-500 border-black mx-auto"
      >
        <div
          class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
          id="headerTerminal"
        >
          <div
            class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
            id="closebtn"
          ></div>
          <div
            class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
            id="minbtn"
          ></div>
          <div
            class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
            id="maxbtn"
          ></div>
          <div class="mx-auto pr-16" id="terminaltitle">
            <p class="text-center text-sm">Terminal</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$ fin. <br />
            daniel$ Thank you. <br />
            daniel$
          </p>
        </div>
      </div>
    </div>
    <!-- Terminal 1 Ends -->

    <!-- The Main Section -->
  </div>
</template>
