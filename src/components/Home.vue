<template>
  <div class="text-center ">
    <p class="text-2xl my-10">登录成功</p>
    <button
      type="button"
      class="w-1/2 h-12 text-base px-6 py-2 rounded-lg bg-blue-500 text-white"
      @click="logout"
    >退出</button>
  </div>
</template>logout

<script setup>
import { defineEmit } from 'vue'
import { auth } from '@/clousbase'

const emit = defineEmit(['change'])

const logout = async () => {
  await auth.signOut()
  emit('change')
}

</script>

<style>
</style>