<template>
    <div class="mt-[10%] flex justify-center">
      <div
        v-if="url_about"
        class="custom-card border-2 border-gray-400 rounded h-auto w-[40%] p-[16px] overflow-hidden"
      >
        <h1 class="text-2xl font-bold mt-1 text-center">
            Your shortened URL
        </h1>
        <p class="text-[16px] text-center font-medium mb-4">Copy the shortened link and share it in messages, texts, posts, websites and other locations.</p>
        <!-- eslint-disable -->
        <a-input-search
          v-if="url_about.url"
          v-model:value="url_about.url"
          placeholder="Enter long url"
          enter-button="Copy URL"
          size="large"
          @change="changeInt"
          @search="copy(url_about.url)"
        />
        <p v-if="url_about.long_url" class="my-3 mt-8 text-lg leading-[20px] flex flex-wrap mx-auto font-medium">
            Long URL: <a class="text-[#009DFF] text-[16px]" :href="url_about.long_url">{{ url_about.long_url }}</a>
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
  import { copyURL } from '@/utils/reusable'
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
        this.url_about.url = window.location.origin.split('/')[2] + '/' + this.url_about.url_code
      }else{
        this.$router.push('/')
      }
     },

     copy(url){
      return copyURL(url)
     },

     changeInt(){
      this.url_about.url = window.location.origin.split('/')[2] + '/' + state.url_abouts.url_code
     }
    },

    created() {
     this.getURlAbouts()
    },

    watch: {
      'url_about.url'(newValue, oldValue){
        if(newValue !== window.location.origin.split('/')[2] + '/' + this.url_about.url_code)
           this.changeInt()          
      }
    },
  }
  </script>