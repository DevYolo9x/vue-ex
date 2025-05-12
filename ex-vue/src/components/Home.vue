<template>
  <div>
    <h2>Danh sách người dùng từ API công khai</h2>
    <button @click="fetchUsers">Tải dữ liệu</button>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const users = ref([])

async function fetchUsers() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = res.data
  } catch (err) {
    console.error('Lỗi gọi API:', err)
  }
}
</script>

<style scoped>
ul {
  margin-top: 10px;
}
</style>
