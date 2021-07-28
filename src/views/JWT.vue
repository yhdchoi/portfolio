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
          <li>Principal</li>
          <li>CorsFilter</li>
          <li>Authorization</li>
          <li>Authentication</li>
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
      <div
        class="text-2xl font-bold text-purple-300 hover:text-purple-500 mb-2"
      >
        <p>
          1. Concept
        </p>
      </div>
    </div>

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Jason Web Token (JWT) is a JSON object that transmits information securely
      btween parties. Since it uses JSON between the server and the application,
      only requires single server for all the applications. For these reason it
      is used widely across many different applications.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jwt/jwt.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The object is digitally signed with a secret or public/private key pair
      using RSA(Rivest Shamir Adleman) or ECDSA(Elliptic Digital Signature
      Algorithm). When tokens are signed using public/private key pairs, the
      signature also certifies that only the party holding the private key is
      authorized.
    </p>
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
      <div class="text-2xl font-bold text-blue-300 hover:text-blue-500 mb-2">
        <p>
          2. Configuration
        </p>
      </div>
    </div>

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      To start, the WebSecurity has to be configured. Since we are using JWT,
      the formLogin() and httpBasic() have to be disabled. And to authenticate
      users, the two filters, AuthenticationFilter and AuthorizationFilter are
      added. Authentification is for checking if the user is who the user is
      saying. Authorization is for deciding what data the user can access.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jwt/jwtconfig.png" />
    <br />

    <!-- Principal -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-2xl font-bold text-blue-300 hover:text-blue-500 mb-2">
        <p>
          3. Principal
        </p>
      </div>
    </div>

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The Principal class is to retrieve the user information for authenticating
      and authorizing.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jwt/prindet.png" />
    <img class="w-3/5 mb-10 m-auto" src="../assets/jwt/prindetserv.png" />
    <br />

    <!-- CorsFilter -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-2xl font-bold text-blue-300 hover:text-blue-500 mb-2">
        <p>
          4. CorsFilter
        </p>
      </div>
    </div>

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The Cross-Origin Resource Sharing (CORS) checks for authorization for
      accessing between two different domains. By setting ehe
      setAllowCredentials true, allowing Javascripts to process the server's
      JSON response. The addAllowedOrigin is set to allow all IP addresses. The
      addAllowedMethod aloows all API CRUD process.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jwt/jwtcorsfilter.png" />
    <br />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Before moving on the next step the JWT tool has to be added to our
      dependencies. We can delevelop without the tool but it is much more
      efficient to use it just like we are using the Spring.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jwt/jwt4.png" />

    <br />

    <!-- Authorize -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-2xl font-bold text-blue-300 hover:text-blue-500 mb-2">
        <p>
          5. Authorization
        </p>
      </div>
    </div>

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The authorization process takes the Header and verifies the user. And if
      it is verified, the user is allowed in. Here we use the Secret Key with
      the HMAC512 algorithm to decode the token.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jwt/jwtauthor.png" />
    <br />

    <!-- Authetication -->
    <div class="max-w-lg mx-auto mb-4">
      <div class="text-2xl font-bold text-blue-300 hover:text-blue-500 mb-2">
        <p>
          6. Authentication
        </p>
      </div>
    </div>

    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The authentication fillter authenticate the user and returns a token back
      to the user. The token is made using HMAC512. The expiration date must be
      inserted. If the expiration date is not set, there are risk of the token
      being used by others to access your data.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jwt/jwtauthen.png" />
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
