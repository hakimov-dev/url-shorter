<template>
    <div class="mt-[10%] flex justify-center">
      <div
        v-if="url_about"
        class="custom-card border-2 border-gray-400 rounded h-auto w-[40%] p-[16px] text-center"
      >
        <h1 class="text-2xl font-bold mt-1">
            Your shortened URL
        </h1>
        <p class="text-[16px] font-medium mb-4">Copy the shortened link and share it in messages, texts, posts, websites and other locations.</p>
        <!-- eslint-disable -->
        <a-input-search
          v-if="url_about.url"
          v-model:value="url_about.url"
          placeholder="Enter long url"
          enter-button="Copy URL"
          size="large"
        />
        <p v-if="url_about.long_url" class="mx-2 my-3 mt-8 text-lg leading-[20px] font-medium">
            Long URL: {{ url_about.long_url }}
        </p>
        <p class="mx-2 my-3 mt-8 text-lg leading-[20px] font-medium">
            Create other <nuxt-link class="text-[#009DFF]" to="/">Shorten URL</nuxt-link>.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  /*eslint-disable */
  import { state } from '@/store';
  export default{
    data() {
      return {
        url_about: null,
      }
    },
  
    methods: {
     getURlAbouts(){
      if(state.url_abouts){
        this.url_about = state.url_abouts
        this.url_about.url = window.location.origin + '/' + this.url_about.url_code
        state.url_abouts
      }else{
        this.$router.push('/')
      }
     }
    },

    created() {
     this.getURlAbouts()
    },
  }
  </script>