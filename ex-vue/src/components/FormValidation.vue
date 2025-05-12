<template>
    <div class="register-form">
      <form @submit.prevent="" class="px-6 py-8 rounded">
        <h2 class="mb-2"><b>Form Đăng Ký</b></h2>
        <div class="item">
          <label for="fullnamme">Họ tên:</label>
          <input type="text" name="fullname" id="fullname" v-model="fullname" class="border border-slate-300 hover:border-indigo-300 outline-2 outline-blue-500/50 mt-2 rounded px-2 py-1">
          <div class="text-red-600 bg-red-100 px-3 py-2" v-if="validateFullname.length != ''">{{ validateFullname }}</div>
        </div>
        <div class="item mt-3">
          <label for="email">Email:</label>
          <input type="text" name="email" id="email" v-model="email" class="border border-slate-300 hover:border-indigo-300 outline-2 outline-blue-500/50 mt-2 rounded px-2 py-1">
          <div class="text-red-600 bg-red-100 px-3 py-2" v-if="validateEmail.length != ''">{{ validateEmail }}</div>
        </div>
        <div class="item mt-3">
          <label for="password">Mật khẩu:</label>
          <input type="text" name="password" id="password" v-model="password" class="border border-slate-300 hover:border-indigo-300 outline-2 outline-blue-500/50 mt-2 rounded px-2 py-1">
          <div class="text-red-600 bg-red-100 px-3 py-2" v-if="validatePassword.length != ''">{{ validatePassword }}</div>
        </div>
        <button type="submit" class="block text-center w-full mt-4 py-2 bg-blue-500 shadow-lg shadow-blue-500/50 rounded text-white">Đăng ký</button>
      </form>
    </div>
  </template>
  
  <script setup>
    import { ref, computed, watch } from 'vue';

    const fullname = ref('')
    const email = ref('')
    const password = ref('')

    const validateFullname = computed( () =>{
      if( fullname.value.length == 0 ) {
        return 'Họ và tên không được để trống';
      }        
      return ''
    })

    const validateEmail = computed(() => {
      var patten = /^[\w.-]+@[\w.-]+\.\w{2,}$/            
      if( !patten.test(email.value) ){
        return 'Emai không đúng định dạng'
      }
      return ''
    })

    const validatePassword = computed(() => {
      var patten = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8}$/
      if( !patten.test(password.value) ){
        return 'Mật khẩu gồm 1 ký tự IN HOA, 1 ký tự SỐ, 1 ký tự ĐẶC BIỆT, tối thiểu là 8 KÝ TỰ'
      }
      return ''
    })

    watch( [fullname, email, password], () => {
      console.log('Thay đổi dữ liệu form:', {
          fullname: fullname.value,
          email: email.value,
          password: password.value,
        })      
    })

  </script>
  
  <style scoped>
  .register-form {
    max-width: 600px;
    margin: 30px auto;
  }
  form{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  input {
    width: 100%;
    margin-bottom: 5px;
  }
  .error {
    color: red;
    font-size: 0.9em;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  