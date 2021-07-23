<template>
  <div class="h-full bg-black p-10">
 
     <!-- DEcrypt -->
    <div class="w-3/5 mx-auto my-6">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-96 bg-gray-500 border-black mx-auto"
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
            <p class="text-center text-sm text-red-500">DEcrypt</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$
            <router-link
              :to="{ name: 'Decrypt' }"
              class="border-b-2 hover:text-pink-800 dark:hover:text-gray-200 hover:border-pink-500 ml-2"
              >Click HERE to DEcrypt</router-link
            >
            <br />
            <br />
            daniel$ project description; <br />
            The project is aimed to provide service for development community in
            mind.
            <br />
            <br />
            daniel$ Why the name DEcrypt?<br />
            The anonymous individuals to unpack or 'decrypt' their thoughts and
            to be shared.
            <br />
            <br />
            daniel$ print tools used;<br />
            Spring, JPA/Hiebernate, Spring Security, Axios, Vuex, Vue Router,
            Vue, TailwindCSS;
          </p>
        </div>
      </div>
    </div>
    <!-- DEcrypt Ends -->

    <br />

    <!-- J_Blog -->
    <div class="w-3/5 mx-auto my-6">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-96 bg-gray-500 border-black mx-auto"
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
            <p class="text-center text-sm text-blue-500">J_Blog</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$
            <router-link
              :to="{ name: 'Jblog' }"
              class="border-b-2 hover:text-purple-800 dark:hover:text-gray-200 hover:border-purple-500 ml-2"
              >Click HERE for J_Blog</router-link
            >
            <br />
            <br />
            daniel$ project description; <br />
            The project is started as a study for JPA and Security and became a
            fully functioning blog.
            <br />
            <br />
            daniel$ Why the name J_Blog?<br />
            The character 'J' stands for 'Join' where the project originally
            started as a study of Join Table in DataBase.
            <br />
            <br />
            daniel$ print tools used;<br />
            Spring Boot, JPA/Hiebernate, Spring Security/OAuth2.0, JSP/JSTL;
          </p>
        </div>
      </div>
    </div>
    <!-- JBlog Ends -->

    <br />

    <!-- AWS -->
    <div class="w-3/5 mx-auto my-6">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-52 bg-gray-500 border-black mx-auto"
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
            <p class="text-center text-sm text-yellow-500">Amazon Web Service AWS</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$
            <router-link
              :to="{ name: 'Jblog' }"
              class="border-b-2 hover:text-purple-800 dark:hover:text-gray-200 hover:border-purple-500 ml-2"
              >Click HERE for AWS</router-link
            >
            <br />
            <br />
            daniel$ project description; <br />
            The study of Amazon Web Service.
            <br />
            <br />
            daniel$
          </p>
        </div>
      </div>
    </div>
    <!-- AWS Ends -->

    <br>

    <!-- JWT -->
    <div class="w-3/5 mx-auto my-6">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-72 bg-gray-500 border-black mx-auto"
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
            <p class="text-center text-sm text-purple-500">Spring Security JWT</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$
            <router-link
              :to="{ name: 'Jblog' }"
              class="border-b-2 hover:text-purple-800 dark:hover:text-gray-200 hover:border-purple-500 ml-2"
              >Click HERE for JWT</router-link
            >
            <br />
            <br />
            daniel$ project description; <br />
            The study of Spring Security JWT (Json Web Token).
            <br />
            <br />           
            daniel$ print tools used;<br />
            Spring Boot, JPA/Hiebernate, Spring Security;
            <br />
            <br />
            daniel$
          </p>
        </div>
      </div>
    </div>
    <!-- JWT Ends -->

    <br />
  </div>
</template>
