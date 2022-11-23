<template>
  <div id="app">
    <vue-loading v-if="isLoading"></vue-loading>
    <InfoModal />
    <ProductModal />
    <router-view />
    <CategoryModal />
  </div>
</template>

<script>
import VueLoading from '@/views/SplashScreen/VueLoading.vue';
import InfoModal from '@/components/core/InfoModal.vue';
import ProductModal from "@/components/core/ProductModal.vue";
import CategoryModal from "@/components/core/CategoryModal.vue";

export default {
  components: {
    VueLoading,
    InfoModal,
    ProductModal,
    CategoryModal
  },
  data () {
    return {
      isLoading: true,
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

    setTimeout(() => {
      this.isLoadingSkeleton = false;
    }, 5000);

    setTimeout(() => {
      this.isLoaded = true;
    }, 5000);
  }
}
</script>

<style lang="scss">
  @import '@/scss/GeneralStyle.scss';

  #app {
    font-family: 'Nunito', sans-serif;
  }
</style>
