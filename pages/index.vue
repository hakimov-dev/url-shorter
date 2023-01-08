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
        v-model:value="value"
        placeholder="Enter long url"
        enter-button="Shorten URL"
        size="large"
      />
      <p class="mx-2 my-3 mt-8 text-lg leading-[20px] font-medium">
        URL Shorter is a free tool to shorten a URL or reduce a link Use our URL
        Shortener to create a shortened link making it easy to remember
      </p>
    </div>
  </div>
</template>

<script setup>
import { isValidURL } from '@/utils/reusable'
const value = ''
</script>
