<script setup>
import AppLayout from '../components/AppLayout.vue';
import { useRootStore } from '@/stores/root'

const rootStore = useRootStore()
rootStore
</script>

<template>
    <AppLayout imgUrl="/src/assets/img/bg.png">
        <div class="wrapper">
            <div class="info">
                <div class="title">Choose your drink</div>
                <div class="line"></div>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped lang="sass">
@import '../assets/styles/main'

.wrapper
    display: flex
    align-items: center
    justify-content: center

.info
    padding: 80px 0
    text-align: center
</style>