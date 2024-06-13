<template>
    <div class="posts-wrapper">
        <h1>Posts</h1>
        <PostCard @show="(post: IPost) => handlerPost(post)" v-for="post in PostData" :post="post" :key="post.id" />
    </div>
</template>

<script setup lang="ts">
import PostCard from '@/components/PostCard.vue';
import type { IPost } from '@/types/post.types';





import { useFetch } from '@/composables/useFetch';
import { useRouter } from 'vue-router';


const { PostData, error } = useFetch()

const router = useRouter();
const handlerPost = (post: IPost) => {
    router.push({name: 'post', params: {postId: post.id}})
}


</script>

<style lang="scss" scoped>
.posts-wrapper {
    flex-grow: 1;
    padding: 20px;
    }
</style>