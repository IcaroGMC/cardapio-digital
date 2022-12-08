<template>
  <div id="app">
    
    <InfoModal />
    <router-view />
    <CategoryModal />
  </div>
</template>

<script>
import InfoModal from '@/components/core/InfoModal.vue';
import CategoryModal from "@/components/core/CategoryModal.vue";

export default {
  components: {
    InfoModal,
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
