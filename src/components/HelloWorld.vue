<template>
  <p class="text-2xl my-10 text-center">V3TCloud</p>
  <div class="flex flex-col justify-center space-y-5 items-center mt-8">
    <div class="w-3/4 relative">
      <input
        v-model="number"
        class="h-12 border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none"
        placeholder="手机号码"
        type="text"
      />
      <button
        type="button"
        class="bg-blue-500 text-white px-2 py-1 absolute rounded-md top-1/2 right-6 transform -translate-y-1/2"
        @click="sendSms"
      >{{ codeText }}</button>
    </div>
    <input
      v-model="smsCode"
      class="h-12 w-3/4 border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none"
      placeholder="验证码"
      type="text"
    />
    <button
      type="button"
      @click="login"
      class="w-3/4 h-12 text-base px-6 py-2 rounded-lg bg-blue-500 text-white"
    >登录</button>
  </div>

</template>

<script setup>
import { ref, defineEmit } from 'vue'
import { Toast } from 'vant';
import { cb, extSms } from '@/clousbase'

const emit = defineEmit(['change'])

const number = ref('')
const smsCode = ref('')
let codeText = ref('获取验证码')


let timer = null

const sendSms = async () => {
  console.log(cb);
  let second = 60
  if (!timer) {
    const opts = {
      action: 'Send',
      phone: number.value,
      app: cb
    }
    try {
      await cb.invokeExtension(extSms.name, opts)
      Toast("已发送")
      timer = setInterval(() => {
        second--
        if (second <= 0) {
          clearInterval(timer)
          codeText.value = '获取验证码'
        } else {
          codeText.value = `(${second})`
        }
      }, 1000)
    } catch (err) {
      console.error('发送失败');
      Toast.fail("发送失败")
    }
  }
}

const login = async () => {
  const opts = {
    action: 'Login',
    app: cb,
    phone: number.value,
    smsCode: smsCode.value,
  }
  try {
    await cb.invokeExtension(extSms.name, opts); // 正式登录
    console.log('短信验证码登录成功')
    emit('change')
  } catch (error) {
    Toast.fail("登录失败：" + error.message)
    console.log('登录失败：', error.message)
  }

}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
