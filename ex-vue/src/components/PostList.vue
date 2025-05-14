<template lang="">
    <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
        <li v-for="post in posts" :key="post.id" class="w-full bg-gray-100 p-3 rounded-md">
            <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
        </li>
    </ul>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);
onMounted( async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = res.data.slice(0, 10)
})
</script>