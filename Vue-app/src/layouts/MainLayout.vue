<template>
    <div class="wrapper">
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>