<template>
    <transition name="fade">

         <div class="loading"> 
        <loader object="#ffffff" color1="#ffffff" color2="#17fd3d" size="5" speed="1.7" bg="#ff631d" objectbg="#ff631d" opacity="100" disableScrolling="false" name="spinning"></loader>
    </div>

    </transition>  
</template>

<script>

export default {
    name: "VueLoading"
}
</script>

<style scoped>
    loading {
        background-color: #43575c;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }
    
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
</style>