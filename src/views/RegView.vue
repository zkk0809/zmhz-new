<template>
  <div class="page">
    <div class="bg"></div>
    <router-link to="/index" class="logo">最美杭州</router-link>
    <div class="card">
      <h2>创建账户</h2>
      <p class="sub">请填写以下信息完成注册</p>
      <p v-if="msg" class="msg" :class="msgClass">{{ msg }}</p>
      <form @submit.prevent="handleReg">
        <div class="row"><label>用户名</label><input type="text" v-model="form.username" placeholder="请输入用户名" required /></div>
        <div class="row"><label>密 码</label><input type="password" v-model="form.password" placeholder="请输入密码" required /></div>
        <div class="row"><label>邮 箱</label><input type="email" v-model="form.email" placeholder="请输入邮箱" required /></div>
        <div class="row"><label>性 别</label><div class="radio-group"><label><input type="radio" v-model="form.sex" value="男" checked /> 男</label><label><input type="radio" v-model="form.sex" value="女" /> 女</label></div></div>
        <div class="row"><label>年 龄</label><input type="number" v-model.number="form.age" placeholder="请输入年龄" min="1" max="120" required /></div>
        <button type="submit">注 册</button>
      </form>
      <router-link to="/login" class="switch">已有账号？去登录 →</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api'

const router = useRouter()
const form = ref({ username: '', password: '', email: '', sex: '男', age: '' })
const msg = ref('')
const msgOk = ref(false)

const msgClass = computed(() => msgOk.value ? 'ok' : 'err')

const handleReg = async () => {
  const { username, password, email, age } = form.value
  if (!username.trim() || !password.trim() || !email.trim() || !age) {
    msg.value = '请填写所有必填项'; msgOk.value = false; return
  }
  try {
    const res = await api.post('/users', {
      username: username.trim(), password: password.trim(),
      email: email.trim(), sex: form.value.sex, age: form.value.age,
    })
    if (res.data.ok === 1) {
      msgOk.value = true
      let count = 3; msg.value = `注册成功！${count}秒后跳转...`
      const interval = setInterval(() => {
        count--; if (count > 0) { msg.value = `注册成功！${count}秒后跳转...` }
        else { clearInterval(interval); router.push('/login') }
      }, 1000)
    } else { msg.value = '注册失败，请重试'; msgOk.value = false }
  } catch { msg.value = '网络错误，请检查后端'; msgOk.value = false }
}
</script>

<style scoped>
.page { min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
.bg { position: fixed; inset: 0; background: linear-gradient(135deg, #0f0c29, #302b63, #24243e); z-index: 0; }
.logo { position: fixed; top: 28px; left: 40px; font-family: feilong, serif; font-size: 32px; color: rgba(255,255,255,0.9); text-decoration: none; z-index: 10; text-shadow: 0 2px 10px rgba(0,0,0,0.3); }
.card { position: relative; z-index: 1; width: 440px; background: rgba(255,255,255,0.97); border-radius: 20px; padding: 40px 36px 32px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); text-align: center; }
.card h2 { font-family: 'Noto Serif SC', serif; font-size: 24px; color: #1a1a2e; margin-bottom: 6px; }
.sub { font-size: 14px; color: #aaa; margin-bottom: 20px; }
.msg { font-size: 14px; margin-bottom: 14px; min-height: 20px; }
.msg.ok { color: #27ae60; }
.msg.err { color: #e74c3c; }
form { text-align: left; }
.row { display: flex; align-items: center; margin-bottom: 14px; }
.row > label:first-child { width: 60px; font-size: 14px; color: #555; flex-shrink: 0; text-align: right; padding-right: 10px; }
.row input[type="text"], .row input[type="password"], .row input[type="email"], .row input[type="number"] { flex: 1; padding: 10px 14px; border: 2px solid #eee; border-radius: 10px; font-size: 14px; outline: none; font-family: inherit; background: #fafbfc; color: #333; transition: all 0.3s; }
.row input:focus { border-color: #302b63; background: #fff; box-shadow: 0 0 0 4px rgba(48,43,99,0.08); }
.radio-group { display: flex; gap: 20px; flex: 1; }
.radio-group label { font-size: 14px; color: #555; cursor: pointer; }
.radio-group input { accent-color: #302b63; margin-right: 4px; }
button[type="submit"] { width: 100%; padding: 13px; background: #302b63; color: #fff; border: none; border-radius: 10px; font-size: 16px; font-weight: 500; cursor: pointer; font-family: inherit; letter-spacing: 2px; transition: all 0.3s; margin-top: 6px; }
button[type="submit"]:hover { background: #24243e; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(48,43,99,0.3); }
.switch { display: block; margin-top: 18px; color: #302b63; text-decoration: none; font-size: 14px; font-weight: 500; }
.switch:hover { color: #24243e; text-decoration: underline; }
</style>
