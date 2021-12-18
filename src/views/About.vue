<template>
  <section>
    <div class="bg-gray-500 text-white py-8">
      <div
        class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24"
      >
        <div class="flex flex-col w-full  md:top-36 lg:w-1/3 mt-2 md:mt-4 px-8">
          <img
            class="rounded-full mb-8 w-40 h-40 border-1 border-gray-500"
            height="200"
            width="200"
            src="../assets/person1.png"
            alt="Profile image"
          />
          <p class="text-blue-300 tracking-loose">
            life in development
          </p>
          <p
            class="font-bold text-3xl md:text-4xl uppercase leading-normal md:leading-relaxed mb-2"
          >
            최영현 <br />
            Yeonghyun Choi
          </p>
          <p class="text-sm md:text-base text-gray-50 mb-4">
            Fullstack Developer 최영현입니다. 디자이너로 활동하며 많은 협력과
            경험을 통해 소통 및 기획 능력을 갖췄으며 작은 것도 그냥 지나치지
            않는 꼼꼼한 성격을 가지고 있습니다. 앞으로도 꾸준한 노력과 발전을
            통해 좋은 개발자로 발전해 가겠습니다.
          </p>
          <br />
          <p class="text-sm md:text-base text-gray-50 mb-4">
            Hello! I'm Yeonghyun a fullstack developer. I have a good team work
            skills and I've always strive to improve and present creative ways
            to solve problems with professionalism.
            <br />
          </p>
          <hr />
          <p>
            <br />
            Skill Set 🧑🏻‍💻<br />
            Spring Framework, Spring JPA, Spring Security, JWT, Oauth, JSP/JSTL,
            Javascript, ReactJS, Redux, Redux Toolkit, Vue.js, Axios, MySQL,
            MariaDB, PostgrSQL, JDBC, MyBatis, AWS, Linux, MacOS, Windows, HTML,
            CSS, PHP, Python, JAVA, C/C++
          </p>
          <br />

          <div class="mt-4">
            <router-link
              :to="{ name: 'Resume' }"
              class="animate-pulse bg-transparent mr-auto hover:bg-red-300 text-red-400 hover:text-white border border-red-400 rounded shadow hover:shadow-lg py-2 px-4  hover:border-transparent"
              >Click for my resume 이력서</router-link
            >
          </div>

          <div class="mt-8">
            <a
              href="https://www.linkedin.com/in/yeonghyun-choi-a15993b6/"
              class="flex items-center hover:text-blue-500 p-2"
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
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
            <img
              class="animate-pulse mx-auto -mb-10 -md:mb-10"
              src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-plane-origami-icongeek26-flat-icongeek26.png"
            />
            <br />
            <div class="relative wrap overflow-hidden p-10 h-full">
              <div
                class="animate-pulse border-2-2 border-blue-500 absolute h-full border"
                style="right: 50%; border: 2px solid #bdb2ff; border-radius: 1%;"
              ></div>
              <div
                class="animate-pulse border-2-2 border-blue-500 absolute h-full border"
                style="left: 50%; border: 2px solid #bdb2ff; border-radius: 1%;"
              ></div>

              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-right">
                  <p class="mb-3 text-base text-green-300">September, 1997</p>
                  <h4 class="mb-3 font-bold text-lg md:text-2xl">
                    Moving to CANADA
                  </h4>
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    이민 당시 저는 내성적이고 소심한 성격으로 인하여 사람들과
                    어울리지 못하였고 특히 정서와 언어의 장벽으로 인하여 많은
                    갈등을 겪으며 의도치 않은 오해들을 받기도 했습니다. 하지만
                    이러한 상황 속에서도 다양한 사람들과의 교류와 친구들과
                    함께하여 어려움을 극복하며 자신감을 키워 나갔습니다.
                  </p>
                  <br />
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    Moving to CANADA was a life changing moment. Canada has
                    shown me many different perspsectives of life and tought me
                    to be more adventurous and independent person.
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
                    전공을 통해 해부학, 생물학 및 화학을 포함한 전채적 과학
                    응용에 대한 이해를 습득 하였습니다.
                  </p>
                  <br />
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    The study has provided me with the understading of the
                    application of science including anatomy, biology, and
                    chemistry.
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
                  <!-- <p
                    class="mb-3 text-sm md:text-base font-bold leading-snug text-gray-50 text-opacity-100"
                  >
                    Co-op for Architectural Technology program <br />
                    Fanshawe College.
                  </p> -->
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    저의 첫 사회경험으로서 이를 통해 학업과 현업의 차이를 깨닫게
                    되었습니다. 학업을 통해 얻은 지식과 이론만을 바탕으로
                    바라보던 건축을 현실화 한다는 것은 매우 어려운 일이였습니다.
                    현실에서는 많은 사람들의 협조와 이해가 필요로 했고 이것을
                    이끌어 낸다는것은 결코 쉬운 작업이 아니였습니다.
                  </p>
                  <br />
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    The experience has made me realize the difference between
                    academic and professional world. My perspective on
                    architecture was solely based on idea and theories. Working
                    in an office, I had to make ideas into reality was a very
                    difficult and exasperating task. But I have learned how to
                    manage schedule and co-operate with team.
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
                  <!-- <p
                    class="mb-3 text-sm md:text-base font-bold leading-snug text-gray-50 text-opacity-100"
                  >
                    Co-op for Architectural Technology program <br />
                    Fanshawe College.
                  </p> -->
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    이 기회는 저에게 팀 관리의 중요성을 깨우치는 경험을
                    제공했습니다. 많은 사람이 함께 무언가를 이루어 낸다는 것은
                    단순히 개개인의 노력보다는 팀워크가 더욱더 중요하다는 것을
                    배웠습니다.
                  </p>
                  <br />
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    The opportunity has tought me the importance of team work.
                    Being able to accomplish a goal wasn't only by the skills
                    and ability of each individuals but by collaborating with
                    each other.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-right">
                  <p class="mb-3 text-base text-red-300">
                    September, 2009 - May, 2013
                  </p>
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
                    프로그램을 통해 구조 공학 및 계획에 대한 기반을
                    구축하였습니다.
                  </p>
                  <br />
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    The program has helped me to build a solid foundation on
                    Structural Engineering and Planning.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between items-center w-full right-timeline"
              >
                <div class="order-1 w-5/12"></div>

                <div class="order-1  w-5/12 px-1 py-4">
                  <p class="mb-3 text-base text-blue-300">
                    September, 2013 - June, 2017
                  </p>
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
                    건축에 묻어 있는 건축가들의 철학을 알아가며 건축물이
                    전해주는 다양하고 특별한 경험들을 체험할수 었습니다. 또한,
                    건축이 가르쳐주는 인류의 역사와 문화들은 다소 비판적인
                    생각을 지니고 있었던 저 자신에게 세상을 더 넓게 바라보는
                    방법을 알려주었습다.
                  </p>
                  <br />
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    I have been interested in art and architecture since I was
                    young. Especially, I was interested in learning about the
                    philosophies of architects and the special experiences that
                    architecture conveys. The history and culture of mankind
                    through architecture showed me how to view the world in a
                    more broad perspective.
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
                    아름다운 제주도에 함덕에 위치한 사무실에서 저는 리드
                    디자이너로 일하면서 클라이언트 관리, 디자인 및 계획, 도면,
                    축소 모델 제작 및 프레젠테이션을 담당했습니다.
                  </p>
                  <br />
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
                    언어학원에서 영어 강사로 일하며 다양한 분야의 사람들을
                    만나고 이야기를 나눌수 있었습니다. 그리고 이곳에서 만난
                    Software Engineer으로 부터 동기부여를 받아 개발자로서
                    도전하게 되었습니다.
                  </p>
                  <br />
                  <p
                    class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                  >
                    I have worked as an English teacher. One of the students
                    I've met was a software engineer and he motivated me to
                    become a delveloper.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-right">
                  <p class="mb-3 text-base text-yellow-300">
                    September, 2020 - July, 2021
                  </p>
                  <h4 class="mb-3 font-bold md:text-xl">
                    SBS Computer Academy
                  </h4>
                  <p
                    class="text-sm md:text-base leading-snug text-opacity-100 text-white"
                  >
                    Python 독학을 시작으로 학원을 통해 C/C++, Java, JSP,
                    JDBC/MyBatis, Spring Framework/Boot, Html/CSS, JSP, SQL,
                    CentOS를 배웠으며 학원 과정을 통해 느꼈던 컴퓨터 공학 관련
                    개념과 이론 그리고 알고리즘과 자료구조에 대한 부족한 점들을
                    지속적인 학습을 통해 채워나가고 있습니다.
                  </p>
                  <br />
                  <p
                    class="text-sm md:text-base leading-snug text-opacity-100 text-white "
                  >
                    Starting by self-leaning Python, I've learned C/C++, Java,
                    JSP, JDBC/MyBatis, Spring Framework/Boot, Html/CSS, JSP,
                    SQL, CentOS through the academy. I've realized my lack of
                    knowledge in the data structure and have been trying to fill
                    in the gaps through continuous learning.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <img
              class="animate-pulse mx-auto -mt-30 md:-mt-30"
              style="transform:rotate(90deg);"
              src="https://img.icons8.com/color/100/000000/f1-race-car-top-veiw.png"
            />
          </div>
        </div>
        <!-- End of Timeline -->
      </div>
    </div>
  </section>
</template>

<style scoped>
  .background-wrap {
    height: 100vh;
    background-image: url(../assets/bg5.png);
    background-position: center;
    background-size: cover;
  }
</style>
