import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import FormValidation from "../components/FormValidation.vue";
import FakeApiCall from "../components/FakeApiCall.vue";
import Customer from "../components/Customer.vue";
import PostDetail from "../components/PostDetail.vue";
import PostList from "../components/PostList.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/form',
        component: FormValidation
    },
    {
        path: '/fake-api',
        component: FakeApiCall
    },
    {
        path: '/customer',
        component: Customer
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
  
export default router