<template>
  <main class="h-full bg-black p-10 text-center">
    <div class="w-full">
      <h1 class="font-bold text-5xl text-white  hover:text-blue-600 mb-10">
        J_Blog
      </h1>

      <a
        class="flex items-center justify-center"
        href="https://github.com/yhdchoi/jspblog.git"
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
          J_Blog Repository
        </p>
      </a>
    </div>
    <div class="max-w-lg mx-auto">
      <div class="text-xl text-white mb-3">
        <p>
          A web application project built on using JSP, Spring MVC/Boot, Spring
          Security, and JPA/Hibernate.
        </p>
      </div>
    </div>
    <br />
    <div class="max-w-lg mx-auto">
      <div class="text-white mb-4">
        <h5 class="text-3xl text-pink-300 font-bold mb-2">Contents:</h5>
        <ul class="text-lg">
          <li>Security</li>
          <li>Database</li>
          <li>Home Page</li>
          <li>Profile</li>
          <li>Articles</li>
          <li>Comments</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
    <br />
    <!-- Login&Signup -->
    <div class="max-w-lg mx-auto mb-4">
      <div
        class="text-3xl font-bold text-purple-300 hover:text-purple-500 mb-2"
      >
        <p>
          1. Security
        </p>
      </div>
    </div>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The login process is built using the Spring Security and OAuth2.0.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/MenuJSTL.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      I have created login page with JSP/JSTL where the navigation bar is coded
      to differentiate anonymous users and registered users.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/nav1.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/nav2.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/login.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/loginkakao.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      For this example Form Login is used and CSFR is disabled for the
      development purpose. The authorize request is set with home, signup and
      login pages only so that anyone without proper authority can not access
      the full site.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/loginconfig.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The login with Kakao requires to request for a token from kakao api. And
      we can use this token to request for user information. In this project I
      have only have aquired for user ID and email to create a profile.
    </p>
    <img
      class="w-3/5 mb-10 m-auto"
      src="../assets/jblog/loginconfigkakao.png"
    />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The passwords are vaildated through javascript where making sure that the
      both passwords are identical.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/signup.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/joinjs.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/signupconfpass.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/signupsucc.png" />
    <br />
    <!-- Database -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-3xl font-bold text-green-300 hover:text-green-500 mb-2">
        <p>
          2. Database
        </p>
      </div>
    </div>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      MariaDB is chosen as the DBMS used for this project. The belows are
      objects and entities.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/entityoauth.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/entitykakao.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/entityuser.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/entityboard.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/entitycomment.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      With JPA you can create query with method names and I was able to create custom methods.
    </p>
<img class="w-3/5 mb-6 m-auto" src="../assets/jblog/repouser.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/repoboard.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/repocomment.png" />

    <br />
    <!-- Home Page -->
    <div class="max-w-lg mx-auto">
      <div
        class="text-3xl font-bold text-yellow-300 hover:text-yellow-500 mt-4 mb-4"
      >
        <p>
          3. Home Page
        </p>
      </div>
    </div>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      After logging in, you are redirected to the main page where a list of
      articles are displayed.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/mainlist.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/mainpagenation.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The search bar, list and pagination are created using JSTL and Spring
      Boot.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/boardsearch.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/boardlist.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/boardpagination.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The search runs in both the title and contents of the articles. The
      procedure takes with a request carring keywords for the search then JPA
      with custom query run the search and responses the results back.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/mainsearch.png" />
    <img
      class="w-3/5 mb-6 m-auto"
      src="../assets/jblog/boardlistsearchcont.png"
    />
    <img
      class="w-3/5 mb-6 m-auto"
      src="../assets/jblog/boardlistsearchjpa.png"
    />

    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/mainresult.png" />
    <br />
    <!-- Profile -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-3xl font-bold text-blue-300 hover:text-blue-500 mb-4">
        <p>
          4. Profile
        </p>
      </div>
    </div>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The user information is displayed and can be edited on My Profile page.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/profilepage.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The user information processed through javascript and ajax to the
      controller and service where the changes are validated and saved.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/profileupdatejs.png" />
    <img
      class="w-3/5 mb-10 m-auto"
      src="../assets/jblog/profileupdateservice.png"
    />
    <br />
    <!-- Board -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-3xl text-red-300 hover:text-red-500 mb-4">
        <p>
          5. Articles
        </p>
      </div>
    </div>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      In order to write a new article, click on the 'Write' button on the
      navigation bar.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/writenew.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Here you can write a new article as shown in the example. You can add
      files and format it as you wish.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/writenew2.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      By clicking the SAVE button, you are automatically redirected to the main
      page where your article is posted.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/writenewlist.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      By clicking the 'Read' button on each card, you are directed to the detail
      of your article where you can edit and delete it.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/writenewdetail.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Below are the javascript, ajax and Spring for the above processes.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/boardcontroljs.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/boardcontrol.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/boardservice.png" />
    <br />
    <!-- Comment -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-3xl text-green-300 hover:text-green-500 mb-4">
        <p>
          6. Comments
        </p>
      </div>
    </div>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The comments can be added at the bottom of the Read page of each articles.
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
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Above processes are completed through ajax to the controller and service.
    </p>
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/commentcontroljs.png" />
    <img class="w-3/5 mb-4 m-auto" src="../assets/jblog/commentcontrol.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/commentservice.png" />
    <br />
    <!-- Logout -->
    <div class="font-bold max-w-lg mx-auto">
      <div class="text-3xl text-pink-300 hover:text-pink-500 mb-4">
        <p>
          7. Logout
        </p>
      </div>
    </div>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
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
            <p class="text-center text-sm">J_Blog</p>
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
  </main>
</template>
