<template>
  <div class="page">
    <div class="bg"></div>
    <router-link to="/index" class="logo">最美杭州</router-link>
    <div class="card">
      <h2>欢迎回来</h2>
      <p class="sub">请登录您的账户</p>
      <p v-if="signText" class="msg" :style="{ color: signColor }">{{ signText }}</p>
      <form @submit.prevent="handleLogin">
        <input type="text" v-model="username" placeholder="请输入账号" required />
        <input type="password" v-model="password" placeholder="请输入密码" required />
        <button type="submit">登 录</button>
      </form>
      <router-link to="/reg" class="switch">还没有账号？去注册 →</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api'

const router = useRouter()
const username = ref('')
const password = ref('')
const signText = ref('')
const signColor = ref('#e74c3c')

const handleLogin = async () => {
  if (!username.value.trim() || !password.value.trim()) {
    signText.value = '账号或密码不能为空'; signColor.value = '#e74c3c'; return
  }
  try {
    const res = await api.post('/login', { username: username.value.trim(), password: password.value.trim() })
    if (res.data.ok === 1) {
      signText.value = '✓ 登录成功'; signColor.value = '#27ae60'
      setTimeout(() => router.push('/index'), 600)
    } else { signText.value = '账号或密码错误'; signColor.value = '#e74c3c' }
  } catch { signText.value = '网络错误，请检查后端'; signColor.value = '#e74c3c' }
}
</script>

<style scoped>
.page { min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
.bg { position: fixed; inset: 0; background: linear-gradient(135deg, #0f0c29, #302b63, #24243e); z-index: 0; }
.logo { position: fixed; top: 28px; left: 40px; font-family: feilong, serif; font-size: 32px; color: rgba(255,255,255,0.9); text-decoration: none; z-index: 10; text-shadow: 0 2px 10px rgba(0,0,0,0.3); }
.card { position: relative; z-index: 1; width: 400px; background: rgba(255,255,255,0.97); border-radius: 20px; padding: 44px 36px 36px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); text-align: center; }
.card h2 { font-family: 'Noto Serif SC', serif; font-size: 24px; color: #1a1a2e; margin-bottom: 6px; }
.sub { font-size: 14px; color: #aaa; margin-bottom: 24px; }
.msg { font-size: 14px; margin-bottom: 12px; min-height: 20px; }
form { display: flex; flex-direction: column; gap: 14px; }
input { width: 100%; padding: 13px 16px; border: 2px solid #eee; border-radius: 10px; font-size: 15px; outline: none; font-family: inherit; background: #fafbfc; color: #333; box-sizing: border-box; transition: all 0.3s; }
input::placeholder { color: #bbb; }
input:focus { border-color: #302b63; background: #fff; box-shadow: 0 0 0 4px rgba(48,43,99,0.08); }
button[type="submit"] { width: 100%; padding: 13px; background: #302b63; color: #fff; border: none; border-radius: 10px; font-size: 16px; font-weight: 500; cursor: pointer; font-family: inherit; letter-spacing: 2px; transition: all 0.3s; }
button[type="submit"]:hover { background: #24243e; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(48,43,99,0.3); }
.switch { display: block; margin-top: 20px; color: #302b63; text-decoration: none; font-size: 14px; font-weight: 500; }
.switch:hover { color: #24243e; text-decoration: underline; }
</style>
