<template>
  <div class="h-full bg-black p-10 text-center">
    <div class="w-full">
      <h1 class="font-bold text-5xl text-green-300  hover:text-green-600 mb-10">
        AWS
      </h1>
      <p></p>
    </div>
    <div class="max-w-lg mx-auto">
      <div class="text-xl text-white mb-3">
        <p>
          An experimental project with Amazon Web Service.
        </p>
      </div>
    </div>
    <br />
    <div class="max-w-lg mx-auto">
      <div class="text-white mb-4">
        <h5 class="text-2xl text-white font-bold mb-2">Overview:</h5>
        <ul class="text-lg">
          <li>Introduction</li>
          <li>VPC</li>
          <li>EC2</li>
          <li>S3</li>
          <li>RDS</li>
          <li></li>
        </ul>
      </div>
    </div>
    <br />

    <!-- Intro -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-xl font-bold text-purple-300 hover:text-purple-500 mb-2">
        <p>
          1. Introduction
        </p>
      </div>
    </div>
    <p class="text-sm text-white mb-4">
      The AWS Global Infrastructure is composed of 24 regions around the world.<br>
      Every region is connected via a high bandwidth and fully redundant<br>
      network. Each region is compleletly independent. And each region consists<br>
      of two or more Avaliability zones with several data centers.<br>     
    </p>
    <img class="w-3/5 mb-4 m-auto" src="" />

    <br />

    <!-- Intro -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-xl font-bold text-purple-300 hover:text-purple-500 mb-2">
        <p>
          2. VPC Virtual Private Cloud
        </p>
      </div>
    </div>
    <p class="text-sm text-white mb-4">
      .<br>
     
    </p>

    <img class="w-3/5 mb-4 m-auto" src="" />

    <br />





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
  </div>
</template>
