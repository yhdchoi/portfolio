<template>
  <div class="h-full bg-black p-10 text-center">
    <div class="w-full">
      <h1 class="font-bold text-5xl text-green-300  hover:text-green-600 mb-10">
        J_Blog
      </h1>
      <p></p>
    </div>

    <div class="max-w-lg mx-auto">
      <div class="text-xl text-white mb-3">
        <p>
          A fullstack web application project built on JSP and Spring.
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
          <li>Profile</li>
          <li>Posting, Update, Delete Article</li>
          <li>Posting, Update, Delete Comment</li>
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
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/MenuJSTL.png" />
    <p class="text-sm text-white mb-4">
      With JSTL created navigation bar to differentiate anonymous users and
      registered users.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/nav1.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/nav2.png" />
    <p class="text-sm text-white mb-4">
      The login process is created with Spring Security's formLogin and OAuth2.0
      for Kakao Api.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/login.png" />
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/loginkakao.png" />
    <p class="text-sm text-white mb-4">
      Spring Security Configuration and Kakao Api Configuration for the login.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/loginconfig.png" />
    <img
      class="w-3/5 mb-10 m-auto"
      src="../assets/jblog/loginconfigkakao.png"
    />
    <p class="text-sm text-white mb-4">
      The Signup is linked on the Login Page.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/signup.png" />
    <p class="text-sm text-white mb-4">
      Using Javascript/Ajax for the Signup.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/joinjs.png" />
    <p class="text-sm text-white mb-4">
      The Signup checking and validating process.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/signupconfpass.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/signupsucc.png" />
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
    <p class="text-sm text-white mb-4">
      The search bar, list and pagination created using JSTL and Spring Boot.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/boardsearch.png" />
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/boardlist.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/boardpagination.png" />
    <p class="text-sm text-white mb-4">
      Search field is applied in both the title and contents of the articles.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/mainsearch.png" />
    <p class="text-sm text-white mb-4">
      The search result containing number '5' in both the title and contents.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/mainresult.png" />
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

    <p class="text-sm text-white mb-4">
      The user information through javascript with ajax.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/profileupdatejs.png" />
    <img
      class="w-3/5 mb-10 m-auto"
      src="../assets/jblog/profileupdateservice.png"
    />
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
    <p class="text-sm text-white mb-4">
      Here you can write a new article as shown in the example.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/writenew2.png" />
    <p class="text-sm text-white mb-4">
      By clicking the SAVE button, you are automatically redirected to the main
      page where your new posting is shown on the list.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/writenewlist.png" />
    <p class="text-sm text-white mb-4">
      By clicking the Read button on the card, you are directed to the details
      of your article where you can edit and delete as you wish.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/writenewdetail.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/writeupdate.png" />
    <p class="text-sm text-white mb-4">
      These processes are built using ajax and Spring.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/boardcontroljs.png" />
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/boardcontrol.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/boardservice.png" />
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
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/writenewcomment2.png" />
    <img
      class="w-3/5 mb-4 m-auto"
      src="../assets/jblog/writenewcommentsucc.png"
    />
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/writenewcomment3.png" />
    <img
      class="w-3/5 mb-10 m-auto"
      src="../assets/jblog/writenewcommentdelete.png"
    />

    <p class="text-sm text-white mb-4">
      These processes are built using ajax and Spring.
    </p>

    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/commentcontroljs.png" />
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/commentcontrol.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/commentservice.png" />
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
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/mainpublic.png" />
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
            <p class="text-center text-sm">JSP</p>
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
