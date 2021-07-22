<template>
  <div class="h-full bg-black p-10">
    <div class="w-full text-center">
      <h1 class="font-bold text-5xl text-white  hover:text-green-300 mb-10">
        J_Blog
      </h1>
      <p></p>
    </div>

    <div class="text-center max-w-lg mx-auto">
      <div class="text-xl text-white mb-6">
        <p>
          A fullstack showcase for a web application based on JSP and Spring
        </p>
      </div>
    </div>
    <br />
    <div class="text-center max-w-lg mx-auto">
      <div class="text-xl text-white mb-6">
        <h3>Contents:</h3>
        <br />
        <h5>Frontend</h5>
        <ul>
          <li>JSP & JSTL</li>
          <li>Javascript</li>
        </ul>
        <br />
        <h5>Backend</h5>
        <ul>
          <li>Spring</li>
          <li>JPA/Hiebernate</li>
          <li>Security</li>
          <li>OAuth2...Kakao</li>
        </ul>
      </div>
    </div>
    <br />

    <img src="" alt="" />
    <br />

    <div class="text-center max-w-lg mx-auto">
      <div class="text-xl text-white mb-6">
        <p>
          JSP & JSTL
        </p>
      </div>
    </div>
    <br />

    <!-- Terminal 1 -->
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
            <p class="text-center text-sm">JSP</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$
            
           
          </p>
        </div>
      </div>
    </div>
    <!-- Terminal 1 Ends -->

    <!-- Tools -->
    <div class="flex-grow flex justify-center items-center my-6">
      <div class="mx-auto px-4 sm:px-8 py-2 text-center">
        <div class="grid grid-cols-6 gap-4 items-start mt-8 mx-auto px-8">
          <div
            class="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2"
          >
            <div class="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
              <div class="mx-auto h-40 bg-gray-500 rounded-md p-4">
                <h1 class="font-bold text-xl text-white">FRONTEND</h1>
                <div class="flex justify-center items-center mt-8">
                  <img
                    class="mr-8"
                    src="https://miro.medium.com/max/630/1*zKnKunxf74dpaMMtcKrB9g.png"
                    width="50px"
                    height="50px"
                  />
                  <img
                    class="mr-8"
                    src="https://shkrew.gallerycdn.vsassets.io/extensions/shkrew/jstlsnippets/1.0.1/1600333627461/Microsoft.VisualStudio.Services.Icons.Default"
                    width="50px"
                    height="50px"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/bootstrap.png"
                    width="50px"
                    height="50px"
                  />

                  <img
                    src="https://w7.pngwing.com/pngs/265/442/png-transparent-jquery-ui-javascript-web-browser-pasargad-text-trademark-logo.png"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
              <div
                class="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"
              ></div>
              <div
                class="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"
              ></div>
            </div>
          </div>

          <div
            class="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2"
          >
            <div class="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
              <div class="mx-auto h-40 bg-gray-500 rounded-md p-4">
                <h1 class="font-bold text-xl text-white">BACKEND</h1>
                <div class="flex justify-center items-center mt-8">
                  <img
                    class="mr-8"
                    src="https://img.icons8.com/color/48/000000/spring-logo.png"
                    width="50px"
                    height="50px"
                  />
                  <img
                    class="mr-8"
                    src="https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg"
                    width="50px"
                    height="50px"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/maria-db.png"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
              <div
                class="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"
              ></div>
              <div
                class="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"
              ></div>
            </div>
          </div>

          <div
            class="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2"
          >
            <div class="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
              <div class="mx-auto h-40 bg-gray-500 rounded-md p-4">
                <h1 class="font-bold text-xl text-white">SERVER</h1>
                <div class="flex justify-center items-center mt-8">
                  <img
                    class="mr-6"
                    src="https://img.icons8.com/nolan/64/github.png"
                    width="50px"
                    height="50px"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>

              <div
                class="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"
              ></div>
              <div
                class="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Terminal 2 -->
    <div class="w-3/5 h-auto mx-auto my-8">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-60 bg-gray-500 border-black mx-auto"
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
            <p class="text-center text-sm">Frontend</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 h-auto text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$ about frontend; <br />
            Vue.js + tailwindCSS --- Vue Router --- Vuex --- Axios <br />
            <br />
            Vue's single page application for efficiency and performance. <br />
            Router and vuex for links and data management <br />
            Axios for request/response <br />
            <br />
          </p>
        </div>
      </div>
    </div>
    <!-- Terminal 2 Ends -->
    <!-- Captures and Diagrams -->
    <div class="w-3/5 mx-auto my-6">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-96 bg-white border-black mx-auto"
      >
        <div class="p-1 text-black font-mono text-base">
          <p>
            Test
          </p>
        </div>
      </div>
    </div>

    <!-- Terminal 3 -->
    <div class="w-3/5 h-auto mx-auto my-8">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-40 bg-gray-500 border-black mx-auto"
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
            <p class="text-center text-sm">Frontend</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 h-auto text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$ about the design;<br />
            <br />
            The minimalistic design that invokes DEV <br />
            <br />
          </p>
        </div>
      </div>
    </div>
    <!-- Terminal 3 Ends -->
    <!-- Captures and Diagrams -->
    <div></div>

    <!-- Terminal 4 -->
    <div class="w-3/5 h-auto mx-auto my-8">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-40 bg-gray-500 border-black mx-auto"
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
            <p class="text-center text-sm">Backend</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 h-auto text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$ about backend; <br />
            Spring --- JPA/Hibernate --- SpringSecurity --- Axios <br />
            <br />
          </p>
        </div>
      </div>
    </div>
    <!-- Terminal 4 Ends -->
    <!-- Captures and Diagrams -->
    <div></div>

    <!-- Terminal 4 -->
    <div class="w-3/5 h-auto mx-auto my-8">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-60 bg-gray-500 border-black mx-auto"
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
            <p class="text-center text-sm">Backend</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 h-auto text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$ list function;<br />
            <br />
            SignUp ________ GetArticle ________ DeleteArticle ______
            DeletComment <br />
            SignIn ________ PostArticle _______ PostComment ________ EditProfile
            <br />
            SignOut _______ EditArticle _______ EditComment ________
            EditPassword <br />
            <br />
          </p>
        </div>
      </div>
    </div>
    <!-- Terminal 4 Ends -->
    <!-- Captures and Diagrams -->
    <div></div>

    <!-- Terminal 4 -->
    <div class="w-3/5 h-auto mx-auto my-8">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-60 bg-gray-500 border-black mx-auto"
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
            <p class="text-center text-sm">Backend</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 h-auto text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$ future addon; <br />
            <br />
            Bookmarks ________ Chatting ________ FileSharing
          </p>
        </div>
      </div>
    </div>
    <!-- Terminal 4 Ends -->
    <!-- Captures and Diagrams -->
    <div></div>

    <!-- Terminal 7 -->
    <div class="w-3/5 h-auto mx-auto my-8">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-40 bg-gray-500 border-black mx-auto"
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
            <p class="text-center text-sm">Server</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 h-auto text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">
            daniel$ about server; <br />
            GitHub --- AWS <br />
            <br />
            for the ease of version control<br />
            <br />
          </p>
        </div>
      </div>
    </div>
    <!-- Terminal 7 Ends -->
    <!-- Captures and Diagrams -->
    <div></div>

    <!-- Terminal End -->
    <div class="w-3/5 h-auto mx-auto my-8">
      <div
        class="w-full shadow-2xl subpixel-antialiased rounded h-24 bg-gray-500 border-black mx-auto"
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
            <p class="text-center text-sm">End</p>
          </div>
        </div>
        <div
          class="pl-1 pt-1 h-auto text-green-200 font-mono text-base bg-gray-500"
          id="console"
        >
          <p class="pb-1 px-1">daniel$ ThankYou World!;<br /></p>
        </div>
      </div>
    </div>
    <!-- Terminal End Ends -->

    <!-- The Main Section -->
  </div>
</template>
