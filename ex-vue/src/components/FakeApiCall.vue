<template>
  <div>
    <h2>Ví dụ: Delay 3 giây với await</h2>
    <button @click="getData" :disabled="loading">
      {{ loading ? 'Đang tải...' : 'Lấy dữ liệu' }}
    </button>
    <p v-if="data">{{ data }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const data = ref('')

// Hàm giả lập delay giống API call
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getData() {
  loading.value = true
  data.value = ''

  // Giả lập gọi API: chờ 3 giây
  await sleep(3000)

  data.value = 'Dữ liệu đã được tải!'
  loading.value = false
}
</script>

<style scoped>
button {
  padding: 8px 16px;
  margin: 10px 0;
}
</style>
