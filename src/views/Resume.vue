<template>
<div class="m-auto w-full bg-black flex-row justify-center items-center ">
  <div
    class="container m-auto min-h-screen bg-black"
  >
    <div
      class="m-auto max-w-sm rounded-lg overflow-hidden shadow-lg mb-2 bg-black"
    >
      <div>
        <img
          class="rounded-full mx-auto mt-6 w-40 h-40 border-1 border-gray-500"
          height="200"
          width="200"
          src="../assets/logo.png"
          alt="Profile image"
        />
      </div>
      <div class="pt-6 pb-8 text-white text-center">
        <p class="text-3xl mb-2 ">Yeonghyun Choi</p>
        <p class="text-gray-300">Fullstack Developer</p>
        <p class="text-sm mt-2 text-gray-300">
          Originated from and living on Planet Earth
        </p>
      </div>
    </div>
    <!-- About -->
    <div class="bg-black p-5">
      <div
        class="flex items-center space-x-2 font-semibold text-gray-200 leading-8"
      >
        <span clas="text-green-500">
          <svg
            class="h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>
        <span class="tracking-wide">About</span>
      </div>
      <div class="text-gray-200">
        <div class="grid md:grid-cols-2 text-sm">
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">First Name:</div>
            <div class="px-4 py-2">Yeonghyun</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Last Name:</div>
            <div class="px-4 py-2">Choi</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Contact No.:</div>
            <div class="px-4 py-2">+82 010 2162 9310</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Address:</div>
            <div class="px-4 py-2">Seoul, South Korea <br>/ Toronto, Canada</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Email:</div>
            <div class="px-4 py-2">
              <a class="text-blue-800" href="mailto:yhdchoi@gmail.com"
                >yhdchoi@gmail.com</a
              >
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Birthday:</div>
            <div class="px-4 py-2">Dec 23, 1983</div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of about section -->
    <!-- Experience and education -->
    <div class="bg-black p-5">
      <div class="grid grid-cols-2">
        <div>
          <div
            class="flex items-center space-x-2 font-semibold text-gray-200 leading-8 mb-3"
          >
            <span clas="text-green-500">
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </span>
            <span class="tracking-wide">Experience</span>
          </div>
          <ul class="list-inside space-y-2 ml-4">
            <li>
              <div class="text-gray-200">ABEL Language Academy</div>
              <div class="text-gray-400 text-xs">March 2019 - March 2020</div>
            </li>
            <li>
              <div class="text-gray-200">Bpa Design Inc.</div>
              <div class="text-gray-400 text-xs">August 2017 - July 2018</div>
            </li>
            <li>
              <div class="text-gray-200">EGA Group Inc.</div>
              <div class="text-gray-400 text-xs">May 2011 - December 2011</div>
            </li>
            <li>
              <div class="text-gray-200">DAN Architects & Consultants Inc.</div>
              <div class="text-gray-400 text-xs">January 2010 - May 2010</div>
            </li>
          </ul>
        </div>
        <div>
          <div
            class="flex items-center space-x-2 font-semibold text-gray-200 leading-8 mb-3"
          >
            <span class="text-gray-200">
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  fill="#fff"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </span>
            <span class="tracking-wide">Education</span>
          </div>
          <ul class="list-inside space-y-2">
            <li>
              <div class="text-gray-200">SBS Computer Academy</div>
              <div class="text-gray-400 text-xs">
                September 2020 - July 2021
              </div>
            </li>
            <li>
              <div class="text-gray-200">
                Bachelors Degree in Architecture - University of Toronto
              </div>
              <div class="text-gray-400 text-xs">
                September 2013 - June 2017
              </div>
            </li>
            <li>
              <div class="text-gray-200">
                Architectural Technology Diploma - Fanshawe College
              </div>
              <div class="text-gray-400 text-xs">September 2009 - May 2013</div>
            </li>
            <li>
              <div class="text-gray-200">
                Pre-Health Science Diploma - Fanshawe College
              </div>
              <div class="text-gray-400 text-xs">September 2007 - May 2009</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- End of Experience and education grid -->
    </div>
    <!-- Social Traffic -->
    <div class="m-auto">
    <div class="flex flex-col min-w-0 p-4 bg-black">
        <div class="items-center px-1 py-2">
          <div class="flex">
            <span class="text-gray mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </span>
            <h3 class="font-semibold text-base text-gray-200 dark:text-gray-50">
              Skills
            </h3>
          </div>
        </div>
          <table class="items-center w-full mx-auto bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  class="px-4 bg-black dark:bg-gray-300 text-gray-300 dark:text-gray-100 align-middle border border-solid border-gray-600 dark:border-gray-500 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                >
                  TOOLS
                </th>
                <th
                  class="px-4 bg-black dark:bg-gray-300 text-gray-300 dark:text-gray-100 align-middle border border-solid border-gray-600 dark:border-gray-500 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                >
                  USAGE RATE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-green-700 hover:bg-gray-900">
                <th
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left"
                >
                  Spring
                </th>
                <td
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">90%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-green-200"
                      >
                        <div
                          style="width: 90%"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-700"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-purple-400 hover:bg-gray-900">
                <th
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left"
                >
                  JPA/Hibernate
                </th>
                <td
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">70%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-purple-200"
                      >
                        <div
                          style="width: 70%"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-400"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="text-pink-500 hover:bg-gray-900">
                <th
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left"
                >
                  Spring Security
                </th>
                <td
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">55%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-pink-200"
                      >
                        <div
                          style="width: 55%"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr class="text-green-400 hover:bg-gray-900">
                <th
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left"
                >
                  Vue.js
                </th>
                <td
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">50%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-green-100"
                      >
                        <div
                          style="width: 50%"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr class="text-blue-700 hover:bg-gray-900">
                <th
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left"
                >
                  Python
                </th>
                <td
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">40%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-blue-200"
                      >
                        <div
                          style="width: 40%"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr class="text-purple-800 hover:bg-gray-900">
                <th
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left"
                >
                  C / C++
                </th>
                <td
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">30%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-purple-300"
                      >
                        <div
                          style="width: 30%"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-800"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr class="text-red-400 hover:bg-gray-900">
                <th
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left"
                >
                  Linux
                </th>
                <td
                  class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">20%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-red-100"
                      >
                        <div
                          style="width: 30%"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-400"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
    </div>
    <!-- ./Social Traffic -->
  </div>
  </div>
</template>
