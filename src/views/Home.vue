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
    <main class="main-content">
      <div class="slider-section">
        <Slider class="content" />
      </div>
      <div class="cardapio">
          <h1>Cardápio</h1>
          <div class="group-content">
            <div class="group-34">
              <div
                v-for="item in categories.items" 
                :class="`${categories.isLoading ? 'd-none' : null}`"
                :key="item.id" 
                class="text-group">
                <h3>{{ item.name }}</h3>
                <span>3</span>
                <a href="#"><i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
          </div>
      </div>
    </main>
    <component-footer />
  </div>
</template>

<script>
import InfoButton from "@/components/core/InfoButton.vue";
import Input from "@/components/core/Input.vue";
import axios from 'axios';
import { baseURL } from '@/config/index.js';
import ComponentFooter from '../components/ComponentFooter.vue';

export default {
  name: "Home",
  data() {
    return {
      categories: {
                items: [],
                isLoading: true
            },
    }
  },
  methods: {
        async get_categories() {
            try {
                this.categories.isLoading = true;

                let response = await axios.get(`${baseURL}categories`, {
                    params:{
                        'page[size]': 1000
                    }
                });

                const { errors } = response.data;
                if(errors) throw { errors };

                const { records } = response.data;

                this.categories.items = records;

                this.categories.isLoading = false;

            } catch({ errors }){

                this.handle_server_errors(errors);

            }
        },
      },
  created() {
        this.get_categories();
      },
  components: {
    InfoButton,
    Input,
    ComponentFooter
  }
};
</script>

<style lang="scss" scoped>
  .site-container {
    width: 100%;
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
    .main-content {
      width: 100%;
      min-height: 100vh;
      .slider-content {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .group-25 {
        margin: 40px 0;
        overflow-x: scroll;
        padding: 10px 0;
        &::-webkit-scrollbar-track {
          background-color: white;
        }
        &::-webkit-scrollbar {
          height: 4px;
          background: cyan;
        }
        &::-webkit-scrollbar-thumb {
          background: cyan;
        }
      }
      .cardapio {
        margin: 41px 0;
        width: 100%;
        padding: 0px 178px;
        h1 {
          font-weight: 800;
          font-size: 36px;
          line-height: 48.6px;
          font-weight: bolder;
          color: #343A40;
          font-size: 36px;
          line-height: 48.6px;
        }
        .group-content {
          display: flex;
          justify-content: space-around;
          width: 100%;
          .group-34 {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            column-gap: 50px;
            width: 526px;
            .text-group {
              width: 100%;
              padding: 16px 10px;
              display: flex;
              align-items: center;
              border-bottom: 1px solid #DEE2E6;
              h3 {
                color: #343A40;
                font-weight: 700;
                font-size: 18px;
                line-height: 23.4px;
              }
              a {
                font-weight: 200;
                color: #868E96;
                margin-left: 8px;
              }
              span {
                background-color: #DEE2E6;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 25px;
                padding: 1px 8px;
                color: #868E96;
                font-size: 14px;
                margin-left: auto;
                width: 33px;
                height: 23px;
              }
            }
            &:first-child {
              margin-right: 26px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 996px) {
    .main-content {
      .content {
        display: none;
      }
    }
  }
  @media screen and (max-width: 760px) {
    .main-content {
      .cardapio {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 60px;
      }
    }
  }
  @media screen and (max-width: 524px) {
    .main-content {
      .cardapio {
        padding: 0;
        .group-content {
          display: flex;
          flex-direction: column;
          justify-content: none;
          align-items: center;
          width: 100%;
          .group-34 {
            display: grid;
            grid-template-rows: repeat(7, 1fr);
            width: 360px;
            padding: 0;
            margin: 0 !important;
          }
        }
        h1 {
          font-weight: 800;
          font-size: 24px;
          line-height: 32.4px;
          padding: 18px;
        }
      }
    }
  }
</style>
