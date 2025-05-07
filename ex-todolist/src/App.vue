<template>
  <div class="todoApp">
    <h1>Todo App</h1>
    <form @submit.prevent="addTask">
      <input type="text" v-model="val" placeholder="Nhập việc cần làm">
      <button>Thêm</button>
    </form>
    <ul>
      <li v-for="(item, index) in toDo" :key="index">
        <div>
          <input type="checkbox">
          {{ item }}
        </div>
        <span @click="removeTodo(index)">Xóa</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import { ref, reactive } from 'vue';

  let toDo = reactive([])
  const val = ref('')

  const addTask = () => {
    if( val.value != '' ) {
      toDo.push(val.value)
    }
    val.value = ''    
  }

  const removeTodo = (index) => {
    toDo.splice(index, 1)    
  }
  
</script>

<style>
.todoApp h1 {
    text-align: center;
    font-weight: 500;
    margin-bottom: 10px;
}
ul li input {
    width: 20px;
    height: 20px;
    position: relative;
    top: 5px;
    margin-right: 5px;
}
form input {
    height: 40px;
    border: 1px solid #606060;
    border-radius: 5px;
    padding-inline: 10px;
    margin-right: 10px;
    width: 300px;
    outline: unset;
    font-size: 14px;
}

form button {
    height: 40px;
    border: 1px solid #606060;
    padding: 0 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
}

ul li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
}
ul li:not(:last-child) {
    border-bottom: 1px solid;
}

ul {
    margin-top: 20px;
    border: 1px solid;
    padding: 0;
    border-radius: 5px;
}

span {
    cursor: pointer;
}
</style>