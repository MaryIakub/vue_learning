<template>
    <div>
        <h1>Posts</h1>
        <PostCard @show="(post: IPost) => handlerPost(post)" :post="post" v-for="post in postData" :key="post.id" />
    </div>
</template>

<script setup lang="ts">
import { postData } from '@/data/posts';
import PostCard from '@/components/PostCard.vue';
import type { IPost } from '@/types/post.types';
import { useRouter } from 'vue-router';

const router = useRouter();
const handlerPost = (post: IPost) => {
    router.push({name: 'post', params: {upostId: post.id}})
}
</script>

<style scoped>

</style>