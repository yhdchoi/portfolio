<template>
  <div class="h-screen bg-yellow-300 text-white p-10">
    <div class="w-full text-center">
      <h1 class="font-bold text-4xl text-black my-8">
        Contact
      </h1>
    </div>

    <form class="w-full max-w-lg m-auto" @submit.prevent="sendEmail">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            for="grid-password"
          >
            Name:
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="name"
            type="text"
            placeholder="Required"
            required
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            for="grid-password"
          >
            E-mail:
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="email"
            type="email"
            placeholder="Required"
            required
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            for="grid-password"
          >
            Message:
          </label>
          <textarea
            class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            name="message"
            placeholder="Your message here"
            required
          ></textarea>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            class="bg-gray-200 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded"
            type="submit"
            value="Send"
          >
            Send
          </button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
  </div>
</template>

<script>
  import emailjs from "emailjs-com";

  export default {
    methods: {
      sendEmail: (e) => {
        emailjs
          .sendForm(
            "service_s0zl7ji",
            "template_xastm9c",
            e.target,
            "user_5wJ4vaqoymhBBCtKf0PpQ"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.status, result.text);
              alert("Your message is sent!");
            },
            (error) => {
              console.log("FAILED...", error);
              alert("Error! Please try again or Try at yhdchoi@gmail.com.");
            }
          );
        e.target.reset();
      },
    },
  };
</script>
