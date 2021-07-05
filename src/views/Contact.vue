<template>
  <div class="h-screen bg-black text-white p-10">
    <div class="w-full text-center">
      <h1 class="font-bold text-4xl text-white  hover:text-green-500 my-8">
        Contact 
      </h1>
    </div>

    <form class="w-full max-w-lg m-auto" >
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
            for="grid-password"
          >
            Title
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="title"
            type="text"
            placeholder="Required"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
            for="grid-password"
            
          >
            E-mail
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="email"
            type="email"
            placeholder="Required"
          />
          
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            name="message"
            placeholder="Your message here"
          ></textarea>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            class="bg-gray-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
            type="submit"
            value="Send"
          >
            Send
          </button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>

    <!-- <div class="flex flex-wrap -mx-3 mb-6 ">
      <form name="contact-form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div> -->
  </div>
</template>


<script>
  // import emailjs from 'emailjs-com';

  // export default {
  //   methods: {
  //     sendEmail: (e) => {
  //       emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
  //         .then((result) => {
  //             console.log('SUCCESS!', result.status, result.text);
  //         }, (error) => {
  //             console.log('FAILED...', error);
  //         });
  //     }
  //   }
  // }
  //
</script>
