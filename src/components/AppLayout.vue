<script setup>
const props = defineProps({
    imgUrl: {
        type: String,
        reqired: true
    }
})
</script>

<template>
    <div class="root">
        <div :style= "`background-image: url(${imgUrl})`"  class="img"></div>
        <div class="main">
            <el-button class="btn">Get random cocktail</el-button>
            <slot></slot>
        </div>
    </div>
    
</template>

<style scoped lang="sass">
@import '../assets/styles/main'

.root 
    background-color: $background
    display: flex
    min-height: 100vh
    

.img
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover

.main
    position: relative
    width: 50%
    padding: 32px 40px
.btn
    position: absolute
    top: 32px
    right: 40px
    background-color: $accent
    border-color: $accent
    color: $text
    font-size: 16px
    font-family: 'Raleway', sans-serif

    &:hover,
    &:active
        background-color: darken($accent, 10%)
        border-color: darken($accent, 10%)
        
</style>