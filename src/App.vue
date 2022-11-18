<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  data () {
    return {
      isLoading: true,
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
</script>

<style lang="scss">
  @import '@/scss/GeneralStyle.scss';

  #app {
    font-family: 'Nunito', sans-serif;
  }
</style>
