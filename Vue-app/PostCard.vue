<template>
    <div>
        <ul>
            <li>{{ post.title }}</li>
            <button @click="emits('show', post)">Смотреть пост</button>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { IPost } from '@/types/post.types';

interface PostProps {
  post: IPost;
}

interface postEmits {
    (e: 'show', post: IPost): void;
}

defineProps<PostProps>();

const emits = defineEmits<postEmits>()
</script>

<style scoped>

</style>