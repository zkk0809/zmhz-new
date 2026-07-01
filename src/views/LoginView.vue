<template>
  <div id="header">
    <div id="logo">最美杭州<i class="iconfont icon-hangzhouxihu2"></i></div>
    <i class="iconfont icon-hangzhouxihu"></i>
  </div>
  <div id="section">
    <p id="sign" :style="signStyle">请先登录</p>
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="username" placeholder="账号" required />
      <input type="password" v-model="password" placeholder="密码" required />
      <button type="submit" id="mybutton">登录</button>
    </form>
    <router-link to="/reg">没有账号？去注册</router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api'

const router = useRouter()
const username = ref('')
const password = ref('')
const signText = ref('请先登录')
const signColor = ref('')
const fontWeight = ref('')

const signStyle = computed(() => ({
  color: signColor.value,
  fontWeight: fontWeight.value,
}))

const shake = (text, color, fw) => {
  signText.value = text
  signColor.value = color
  fontWeight.value = fw || ''
  // animate via CSS class toggle
  const el = document.getElementById('sign')
  if (el) {
    el.style.animation = 'none'
    el.offsetHeight // trigger reflow
    el.style.animation = 'shake 0.4s ease'
  }
}

const handleLogin = async () => {
  if (!username.value.trim() || !password.value.trim()) {
    shake('账号或密码为空！', 'red')
    return
  }
  try {
    const res = await api.post('/login', {
      username: username.value.trim(),
      password: password.value.trim(),
    })
    if (res.data.ok === 1) {
      shake('登陆成功！', '', 'bold')
      setTimeout(() => router.push('/index'), 800)
    } else {
      shake('账号或密码错误！', 'red')
    }
  } catch (err) {
    shake('网络错误，请检查后端是否运行', 'red')
  }
}
</script>

<style scoped>
#header { position: relative; }
#header #logo {
  height: 80px;
  border: 1px solid;
  font-family: feilong;
  font-size: 80px;
  text-indent: 70px;
  text-shadow: 5px 5px 5px rgb(29, 108, 161);
  background-image: url('/imgs/hangzhou.jpg');
  background-size: cover;
  background-position: center;
}
#header #logo i { font-size: 80px; }
#header > i {
  font-size: 80px;
  color: #ac3333;
  position: absolute;
  top: 0;
  right: 100px;
}
#section {
  width: 500px;
  height: 400px;
  border: 1px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}
#section p:first-child { font-size: 20px; text-align: center; margin-bottom: 10px; }
#section form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#section form input {
  width: 400px;
  border: none;
  height: 40px;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 50px;
}
#section form button {
  width: 400px;
  height: 40px;
  font-size: 20px;
}
#section a {
  width: 400px;
  margin-top: 20px;
  text-align: right;
  color: blue;
  text-decoration: none;
}

@keyframes shake {
  0% { margin-left: 0; }
  25% { margin-left: -20px; }
  50% { margin-left: 20px; }
  75% { margin-left: -20px; }
  100% { margin-left: 0; }
}
</style>
