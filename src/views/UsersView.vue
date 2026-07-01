<template>
  <AppHeader />
  <div id="section">
    <table id="table" v-show="!showEdit">
      <thead>
        <tr>
          <th>id</th>
          <th>用户名</th>
          <th>密码</th>
          <th>邮箱</th>
          <th>性别</th>
          <th>年龄</th>
          <th colspan="2">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td>{{ user._id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.sex }}</td>
          <td>{{ user.age }}</td>
          <td><button class="update" @click="openEdit(user)">修改</button></td>
          <td><button class="delete" @click="handleDelete(user._id)">删除</button></td>
        </tr>
      </tbody>
    </table>

    <div id="tanchu" v-show="showEdit">
      <button id="back" @click="showEdit = false">返回</button>
      <form @submit.prevent="handleUpdate">
        <div>
          <label>用户名：</label>
          <input type="text" v-model="editForm.username" required />
        </div>
        <div>
          <label>密 码：</label>
          <input type="password" v-model="editForm.password" required />
        </div>
        <div>
          <label>邮 箱：</label>
          <input type="email" v-model="editForm.email" required />
        </div>
        <div>
          <label>性 别：</label>
          <span>
            <input type="radio" v-model="editForm.sex" value="男" id="editMale" />
            <label for="editMale">男</label>
            <input type="radio" v-model="editForm.sex" value="女" id="editFemale" />
            <label for="editFemale">女</label>
          </span>
        </div>
        <div>
          <label>年 龄：</label>
          <input type="number" v-model.number="editForm.age" min="1" max="120" required />
        </div>
        <input type="submit" value="修改" id="mybutton" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api'
import AppHeader from '@/components/AppHeader.vue'

const router = useRouter()
const users = ref([])
const showEdit = ref(false)
const editForm = ref({ _id: '', username: '', password: '', email: '', sex: '男', age: '' })

const loadUsers = async () => {
  const token = localStorage.getItem('token')
  try {
    const res = await api.post('/jwt', { token })
    if (res.data.ok !== 1) {
      router.push('/login')
      return
    }
  } catch {
    router.push('/login')
    return
  }

  try {
    const res = await api.get('/users')
    users.value = res.data.data || []
  } catch (err) {
    console.error('Failed to load users:', err)
  }
}

const openEdit = (user) => {
  editForm.value = {
    _id: user._id,
    username: user.username,
    password: user.password,
    email: user.email,
    sex: user.sex,
    age: user.age,
  }
  showEdit.value = true
}

const handleUpdate = async () => {
  const { username, password, email, age } = editForm.value
  if (!username.trim() || !password.trim() || !email.trim() || !age) {
    alert('请输入所有信息！')
    return
  }
  try {
    const res = await api.put(`/users/${editForm.value._id}`, {
      username: username.trim(),
      password: password.trim(),
      email: email.trim(),
      sex: editForm.value.sex,
      age: editForm.value.age,
    })
    if (res.data.ok === 1) {
      location.reload()
    } else {
      alert('修改失败')
    }
  } catch (err) {
    alert('修改失败')
  }
}

const handleDelete = async (id) => {
  try {
    const res = await api.delete(`/users/${id}`)
    if (res.data.ok === 1) {
      location.reload()
    }
  } catch (err) {
    console.error('Delete failed:', err)
  }
}

onMounted(loadUsers)
</script>

<style scoped>
#section {
  width: 70%;
  min-height: 400px;
  margin: 0 auto;
  position: relative;
  margin-top: 50px;
}
#section table {
  width: 100%;
  border-collapse: collapse;
}
#section table tr th,
#section table tr td {
  border: 1px solid black;
  height: 40px;
}
#section table tr td { text-align: center; }

#tanchu {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  padding: 40px 0 20px;
}
#tanchu #back {
  position: absolute;
  top: 10px;
  left: 10px;
}
#tanchu form {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
}
#tanchu form div {
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
}
#tanchu form div > label {
  width: 30%;
  font-size: 20px;
  text-align: center;
}
#tanchu form div > input { flex: 1; height: 30px; }
#tanchu form div:nth-child(4) input { flex: none; width: 20%; }
#tanchu form > input {
  width: 100px;
  height: 40px;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
