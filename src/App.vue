<template>
  <div id="app">
    <InfoModal />
    <router-view />
    <CategoryModal />
    <CartModal />
  </div>
</template>

<script>
import CartModal from '@/components/core/CartModal.vue';
import InfoModal from '@/components/core/InfoModal.vue';
import CategoryModal from "@/components/core/CategoryModal.vue";

export default {
  components: {
    InfoModal,
    CategoryModal,
    CartModal
  },
  data () {
    return {
      isLoading: true,
    }
  }
}
</script>

<style lang="scss">
  @import '@/scss/GeneralStyle.scss';

  #app {
    overflow-x: hidden;
    font-family: 'Nunito', sans-serif;
  }
</style>
