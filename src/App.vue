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
import { mapActions, mapGetters } from 'vuex';

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
  },
  created() {
    this.LOCALSTORAGE_ADD_TO_CART();
  },
  mounted() {
    this.GENERAL_REQUISITION_API({
      url: 'company',
      method: 'GET',
      params: {
        'page[size]': 1000,
      }
    })
  },
  methods: {
    ...mapActions([
      'LOCALSTORAGE_ADD_TO_CART',
      'GENERAL_REQUISITION_API'
    ]),
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
