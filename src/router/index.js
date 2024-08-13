import {createRouter,createWebHashHistory}from 'vue-router';

//制定路由规则
const routes = [
    {
        path:'/',
        name:'Home',
        component:()=>import('@/views/Home.vue'),
    },{
        path:'/user/',
        name:'user',
        component:()=>import('@/views/user.vue'),
    },
];

const router = createRouter({
    //设置路由的模式
    history:createWebHashHistory(),
    routes,
});

export default router;