<template>
    <div class="h-full bg-black p-10 text-center">
    <div class="w-full">
      <h1 class="font-bold text-5xl text-green-300  hover:text-green-600 mb-10">
        DEcrypt
      </h1>
      <p></p>
    </div>

    <div class="max-w-lg mx-auto">
      <div class="text-xl text-white mb-3">
        <p>
          A fullstack web application project built on Vue, Axios and Spring.
        </p>
      </div>
    </div>
    <br />
    <div class="max-w-lg mx-auto">
      <div class="text-white mb-4">
        <h5 class="text-2xl text-pink-300 font-bold mb-2">Contents:</h5>
        <ul class="text-lg">
          <li>Login & Signup</li>
          <li>Main Page</li>
          <li>User Menus</li>
          <li>Posting, Update, Delete Article</li>
          <li>Posting, Update, Delete Comment</li>
          <li>Posting, Update, Delete Reply</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
    <br />

    <p class="text-sm text-white mb-4"></p>

    <img class="w-3/5 mb-4 m-auto" src="" />

    <!-- Login&Signup -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-xl font-bold text-purple-300 hover:text-purple-500 mb-2">
        <p>
          1. Login & Signup
        </p>
      </div>
    </div>
       <p class="text-sm text-white mb-4">
      With Router .
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/MenuJSTL.png" />
    <p class="text-sm text-white mb-4">
      With JSTL created navigation bar to differentiate anonymous users and
      registered users.
    </p>

    <br />
    <!-- MainPage -->
    <div class="max-w-lg mx-auto">
      <div
        class="text-xl font-bold text-yellow-300 hover:text-yellow-500 mt-4 mb-4"
      >
        <p>
          2. Main Page
        </p>
      </div>
    </div>
    <p class="text-sm text-white mb-4">
      After logging in, it leads to the main page where the list of articles are
      displayed.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/mainpagenation.png" />

    <br />
    <!-- Profile -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-xl font-bold text-blue-300 hover:text-blue-500 mb-4">
        <p>
          3. Profile
        </p>
      </div>
    </div>

    <p class="text-sm text-white mb-4">
      The user information is displayed and can be edited on My Profile page.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/profilepage.png" />


    <br />

    <!-- Board -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-xl text-red-300 hover:text-red-500 mb-4">
        <p>
          4. Posting, Update, Delete Article
        </p>
      </div>
    </div>
    <p class="text-sm text-white mb-4">
      In order to write a new article, click on the 'Write' button on the
      navigation bar.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/writenew.png" />

    <br />
    <!-- Comment -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-xl text-white hover:text-green-300 mb-4">
        <p>
          5. Posting, Update, Delete Comment
        </p>
      </div>
    </div>
    <p class="text-sm text-white mb-4">
      The comments can be added at the bottom of the Read page for the article.
    </p>

    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/writenewcomment.png" />

    <br />

        <!-- Reply -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-xl text-white hover:text-green-300 mb-4">
        <p>
          5. Posting, Update, Delete Reply
        </p>
      </div>
    </div>
    <p class="text-sm text-white mb-4">
      The comments can be added at the bottom of the Read page for the article.
    </p>

    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/writenewcomment.png" />

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
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/logoutconfig.png" />

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