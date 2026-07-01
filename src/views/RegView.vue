<template>
  <div id="header">
    <div id="logo">最美杭州<i class="iconfont icon-hangzhouxihu2"></i></div>
    <i class="iconfont icon-hangzhouxihu"></i>
  </div>
  <div class="section">
    <div class="sec1">
      <p id="sign">用户注册</p>
      <router-link to="/login">已有帐号？去登录</router-link>
    </div>
    <form @submit.prevent="handleReg">
      <div>
        <label for="username">用户名：</label>
        <input type="text" id="username" v-model="form.username" required />
      </div>
      <div>
        <label for="password">密 码：</label>
        <input type="password" id="password" v-model="form.password" required />
      </div>
      <div>
        <label for="email">邮 箱：</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label id="genderLabel">性 别：</label>
        <span>
          <input type="radio" id="male" v-model="form.sex" value="男" checked />
          <label for="male">男</label>
          <input type="radio" id="female" v-model="form.sex" value="女" />
          <label for="female">女</label>
        </span>
      </div>
      <div>
        <label for="age">年 龄：</label>
        <input type="number" id="age" v-model.number="form.age" min="1" max="120" required />
      </div>
      <input type="submit" value="注册" id="mybutton" />
    </form>
    <div v-if="msg" :style="msgStyle">{{ msg }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api'

const router = useRouter()
const form = ref({ username: '', password: '', email: '', sex: '男', age: '' })
const msg = ref('')
const msgColor = ref('')

const msgStyle = computed(() => ({
  color: msgColor.value,
  fontWeight: 'bold',
  fontSize: '16px',
  textAlign: 'center',
}))

const shakeMsg = (text, color) => {
  msg.value = text
  msgColor.value = color
}

const handleReg = async () => {
  const { username, password, email, age } = form.value
  if (!username.trim() || !password.trim() || !email.trim() || !age) {
    shakeMsg('请完整输入所有内容！', 'red')
    return
  }
  try {
    const res = await api.post('/users', {
      username: username.trim(),
      password: password.trim(),
      email: email.trim(),
      sex: form.value.sex,
      age: form.value.age,
    })
    if (res.data.ok === 1) {
      let count = 3
      shakeMsg(`注册成功！即将进入登陆页面...${count}`, 'red')
      const interval = setInterval(() => {
        count--
        if (count > 0) {
          msg.value = `注册成功！即将进入登陆页面...${count}`
        } else {
          clearInterval(interval)
          router.push('/login')
        }
      }, 1000)
    } else {
      alert('注册失败')
    }
  } catch (err) {
    alert('网络错误，请检查后端是否运行')
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
.section {
  width: 50%;
  margin: 20px auto;
  border: 1px solid;
  margin-bottom: 30px;
  border-radius: 10px;
}
.section .sec1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section .sec1 p { font-size: 25px; font-weight: bold; }
.section .sec1 a { color: blue; }
.section form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section form div {
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
}
.section form div > label {
  width: 30%;
  font-size: 20px;
  text-align: center;
}
.section form div > input { flex: 1; height: 30px; }
.section form div:nth-child(4) input { flex: none; width: 20%; }
.section form > input {
  width: 100px;
  height: 40px;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
