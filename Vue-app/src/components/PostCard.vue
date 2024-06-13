<template>
    <div class="post-card">
        <p>{{ post.title }}</p>
        <button @click="emits('show', post)">Смотреть пост</button>
    </div>
</template>

<script setup lang="ts">
import type { IPost } from '@/types/post.types';

// props
defineProps<PostProps>();
interface PostProps {
  post: IPost;
}

// emits
const emits = defineEmits<postEmits>()
interface postEmits {
    (e: 'show', post: IPost): void;
}

</script>

<style lang="scss" scoped>
.post-card {
    border: 2px solid rgb(0, 195, 255);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;

    ul {
        list-style-type: none;
    }
}
</style>