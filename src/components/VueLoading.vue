<template>
    <transition name="fade">

         <div class="loading">
           
            <loader
                object="#ffffff" 
                color1="#ffffff" 
                color2="#17fd3d" 
                size="6"
                speed="1" 
                bg="#ff631d" 
                objectbg="#999793" 
                opacity="100" 
                disableScrolling="true" 
                name="spinning">
            </loader>
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
        background-color: #ff631d;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }
    
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
</style>