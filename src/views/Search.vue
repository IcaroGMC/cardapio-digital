<template>
    <div class="site-container">
        <ComponentHeader remove-header="yes"></ComponentHeader>
        <main class="main-content">
            <section class="container-fluid">
                <div class="return-content">
                    <button><img src="@/assets/img/rightArrow.svg" alt=""><p>Voltar</p></button>
                    <div>
                        <h2>Resultados para <span>"Salsicha"</span></h2>
                        <p>{{ products.items.length }} resultados encontrados</p>
                    </div>
                    <CoreInput 
                        :widthsize="'large-100vw'" 
                        class="searchinput" 
                        :maxCharacters="50" />
                </div>
                    <CoreSpinner :spinnerSize="'w-100 h-100'" :spinner-class="''" :isLoading="products.isLoading"  />
                <section class="cards">
                    <CoreCard :class="`${products.isLoading ? 'd-none' : null}`"
                        v-for="item in products.items" v-bind:key="item.id"
                        :card-image-url="{
                            id:item.upload ? item.upload.id : null,
                            name:item.upload ? item.upload.name : null,
                            scope:item.upload ? item.upload.scope : null
                            
                        }"
                        :card-name="item.name" 
                        :card-description="item.description" 
                        :card-price="item.price" />
                        
                </section>
                <CorePagination />
            </section>
            <button class="menu-button" data-bs-toggle="modal" data-bs-target="#categoryBackdrop">
                <img src="@/assets/img/list.svg" alt="" srcset="">
                Cardápio
            </button>
        </main>
        <ComponentFooter></ComponentFooter>
    </div>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader.vue";
import ComponentFooter from "@/components/ComponentFooter.vue";
import CoreCard from "@/components/core/CoreCard.vue";
import CorePagination from "@/components/core/CorePagination.vue";
import CoreInput from "@/components/core/Input.vue";
import CoreSpinner from "@/components/core/CoreSpinner.vue";
import axios from 'axios';
import { baseURL } from '@/config/index.js'

export default {
    data() {
        return {
            products: {
                items: [],
                isLoading: true
            },
        }
    },
    components: {
        ComponentHeader,
        ComponentFooter,
        CoreCard,
        CorePagination,
        CoreSpinner,
        CoreInput
    },
    methods: {
        async get_products() {
            try {
                let response = await axios.get(baseURL + 'product');

                const { errors } = response.data;
                if(errors) throw { errors };

                const { records } = response.data;

                this.products.items = records;

                this.products.isLoading = false;

            } catch({ errors }){

                this.handle_server_errors(errors);

            }
            
            
        }
        
    },
    created(){
        this.get_products();
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .site-container {
        max-width: 100% !important;

        .main-content {
            display: flex;
            justify-content: center;
            width: 100%;
            min-height: 100vh;
            padding-top: 98px;

            .container-fluid {
                width: 100%;
                display: flex;
                padding: 0 179px;
                margin: 0;
                flex-direction: column;
                align-items: center;
                max-width: $max-width;
                .return-content {
                    width: 100%;
                    margin: 32px 0;

                    button {
                        display: flex;
                        border: 0;
                        background: 0;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 18px;
                        color: #868E96;

                        img {
                            margin-right: 2px;
                            background-position: center;
                        }

                        p {
                            text-align: center;
                            margin: 0;
                        }
                    }

                    div {
                        display: flex;

                        :last-child {
                            margin-left: auto;
                        }
                        h2 {
                            color: #343A40;
                            font-style: normal;
                            font-weight: 800;
                            font-size: 24px;
                            margin: 0;

                            span {
                                color: #F75B5D;
                            }
                        }

                        p {
                            font-style: normal;
                            font-weight: 400;
                            font-size: 15px;
                            line-height: 150%;
                            text-align: right;
                            color: #868E96;
                        }
                    }
                    .searchinput {
                        display: none;
                    }
                }

                .cards {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    row-gap: 32px;
                }
            }

            .menu-button {
                position: fixed;
                z-index: 4;
                bottom: 51px;
                color: white;
                background-color: #F75B5D;
                border: none;
                box-shadow: 6px 9px 8px -8px rgba(158,158,158,0.67);
                width: 135px;
                height: 48px;
                border-radius: 25px;
                font-style: normal;
                font-weight: 700;
                font-size: 15px;
                line-height: 130%;
                transition: .6s ease-out;

                &:hover {
                    background-color: #f84548;
                }
            }
        }
    }

    @media screen and (max-width: 1360px) {
        .site-container {

            .main-content {
                padding-top: 178px;
                .container-fluid {

                    .cards {
                        width: 100%;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1100px) {
        .site-container {
            max-width: 100% !important;

            .main-content {
                display: flex;
                justify-content: center;
                width: 100%;
                min-height: 100vh;
                padding-top: 0;

                .container-fluid {
                    width: 100%;
                    display: flex;
                    padding: 0;
                    margin: 0;
                    flex-direction: column;
                    align-items: center;
                    max-width: $max-width;
                    .return-content {
                        position: fixed;
                        z-index: 100;
                        background-color: white;
                        box-shadow: 0px 9px 8px -6px rgba(
                            158,158,158,0.67
                        );
                        display: flex;
                        width: 100%;
                        margin: 0;
                        padding: 23px 12px;

                        button {
                            display: flex;
                            border: 0;
                            background: 0;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 18px;
                            color: #868E96;

                            img {
                                align-self: center;
                                justify-self: center;
                                height: 20px;
                                width: 20px;
                                margin-right: 2px;
                                background-position: center;
                            }

                            p {
                                display: none;
                                margin: 0 !important;
                            }
                        }

                        h2 {
                            display: none;
                        }

                        p {
                            display: none;
                        }

                        .searchinput {
                            margin: 0;
                            display: block;
                        }
                    }

                    .cards {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding: 120px 18px 0 18px;

                        :last-child {
                            margin-bottom: 0 !important;
                        }
                    }
                }

                .menu-button {
                    position: fixed;
                    bottom: 51px;
                    color: white;
                    background-color: #F75B5D;
                    border: none;
                    box-shadow: 6px 9px 8px -8px rgba(158,158,158,0.67);
                    width: 135px;
                    height: 48px;
                    border-radius: 25px;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 15px;
                    line-height: 130%;
                }
            }
        }
    }
    
    
</style>