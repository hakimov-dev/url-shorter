<template>
  <div class="mt-[10%] flex justify-center">
    <div
      class="custom-card border-2 border-gray-400 rounded h-auto w-[40%] p-[16px] text-center"
    >
      <h1 class="text-2xl font-bold mb-4 mt-1">
        Paste the URL to be shortened
      </h1>
      <!-- eslint-disable -->
      <a-input-search
        v-model:value="url"
        placeholder="Enter long url"
        enter-button="Shorten URL"
        size="large"
        @search="getURL"
      />
      <p class="mx-2 my-3 mt-8 text-lg leading-[20px] font-medium">
        URL Shorter is a free tool to shorten a URL or reduce a link Use our URL
        Shortener to create a shortened link making it easy to remember
      </p>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import { notification } from 'ant-design-vue';
import { isValidURL } from '@/utils/reusable'
import { postURL } from '@/services';
import { state } from '@/store';
export default{
  data() {
    return {
      url: ''
    }
  },

  methods: {
    getURL(){
  if(this.url !== ''){
    if(isValidURL(this.url)){
      postURL(this.url)
        .then(res => {
          state.url_abouts = {
            url_code: res.data.result.code,
            long_url: res.data.result.original_link    
          }
          // sessionStorage.setItem('url_about', JSON.stringify({
          //   url_code: res.data.result.code,
          //   long_url: res.data.result.original_link
          // }))
          this.$router.push('/created-url')
        })
        .catch(e => {
         notification['error']({
           message: e.response.data.message
         })     
        })
    }else{
      notification['error']({
       message: 'Url is not valid?! Check URL next try again'
      })
    }
  }else{
    console.log(this.url)
    notification['error']({
      message: 'Enter url for get shorten url!'
    })
  }
  }
},

  created() {
    state.url_abouts = null    
  },
}
</script>