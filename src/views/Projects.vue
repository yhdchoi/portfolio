<template>
  <main class="m-auto w-full bg-black flex-row justify-center items-center ">
    <div class="bg-black p-10">
      <div class="text-center my-4">
        <p class="text-white text-3xl ">PROJECTS 🧑🏻‍💻</p>
      </div>
      <br />

      <!-- J_Blog -->
      <div class="w-3/5 mx-auto my-6">
        <a
          class="animate-pulse text-purple-200 flex items-center shadow justify-center"
          href="https://github.com/yhdchoi/jspblog.git"
          target="_blank"
          rel="noopener noreferrer"
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
          <p class="text-lg text-green-500 mb-10">
            J_Blog Repository
          </p>
        </a>

        <div
          class="w-full shadow-2xl subpixel-antialiased rounded h-96 bg-gray-500 border-black m-auto overflow-auto"
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
              <p class="text-center text-base text-green-500">J_Blog</p>
            </div>
          </div>
          <div class="pl-1 pt-1 font-mono text-base bg-gray-500 " id="console">
            <p class="pb-1 px-1 text-green-200">
              daniel$
              <a
                href="https://sites.google.com/view/yhdcjblog	"
                class="animate-pulse border-b-2 text-green-400 hover:text-green-800 hover:border-green-500 ml-2"
                target="_blank"
                rel="noopener noreferrer"
                >Click HERE for J_Blog</a
              >
              <br />
              <br />
              daniel$ project description; <br />
              This project is started as a study for JPA and Security and became
              a fully functioning blog.
              <br />
              <br />
              daniel$ Why the name J_Blog?<br />
              The character 'J' stands for 'Join' where the project originally
              started as a study of Join Table in DataBase.
              <br />
              <br />
              daniel$ print tools used;<br />
              Spring MVC/Boot, JPA/Hibernate, Spring Security/OAuth2.0,
              JSP/JSTL;
            </p>
          </div>
        </div>
      </div>
      <!-- JBlog Ends -->

      <br />

      <!-- JWT -->
      <div class="w-3/5 mx-auto my-6">
        <a
          class="animate-pulse text-purple-200 flex items-center shadow justify-center"
          href="https://github.com/yhdchoi/secujwt"
          target="_blank"
          rel="noopener noreferrer"
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
          <p class="text-lg text-red-500 mb-10">
            JWT Repository
          </p>
        </a>
        <div
          class="w-full shadow-2xl subpixel-antialiased rounded h-72 bg-gray-500 border-black m-auto overflow-auto"
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
              <p class="text-center text-base text-red-500">
                JWT
              </p>
            </div>
          </div>
          <div class="pl-1 pt-1 font-mono text-base bg-gray-500" id="console">
            <p class="pb-1 px-1  text-green-200">
              daniel$
              <a
                href="https://sites.google.com/view/yhdcjwt"
                class="animate-pulse border-b-2 text-red-400 hover:text-red-800 hover:border-red-500 ml-2"
                target="_blank"
                rel="noopener noreferrer"
                >Click HERE for JWT</a
              >
              <br />
              <br />
              daniel$ project description; <br />
              The study of Spring Security JWT (Json Web Token).
              <br />
              <br />
              daniel$ print tools used;<br />
              Spring Boot, JPA/Hibernate, Spring Security, JSON Web Token, Java
              JWT;
              <br />
              <br />
              daniel$
            </p>
          </div>
        </div>
      </div>
      <!-- JWT Ends -->

      <br />

      <!-- React_BB -->
      <!-- <div class="w-3/5 mx-auto my-6">
      <a
        class="animate-pulse  text-purple-200 flex items-center justify-center"
        href="https://github.com/yhdchoi/reactblog.git"
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
        <p class="text-lg text-blue-500  hover:text-blue-600 mb-10">
          React_blog Repository
        </p>
      </a>
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
            <p class="text-center text-base text-blue-500">React_blog</p>
          </div>
        </div>
        <div class="pl-1 pt-1 font-mono text-base bg-gray-500" id="console">
          <p class="pb-1 px-1 text-green-200">
            daniel$
            <a
              href="https://sites.google.com/view/yhdcreact"
              class="animate-pulse border-b-2 text-blue-400 hover:text-blue-800 hover:border-blue-500 ml-2"
              >Click HERE for React_blog</a
            >
            <br />
            <br />
            daniel$ print tools used;<br />
            Spring MVC/Boot, JPA/Hibernate, React.js;
            <br />
            <br />
            daniel$
            <br />
          </p>
        </div>
      </div>
    </div> -->
      <!-- React Ends -->

      <br />
      <div class="text-center my-4">
        <p class="text-white text-3xl ">STUDY NOTES 📑</p>
      </div>
      <br />

      <!-- AWS -->
      <div class="w-3/5 mx-auto my-6">
        <div
          class="w-full shadow-2xl subpixel-antialiased rounded h-52 bg-gray-500 border-black m-auto overflow-auto"
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
              <p class="text-center text-base text-yellow-500">
                AWS
              </p>
            </div>
          </div>
          <div class="pl-1 pt-1 font-mono text-base bg-gray-500" id="console">
            <p class="pb-1 px-1 text-green-200">
              daniel$
              <a
                href="https://sites.google.com/view/yhdcaws"
                class="animate-pulse border-b-2 text-yellow-400 hover:text-yellow-600 hover:border-yellow-500 ml-2"
                target="_blank"
                rel="noopener noreferrer"
                >Click HERE for AWS</a
              >
              <br />
              <br />
              daniel$ project description; <br />
              The Amazon Web Service experiment.
              <br />
              <br />
              daniel$ an overview;<br />
              Virtual Private Cloud (VPC), EC2, EBS, EFS, S3, RDS, DynamoDB,
              CloudFormation,Beanstalk;
            </p>
          </div>
        </div>
      </div>
      <!-- AWS Ends -->

      <br />

      <!-- Docker&Kubernetes -->
      <div class="w-3/5 mx-auto my-6">
        <div
          class="w-full shadow-2xl subpixel-antialiased rounded h-72 bg-gray-500 border-black m-auto overflow-auto"
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
              <p class="text-center text-base text-blue-500">
                Docker&K8s
              </p>
            </div>
          </div>
          <div
            class="pl-1 pt-1 text-green-200 font-mono text-base bg-gray-500"
            id="console"
          >
            <p class="pb-1 px-1">
              daniel$
              <a
                href="https://sites.google.com/view/yhdcdocker"
                class="animate-pulse border-b-2 text-blue-500 hover:text-blue-800 hover:border-blue-500 ml-2"
                target="_blank"
                rel="noopener noreferrer"
                >Click HERE for Docker</a
              >
              <br />
              <br />
              daniel$ project description; <br />
              The Docker & Kubernetes Experiment.
              <br />
              <br />
              daniel$ an overview;<br />
              Docker, Kubernetes;
              <br />
              <br />
              daniel$
            </p>
          </div>
        </div>
      </div>
      <!-- Docker&Kubernetes Ends -->

      <br />

      <div class="text-center my-4">
        <p class="text-white text-3xl ">UNDER DEVELOPMENT ... 🏗 ⚙️ 🛠</p>
      </div>

      <!-- Co-Logic -->
      <div class="w-3/5 mx-auto my-6">
        <a
          class="animate-pulse  text-purple-200 flex items-center justify-center"
          href="https://github.com/yhdchoi/dev_logic.git"
          target="_blank"
          rel="noopener noreferrer"
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
          <p class="text-lg text-pink-500  hover:text-purple-600 mb-10">
            CO-Logic Repository
          </p>
        </a>
        <div
          class="w-full shadow-2xl subpixel-antialiased rounded h-96 bg-gray-500 border-black m-auto overflow-auto"
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
              <p class="text-center text-base text-pink-500">CO-Logic</p>
            </div>
          </div>
          <div class="pl-1 pt-1 font-mono text-base bg-gray-500" id="console">
            <p class="pb-1 px-1 text-green-200">
              daniel$
              <i class="text-pink-400"> THIS PROJECT IS UNDER DEVELOPMENT </i>
              <br />
              <br />
              daniel$
              <a
                href="#"
                class="animate-pulse border-b-2 text-pink-400 hover:text-pink-800 hover:border-pink-500 ml-2"
                target="_blank"
                rel="noopener noreferrer"
                >Click HERE for CO-Logic</a
              >
              <br />
              <br />
              daniel$ What is CO-Logic?<br />
              The work management application for your workflow.
              <br />
              <br />
              daniel$ print tools used;<br />
              SpringBoot, JPA/Hibernate, Spring Security, React, Redux, Axios,
              Bootstrap;
            </p>
          </div>
        </div>
      </div>
      <!-- Co-Logic Ends -->

      <!-- DEcrypt -->
      <div class="w-3/5 mx-auto my-6">
        <a
          class="animate-pulse  text-purple-200 flex items-center justify-center"
          href="https://github.com/yhdchoi/decrypt.git"
          target="_blank"
          rel="noopener noreferrer"
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
          <p class="text-lg text-pink-500  hover:text-purple-600 mb-10">
            DEcrypt Repository
          </p>
        </a>
        <div
          class="w-full shadow-2xl subpixel-antialiased rounded h-96 bg-gray-500 border-black m-auto overflow-auto"
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
              <p class="text-center text-base text-pink-500">DEcrypt</p>
            </div>
          </div>
          <div class="pl-1 pt-1 font-mono text-base bg-gray-500" id="console">
            <p class="pb-1 px-1 text-green-200">
              daniel$
              <i class="text-pink-400"> THIS PROJECT IS UNDER DEVELOPMENT </i>
              <br />
              <br />
              daniel$
              <a
                href="https://sites.google.com/view/yhdcdecrypt"
                class="animate-pulse border-b-2 text-pink-400 hover:text-pink-800 hover:border-pink-500 ml-2"
                target="_blank"
                rel="noopener noreferrer"
                >Click HERE to DEcrypt</a
              >
              <br />
              <br />
              daniel$ Why the name DEcrypt?<br />
              The anonymous individuals to unpack or 'decrypt' their thoughts
              and to be shared.
              <br />
              <br />
              daniel$ print tools used;<br />
              Spring MVC/Boot, JPA/Hibernate, Spring Security, Vue, Vue Router,
              TailwindCSS;
            </p>
          </div>
        </div>
      </div>
      <!-- DEcrypt Ends -->

      <br />
    </div>
  </main>
</template>
