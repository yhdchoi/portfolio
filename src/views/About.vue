<template>
  <section>
    <div class="bg-black text-white py-8">
      <div
        class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24"
      >
        <div
          class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
        >
          <p class="ml-2 text-blue-300 tracking-loose">
            DEV_life in progress
          </p>
          <p
            class="font-bold text-3xl md:text-4xl uppercase leading-normal md:leading-relaxed mb-2"
          >
            Yeonghyun Choi
          </p>
          <p class="text-sm md:text-base text-gray-50 mb-4">
            With my academic background in both Art and Science, as my strength.
            I think in a creative manner and always striving to improve and
            present creative ways to solve problems. I value an environment
            where it can motivate both personal and professional development.
          </p>

          <div class="mt-4">
            <a
              href="#"
              class="bg-transparent mr-auto hover:bg-red-300 text-white hover:text-white border rounded shadow hover:shadow-lg py-2 px-4  hover:border-transparent"
            >
              Download Resume
            </a>
          </div>

          <div class="mt-8">
            <a
              href="https://www.linkedin.com/in/yeonghyun-choi-a15993b6/"
              class="flex items-center hover:text-blue-500 p-2"
            >
              <svg
                fill="white"
                class="w-6 h-6 m-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"
                />
              </svg>
              Linkedin
            </a>

            <a
              href="https://github.com/yhdchoi"
              class="flex items-center hover:text-purple-500 p-2"
            >
              <svg
                fill="white"
                class="w-6 h-6 m-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              Github
            </a>

            <a
              href="https://www.youtube.com/channel/UCfOxhiu_PqZqXqOqvFP_sJg/videos"
              class="flex items-center hover:text-red-500 p-2"
            >
              <svg
                fill="white"
                class="w-6 h-6 m-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
              Youtube
            </a>
          </div>
        </div>

        <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div class="container mx-auto w-full h-full">
            <div class="relative wrap overflow-hidden p-10 h-full">
              <div
                class="border-2-2 border-blue-500 absolute h-full border"
                style="right: 50%; border: 2px solid #bdb2ff; border-radius: 1%;"
              ></div>
              <div
                class="border-2-2 border-blue-500 absolute h-full border"
                style="left: 50%; border: 2px solid #bdb2ff; border-radius: 1%;"
              ></div>

              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-right">
                  <p class="mb-3 text-base text-green-300">September, 1997</p>
                  <h4 class="mb-3 font-bold text-lg md:text-2xl">
                    To CANADA
                  </h4>
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    At the age of 13, I was a very introverted and submisive
                    person before. As I have submerged into Canada's diverse
                    culture, I have became someone who is independent and take
                    the initiative.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between items-center w-full right-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1  w-5/12 px-1 py-4 text-left">
                  <p class="mb-3 text-base text-pink-300">May, 2009</p>
                  <h4 class="mb-3 font-bold text-lg md:text-xl">
                    Fanshawe College
                  </h4>
                  <p
                    class="mb-3 text-sm md:text-base font-bold leading-snug text-gray-50 text-opacity-100"
                  >
                    Pre-Health Science Diploma
                  </p>
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    The study has provided me with the understading of the application of science including anatomy, biology, and chemistry.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-right">
                  <p class="mb-3 text-base text-purple-300">
                    January - July, 2010
                  </p>
                  <h4 class="mb-3 font-bold text-lg md:text-xl">
                    DAN Architects & Consultant.
                  </h4>
                  <p
                    class="mb-3 text-sm md:text-base font-bold leading-snug text-gray-50 text-opacity-100"
                  >
                    Co-op for Architectural Technology program <br />
                    Fanshawe College.
                  </p>
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    It was my very first co-op experience. The experience has
                    made me realize the difference between academic and
                    professional world.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between items-center w-full right-timeline"
              >
                <div class="order-1 w-5/12"></div>

                <div class="order-1  w-5/12 px-1 py-4">
                  <p class="mb-3 text-base text-yellow-300">
                    July - December, 2011
                  </p>
                  <h4 class="mb-3 font-bold  text-lg md:text-xl text-left">
                    EGA Group Inc.
                  </h4>
                  <p
                    class="mb-3 text-sm md:text-base font-bold leading-snug text-gray-50 text-opacity-100"
                  >
                    Co-op for Architectural Technology program <br />
                    Fanshawe College.
                  </p>
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    The opportunity has provided me with an experience of
                    working in a large company which has tought me the
                    importance of team management.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-right">
                  <p class="mb-3 text-base text-red-300">May, 2013</p>
                  <h4 class="mb-3 font-bold text-lg md:text-xl">
                    Fanshawe College
                  </h4>
                  <p
                    class="mb-3 text-sm md:text-base font-bold leading-snug text-gray-50 text-opacity-100"
                  >
                    Architectural Technology Diploma
                  </p>
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    The program has helped me to build a solid foundation on Structural
                    Engineering and Planning.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between items-center w-full right-timeline"
              >
                <div class="order-1 w-5/12"></div>

                <div class="order-1  w-5/12 px-1 py-4">
                  <p class="mb-3 text-base text-blue-300">12 May, 2021</p>
                  <h4 class="mb-3 font-bold  text-lg md:text-xl text-left">
                    University of Toronto
                  </h4>
                  <p
                    class="mb-3 text-sm md:text-base font-bold leading-snug text-gray-50 text-opacity-100"
                  >
                    Daniel's School of Art, Artchitecture, Landscape and Urban
                    Design <br />
                    Art Degree with honours
                  </p>
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    The study has helped me building skills in critical thinking, leadership and project management.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-right">
                  <p class="mb-3 text-base text-green-300">
                    August, 2017 - July, 2018
                  </p>
                  <h4 class="mb-3 font-bold text-lg md:text-xl">
                    Bpa Design Inc.
                  </h4>
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    The office was located at a beautiful Jeju Island, S,Korea.
                    I've worked as a leading designer, responsible for Client
                    management, design & planning, drawings, scaled model
                    production and proposal presentation.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between items-center w-full right-timeline"
              >
                <div class="order-1 w-5/12"></div>

                <div class="order-1  w-5/12 px-1 py-4">
                  <p class="mb-3 text-base text-pink-300">
                    April, 2019 - April, 2020
                  </p>
                  <h4 class="mb-3 font-bold  text-lg md:text-xl text-left">
                    Abel Language School
                  </h4>
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    I have worked as an English teacher. It was a challanging
                    experience for me. I have realized the difference between
                    knowing and teaching.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-right">
                  <p class="mb-3 text-base text-purple-300">
                    September, 2020 - July, 2021
                  </p>
                  <h4 class="mb-3 font-bold md:text-4xl hover:text-green-300">
                    SBS Computer Academy
                  </h4>
                  <p
                    class="font-bold md:text-lg leading-snug text-opacity-100 text-white hover:text-blue-300"
                  >
                    It was my first programming class in high school, where I
                    was captured by the charm of programming. With my skills and
                    experience from my architectural and science backgrounds, I
                    have been able to not just learn but propose diffrenet
                    solutions to problems. This strength of mine is where I
                    differentiate from other developers and I believe I can
                    bring new perspectives to the industry.
                  </p>
                </div>
              </div>
            </div>
            <img
              class="mx-auto -mt-30 md:-mt-30"
              src="https://img.icons8.com/color/96/000000/innovation.png"
            />
            <!-- <img
              class="mx-auto -mt-36 md:-mt-36"
              src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
            /> -->
          </div>
        </div>
        <!-- End of Timeline -->
      </div>
    </div>
  </section>
</template>
