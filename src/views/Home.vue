<template>
  <div class="site-container d-flex flex-column">
    <header class="header-container">
      <div class="header-content d-flex flex-column align-items-center">
        <div class="info-button w-100 d-flex justify-content-center">
          <router-link to="/" replace><img class="unselectable logo" draggable="false" src="@/assets/img/logo.svg" alt="" srcset=""></router-link>
          <span 
            data-bs-toggle="modal"
            data-bs-target="#infoModal"></span>
        </div>
        <info-button :info-class="'d-none'" />
        <Input :placeholder="'O que você procura?'" :maxCharacters="46" />
      </div>
    </header>
    <main class="main-container">
    </main>
  </div>
</template>

<script>
import InfoButton from "@/components/core/InfoButton.vue";
import Input from "@/components/core/Input.vue";

export default {
  name: "Home",
  data() {
    return {
      items: [
        { message: 'Hamburguers', count: '9' },
        { message: 'Hamburguers', count: '12' },
        { message: 'Hamburguers', count: '12' },
        { message: 'Hamburguers', count: '12' },
        { message: 'Hamburguers', count: '12' },
        { message: 'Hamburguers', count: '12' },
        { message: 'Hamburguers', count: '12' }
      ],
    }
  },
  components: {
    InfoButton,
    Input
  }
};
</script>

<style lang="scss" scoped>
  .site-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: white;
    .header-container {
      width: 100%;
      margin: 43px 0;
      min-height: fit-content;
      .header-content {
        position: relative;
        gap: 16px;
        .info-button {
          img {
            width: 238px;
          }

          span {
            display: inline-block;
            right: auto;
            margin-left: 10px;
            width: 22px; height: 22px;
            background-color: transparent;
            background-image: url('../assets/img/info.svg');
            border: none;
            padding: 0;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
