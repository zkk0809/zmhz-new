<template>
  <header class="site-header">
    <div class="header-inner">
      <router-link to="/index" class="logo">
        <span class="logo-text">最美杭州</span>
        <i class="iconfont icon-hangzhouxihu2 logo-icon"></i>
      </router-link>
      <nav class="main-nav">
        <router-link to="/index" :class="{ active: route.path === '/index' }">主页</router-link>
        <router-link to="/culture" :class="{ active: route.path === '/culture' }">文化</router-link>
        <router-link to="/travel" :class="{ active: route.path === '/travel' }">旅游</router-link>
      </nav>
      <div class="user-info">
        <template v-if="loggedIn">
          <span class="welcome"><em>{{ username }}</em></span>
          <div class="header-actions">
            <button @click="goUsers">管理</button>
            <button class="btn-logout" @click="handleLogout">注销</button>
          </div>
        </template>
        <template v-else>
          <button class="btn-login" @click="goLogin">登录</button>
        </template>
      </div>
    </div>
  </header>
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
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #2c2c2c;
}
.logo-text {
  font-family: feilong, serif;
  font-size: 28px;
  text-shadow: 2px 2px 4px rgba(29, 108, 161, 0.3);
}
.logo-icon {
  font-size: 24px;
  color: #ac3333;
}
.main-nav {
  display: flex;
  gap: 4px;
}
.main-nav a {
  padding: 6px 18px;
  text-decoration: none;
  color: #666;
  font-size: 15px;
  border-radius: 8px;
  transition: all 0.25s;
}
.main-nav a:hover {
  color: #1a6db5;
  background: rgba(26, 109, 181, 0.05);
}
.main-nav a.active {
  color: #1a6db5;
  font-weight: 500;
  background: rgba(26, 109, 181, 0.08);
}
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #888;
}
.user-info em {
  color: #1a6db5;
  font-style: normal;
  font-weight: 500;
}
.header-actions {
  display: flex;
  gap: 6px;
}
.header-actions button,
.btn-login,
.btn-logout {
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: transparent;
  color: #666;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.header-actions button:hover,
.btn-login:hover,
.btn-logout:hover {
  background: #f0f0f0;
  color: #333;
}
</style>
