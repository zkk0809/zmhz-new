<template>
  <AppHeader />
  <div class="users-page">
    <div class="page-header">
      <h1>用户管理</h1>
      <p>管理系统中的所有注册用户</p>
    </div>

    <!-- Table View -->
    <div class="table-card" v-show="!showEdit">
      <table v-if="users.length">
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>密码</th>
            <th>邮箱</th>
            <th>性别</th>
            <th>年龄</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user._id.slice(-6) }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.sex }}</td>
            <td>{{ user.age }}</td>
            <td class="actions">
              <button class="btn-edit" @click="openEdit(user)">修改</button>
              <button class="btn-delete" @click="handleDelete(user._id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="empty-state">
        <p>暂无用户数据</p>
      </div>
    </div>

    <!-- Edit Form -->
    <div class="edit-card" v-show="showEdit">
      <div class="edit-header">
        <button class="btn-back" @click="showEdit = false">← 返回列表</button>
        <h2>编辑用户</h2>
      </div>
      <form @submit.prevent="handleUpdate">
        <div class="form-row">
          <label>用户名</label>
          <input type="text" v-model="editForm.username" required />
        </div>
        <div class="form-row">
          <label>密码</label>
          <input type="password" v-model="editForm.password" required />
        </div>
        <div class="form-row">
          <label>邮箱</label>
          <input type="email" v-model="editForm.email" required />
        </div>
        <div class="form-row">
          <label>性别</label>
          <div class="radio-group">
            <label class="radio-item">
              <input type="radio" v-model="editForm.sex" value="男" />
              <span>男</span>
            </label>
            <label class="radio-item">
              <input type="radio" v-model="editForm.sex" value="女" />
              <span>女</span>
            </label>
          </div>
        </div>
        <div class="form-row">
          <label>年龄</label>
          <input type="number" v-model.number="editForm.age" min="1" max="120" required />
        </div>
        <button type="submit" class="btn-save">保存修改</button>
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
    if (res.data.ok !== 1) { router.push('/login'); return }
  } catch { router.push('/login'); return }
  try {
    const res = await api.get('/users')
    users.value = res.data.data || []
  } catch (err) { console.error('Failed to load users:', err) }
}

const openEdit = (user) => {
  editForm.value = { ...user }
  showEdit.value = true
}

const handleUpdate = async () => {
  const { username, password, email, age } = editForm.value
  if (!username.trim() || !password.trim() || !email.trim() || !age) {
    alert('请输入所有信息！'); return
  }
  try {
    const res = await api.put(`/users/${editForm.value._id}`, {
      username: username.trim(), password: password.trim(),
      email: email.trim(), sex: editForm.value.sex, age: editForm.value.age,
    })
    if (res.data.ok === 1) { location.reload() } else { alert('修改失败') }
  } catch { alert('修改失败') }
}

const handleDelete = async (id) => {
  try {
    const res = await api.delete(`/users/${id}`)
    if (res.data.ok === 1) { location.reload() }
  } catch (err) { console.error('Delete failed:', err) }
}

onMounted(loadUsers)
</script>

<style scoped>
.users-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 24px 60px;
}
.page-header {
  margin-bottom: 28px;
}
.page-header h1 {
  font-family: 'Noto Serif SC', serif;
  font-size: 26px;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 4px;
}
.page-header p {
  font-size: 14px;
  color: #999;
}
.table-card, .edit-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background: #f8f9fa;
}
th {
  padding: 14px 16px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #eee;
}
td {
  padding: 14px 16px;
  font-size: 14px;
  color: #555;
  border-bottom: 1px solid #f0f0f0;
}
tr:last-child td { border-bottom: none; }
tr:hover td { background: #fafbfc; }
.actions {
  display: flex;
  gap: 8px;
}
.btn-edit, .btn-delete {
  padding: 5px 14px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.btn-edit {
  background: #e8f0fe;
  color: #1a6db5;
}
.btn-edit:hover {
  background: #d0e1fd;
}
.btn-delete {
  background: #fde8e8;
  color: #c0392b;
}
.btn-delete:hover {
  background: #fbd5d5;
}
.empty-state {
  padding: 60px 20px;
  text-align: center;
  color: #ccc;
  font-size: 16px;
}
.edit-header {
  padding: 20px 28px 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 16px;
}
.btn-back {
  padding: 6px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: transparent;
  color: #666;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  font-family: inherit;
}
.btn-back:hover { background: #f5f5f5; }
.edit-header h2 {
  font-family: 'Noto Serif SC', serif;
  font-size: 18px;
  font-weight: 600;
  color: #2c2c2c;
}
.edit-card form {
  padding: 28px;
}
.form-row {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}
.form-row > label {
  width: 80px;
  font-size: 14px;
  color: #555;
  flex-shrink: 0;
}
.form-row > input[type="text"],
.form-row > input[type="password"],
.form-row > input[type="email"],
.form-row > input[type="number"] {
  flex: 1;
  padding: 10px 14px;
  border: 2px solid #e8e8e8;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.25s;
  outline: none;
  font-family: inherit;
}
.form-row > input:focus {
  border-color: #1a6db5;
  box-shadow: 0 0 0 3px rgba(26, 109, 181, 0.1);
}
.radio-group {
  display: flex;
  gap: 20px;
  flex: 1;
}
.radio-item {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;
  color: #555;
}
.radio-item input { accent-color: #1a6db5; }
.btn-save {
  margin-top: 8px;
  padding: 12px 32px;
  background: linear-gradient(135deg, #1a6db5, #2980b9);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  font-family: inherit;
}
.btn-save:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(26, 109, 181, 0.3);
}
</style>
