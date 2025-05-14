<template lang="">
    <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const post = ref([])
const route = useRoute();
onMounted( async() => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    post.value = res.data
})
</script>