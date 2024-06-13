import MainLayout from '@/layouts/MainLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainPage.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/views/PostsPage.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/posts/:postId',
      name: 'post',
      component: () => import('@/views/PostPage.vue'),
      meta: {
        layout: MainLayout
      }
    },
  ],
});

export default router;
