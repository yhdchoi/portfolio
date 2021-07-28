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
      between parties and only requires single server for all the applications.
      And for these reasons it is used widely across many different
      applications.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Jason Web Token (JWT)는 암호화된 token을 이용하여 client와 server의 안전한
      통신을 제공한다. 그리고 JSON을 이용하므로 다양한 application에서 이용됨.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jwt/jwt.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The object is digitally signed with a secret or public/private key pair
      using RSA(Rivest Shamir Adleman) or ECDSA(Elliptic Digital Signature
      Algorithm). When tokens are signed using public/private key pairs, the
      signature also certifies that only the party holding the private key is
      authorized.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Jason Web Token (JWT)는 RSA(Rivest Shamir Adleman) 아니면 ECDSA(Elliptic
      Digital Signature Algorithm)을 이용하여 token을 생성한다. Server는
      이token을 private/secret key를 이용하여 사용자를 확인한다.
    </p>
    <img class="w-3/5 mb-10 m-auto" src="../assets/jwt/jwt2.png" />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      JWT is composed of Header, Payload, and Signature. The header consists of
      the type of token and the algorithm being used. The payload contains the
      claims that are statements about an entity and additional data such as
      issuer, expiration time, subject, audience, etc.. The signature contains
      the encoded header and payload. It is used to verify the message wasn't
      changed along the transmition. It verifies that the sender of the JWT is
      who it says it is.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      JWT는 Header, Payload, Signature와 같이 세가지의 구조로 구성되어있다.
      Header는 token과 algorithm 타입을 가지고 있으며, Payload는 생성자,
      유통기한, 내용 등으로 구성죄어있다. Signature는 encode된 Header와
      Payload와 함께 encrypt된 token을 갔고있다.
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
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      처음으로 WebSecurity를 작성해야한다. JWT를 사용함으로 formLogin()과
      httpBasic()을 사용하지 않는다. AuthenticationFilter와
      AuthorizationFilter를 이용하여 사용자를 확인하여 data 접근 권한을 부여하고
      사용자를 위한 token을 생성한다.
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
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Principal class는 사용자의 정보를 갖고 인증절차를 구현하기 위함이다.
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
      accessing between two different domains. By setting the
      setAllowCredentials true, allowing Javascripts to process the server's
      JSON response. The addAllowedOrigin is set to allow all IP addresses. The
      addAllowedMethod allows all API CRUD proccess.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      The Cross-Origin Resource Sharing (CORS)는 다른 두 도메인을 연결해준다.
      setAllowCredentials를 true로 함으로서 Javascript가 server에게 JSON으로
      응답하게 할수있게함. addAllowedOrigin는 모든 IP addresse가 접근할 수
      있게한다. addAllowedMethod는 API CRUD를 할수있게 한다.
    </p>
    <img class="w-3/5 mb-6 m-auto" src="../assets/jwt/jwtcorsfilter.png" />
    <br />
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Before moving on the next step the JWT tool has to be added to our
      dependencies. We can delevelop without the tool but it is much more
      efficient to use it just like we are using the Spring.
    </p>
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      JWT dependency를 추가함으로서 JWT 구현을 수월하게 할수있다. 물론 모든
      구현을 직접 할수도 있지만, 우리가 Spring을 사용하는 것처럼 효율성을 위해
      사용을 추천한다.
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
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Authorization에서 Header를 이용하여 사용자를 확인한다. Secret Key와 the
      HMAC512 algorithm을 이용하여 token을 확인한다.
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
    <p class="text-lg text-white mb-8 w-3/5 m-auto">
      Authentication fillter는 사용자의 권한을 확인하고 새로운 token을
      생성하는데 쓰인다. Token은 HMAC512을 이용하여 만들어 지며 이때 유통기한을
      꼭 지정해 주어야한다.
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
