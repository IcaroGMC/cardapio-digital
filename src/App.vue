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
