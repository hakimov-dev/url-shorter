<template>
  <div class="mt-[15%] flex justify-center">
   <div class="custom-card flex items-center justify-center border-2 border-gray-400 rounded h-auto w-[30%] p-[10px] text-center">
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button="Search"
      size="large"
    />
   </div>
  </div>
</template>

<script setup>
const value = ''
</script>
