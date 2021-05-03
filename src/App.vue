<template>
  <HelloWorld
    v-if="!inLogin"
    @change="checkLogin"
  />
  <Home
    v-else
    @change="checkLogin"
  />
</template>

<script setup>
import { auth } from '@/clousbase'
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

let inLogin = ref(auth.hasLoginState())

const checkLogin = () => {
  inLogin.value = auth.hasLoginState()
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
</style>
