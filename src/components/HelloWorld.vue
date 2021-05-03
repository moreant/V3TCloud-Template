<template>
  <h1>{{ msg }}</h1>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Documentation</a>
  </p>

  <Button
    type="primary"
    @click="state.count++"
  >count is: {{ state.count }}</Button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p class="text-9xl shadow-2xl">Tailwind </p>
</template>

<script setup>
import { defineProps, reactive, onMounted } from 'vue'
import { Button } from 'vant';
import { db } from '@/clousbase'

defineProps({
  msg: String
})

onMounted(() => {
  setTimeout(() => {
    db.collection('user').get().then(res => {
      console.log(res);
    })
  }, 1000);

})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
