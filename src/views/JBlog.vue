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

    <h5 class="text-3xl text-blue-300 font-bold mb-2">Description:</h5>
    <p class="text-base text-white mb-10 w-3/5 m-auto">
      The project showcases the overall processes of Spring and its components.
      The database is managed through JPA with MariaDB and the security is
      managed with Spring Security with OAuth2.0.
    </p>
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
      The login page is created using JSP/JSTL where the logged in and logged
      out users are differnetiated. And only logged in users are aloowed to
      write any articles or comments.
    </p>

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      로그인 페이지는 로그인 유져와 로그아웃된 유져들을 구별하며 로그인 된
      유져들만 글을 작성가능.
    </p>

    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/MenuJSTL.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/login.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Form Login is used and CSFR is disabled for the development purpose. The
      authorize request is set with home, signup and login pages only so that
      anyone without proper authority can not access the full site.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      개발을위해 CSFR을 disable 했으며 보안을 위해 로그인이 안된 유져들은 로그인
      페이지만 허용하였음.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/loginconfig.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The login with Kakao requires to request for a token from kakao api. And
      we can use this token to request for user information. In this project I
      have aquired only for user ID and email to create a profile.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Kakao 로그인은 Api로부터 토큰을 발급받아 이를 이용하여 유져의 정보를
      가져옴.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/loginconfigkakao.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/loginkakao.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The passwords are vaildated through javascript where making sure that the
      both passwords are identical.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Javascript를 이용하여 비밀번호 중복 체크를 하였고 Ajax로 새로운 유져
      가입을 구현함.
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
      MariaDB is chosen as the DBMS used for this project.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      MariadDB를 이용하여 Database를 구현함.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/entityoauth.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/entitykakao.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/entityuser.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/entityboard.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/entitycomment.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      With JPA you can create query with method names and I was able to create
      custom methods.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      JPA의 커스텀 query를 이용하여 필요한 query와 Pageable을 이용하여
      검색기능과 Pagination을 구현함.
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
      articles are displayed. To indicate the types, ENUMs are used and
      uni-directional and bi-directional relationship is used to establish the
      relationsips between the tables.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      로그인 후 메인페이지로 이동하며 게시판의 모든 글을 볼수있음. ENUM을
      이용하여 role과 같은 type들을 구현하였음. 단방향과 양방향 관계를 이용하여
      테이블 간의 관계를 형성하였음.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/mainlist.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/mainpagenation.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/boardsearch.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/boardlist.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/boardpagination.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      One of the common issues when using JPA is the infinite recursion. In
      order to solve this problem, the JsonIgnorProperties annotation is used.
      <br />
      <br />
      When removing datas, such as articles, we need to remove the comments that
      are related to each article. The CascadeType is used to remove all the
      datas that are forming relationships with.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      양방향 관계에서 흔히 나타나는 무한반복 해결책으로 JsonIgnorProperties
      annotation을 사용하였음. CascadeType을 이용하여 연관되어 있는 데이터를
      동시에 삭제가능하게 구현함.
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
      The user information is displayed and can be edited on My Profile page. It
      is processed through Javascript and Ajax to the controller and service
      where the changes are validated and saved.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      사용자 정보는 Profile 페이지에서 수정가능함. Javascript와 Ajax를 활용하여
      수정돤 정보를 확인하고 POST함.
    </p>

    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/profilepage.png" />
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
      The Write button will take you to the page where you can composed a new
      article. After posting the article you will be redierected to the main
      list page where you can check your new article.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Write 버튼은 게시물 작성 페이지로 이동함. 그리고 게시물 저장후 다시 목록
      페이지로 이동됨.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/writenew.png" />
    <img class="w-3/5 mb-6 m-auto" src="../assets/jblog/writenew2.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/writenewlist.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      By clicking the 'Read' button on each card, you are directed to the detail
      of your article where you can edit and delete it.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Read 버튼으로 자세히보기 페이지로 이동하여 게시물 수정 및 삭제를 할수있음.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jblog/writenewdetail.png" />

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Below are the Javascript, Ajax and Spring for the above processes.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Javascript, Ajax and Spring를 활용하여 구현됨.
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
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      댓글은 게시물 하단쪽에서 작성 가능.
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
      Above processes are completed through Ajax to the controller and service.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Ajax를 활용하여 게시물 작성 및 편집을 구현
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
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Logout을 하면 다시 메인 페이지로 이동.
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
