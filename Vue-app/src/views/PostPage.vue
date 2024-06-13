<template>
    <div>
        <template v-if="PostData">
            <div class="post-wrapper">
                <button>Назад</button>
                <!-- <h1>{{ post.title }}</h1>
                <div>{{ post.body }}</div> -->
            </div>
        </template>
        <template v-else-if="error">
            <p>Пост не найден</p>
        </template>
    </div>

    
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch';
import type { IPost } from '@/types/post.types';
import { useRoute } from 'vue-router';


const { PostData, error } = useFetch()

const route = useRoute();

const post = PostData.value?.find((post: IPost) => post.id === +route.params.postId)
</script>

<style lang="scss" scoped>
.post-wrapper {
    flex-grow: 1;
    padding: 20px;
}
</style>