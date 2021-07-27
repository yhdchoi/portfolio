<template>
  <div class="h-full bg-black p-10 text-center">
    <div class="w-full">
      <h1 class="font-bold text-5xl text-green-300  hover:text-green-600 mb-10">
        JWT
      </h1>
      <p></p>
    </div>

    <div class="max-w-lg mx-auto">
      <div class="text-xl text-white mb-3">
        <p>
          An experimental project with Spring Security and Json Web Token (JWT).
        </p>
      </div>
    </div>
    <br />
    <div class="max-w-lg mx-auto">
      <div class="text-white mb-4">
        <h5 class="text-2xl text-pink-300 font-bold mb-2">Contents:</h5>
        <ul class="text-lg">
          <li>Concept</li>
          <li>Configuration</li>
          <li></li>
        </ul>
        <br />
        <p class="text-sm">
          Reference: https://jwt.io/introduction,
          https://www.vaadata.com/blog/jwt-tokens-and-security-working-principles-and-use-cases/
        </p>
      </div>
    </div>
    <br />

    <p class="text-sm text-white mb-4"></p>

    <img class="w-3/5 mb-4 m-auto" src="" />

    <!-- Concept -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-xl font-bold text-purple-300 hover:text-purple-500 mb-2">
        <p>
          1. Concept
        </p>
      </div>
    </div>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Jason Web Token (JWT) is a JSON object that transmits information securely
      btween parties. The object is digitally signed with a secret or
      public/private key pair using RSA(Rivest Shamir Adleman) or ECDSA(Elliptic
      Digital Signature Algorithm). When tokens are signed using public/private
      key pairs, the signature also certifies that only the party holding the
      private key is authorized.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jwt/jwt.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jwt/jwt2.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      JWT is composed of Header, payload, and signature. The header consists of
      the type of token and the algorithm being used. The payload contains the
      claims that are statements about an entity and additional data such as
      issuer, expiration time, subject, audience, etc.. The signature contains
      the encoded header and payload. It is used to verify the message wasn't
      changed along the transmition. It verifies that the sender of the JWT is
      who it says it is.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jwt/jwt3.png" />

    <br />

    <!-- Configuration -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-xl font-bold text-purple-300 hover:text-purple-500 mb-2">
        <p>
          2. Configuration
        </p>
      </div>
    </div>

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      .
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jwt/jwt.png" />
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
    <!-- The Main Section -->
  </div>
</template>
