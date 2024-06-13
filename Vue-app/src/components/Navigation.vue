<template>
    <nav class="navigation">
        <RouterLink class="router-link" :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink class="router-link" :to="{ name: 'posts' }">Posts</RouterLink>
        <!-- <RouterLink class="router-link" :to="{ name: 'post' }">Post</RouterLink> -->
    </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .navigation {
        display: flex;
        gap: 16px;
        font-size: 18px;
        
        .router-link {
            color: rgb(0, 0, 0);
            text-decoration: none;
        }

        .router-link-active {
            color: rgb(255, 255, 255);
        }
    }
</style>