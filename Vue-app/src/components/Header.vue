<template>
    <div>
        <header class="header">
            <div>Header</div>
            <div class="navigation-wrapper">
                <Navigation />
            </div>
        </header>
    </div>
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue';

    // defineProps({
    //     title: String
    // })
</script>

<style lang="scss" scoped>
    .header {
        height: 100px;
        background-color: rgb(0, 195, 255);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 26px;
    }
</style>