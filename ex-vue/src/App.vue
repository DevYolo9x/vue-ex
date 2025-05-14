<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <nav class="p-4 bg-gray-100">
      <router-link to="/" class="mr-4">Home</router-link>
      <router-link to="/form" class="mr-4">Form</router-link>
      <router-link to="/fake-api" class="mr-4">Fake API</router-link>
      <router-link to="/customer" class="mr-4">Customer</router-link>
      <router-link to="/posts" class="mr-4">Posts</router-link>
    </nav>
    <div class="container mx-auto px-4 py-8">
      <router-view />
    </div>
  </div>
</template>