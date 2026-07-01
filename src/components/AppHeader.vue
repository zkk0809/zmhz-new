<template>
  <div id="header">
    <div id="logo">最美杭州<i class="iconfont icon-hangzhouxihu2"></i></div>
    <i class="iconfont icon-hangzhouxihu"></i>
    <div class="info">
      <template v-if="loggedIn">
        <p><span>{{ username }}</span> 欢迎你</p>
        <div>
          <button @click="handleLogout">注销</button>
          <button @click="goUsers">用户管理</button>
        </div>
      </template>
      <template v-else>
        <p>欢迎你</p>
        <button @click="goLogin">去登录</button>
      </template>
    </div>
    <div class="footer">
      <ul>
        <li><router-link to="/index">主页</router-link></li>
        <li><router-link to="/culture">杭州文化</router-link></li>
        <li><router-link to="/travel">杭州旅游</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '@/api'

const router = useRouter()
const route = useRoute()
const loggedIn = ref(false)
const username = ref('')

const checkAuth = async () => {
  const token = localStorage.getItem('token')
  try {
    const res = await api.post('/jwt', { token })
    if (res.data.ok === 1) {
      loggedIn.value = true
      username.value = res.data.username
    } else {
      loggedIn.value = false
    }
  } catch {
    loggedIn.value = false
  }
}

const handleLogout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}

const goLogin = () => router.push('/login')
const goUsers = () => router.push('/users')

onMounted(checkAuth)
watch(() => route.path, checkAuth)
</script>

<style scoped>
#header { position: relative; }
#header #logo {
  height: 80px;
  border: 1px solid;
  font-family: feilong, serif;
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
#header .info {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 200px;
}
#header .info p { margin-bottom: 10px; text-align: center; }
#header .info p span { color: blue; font-size: 20px; text-decoration: underline; }
#header .info button {
  width: 80px;
  border-radius: 5px;
  align-self: center;
  cursor: pointer;
}
#header .footer {
  height: 40px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  background-color: #0c345c;
}
#header .footer ul {
  list-style: none;
  width: 70%;
  display: flex;
}
#header .footer ul li {
  line-height: 40px;
  color: white;
  transition: all 0.1s;
  margin-right: 60px;
}
#header .footer ul li a {
  color: white;
  text-decoration: none;
}
#header .footer ul li a:hover { color: red; }
#header .footer ul li a.router-link-active { color: red; }
</style>
