<template>
    <div class="site-container">
        <ComponentHeader remove-header="yes"></ComponentHeader>
        <main class="main-content">
            <section class="container-fluid">
                <div class="return-content">
                    <CoreReturnButton></CoreReturnButton>
                    <div>
                        <h2>Resultados para <span>“{{ $route.query.q | capitalize() }}”</span></h2>
                        <p>{{ products.items.length }} de {{ total_products }} resultado(s) encontrado(s)</p>
                    </div>
                    <form class="mx-auto" v-on:submit="search_products()" v-on:submit.prevent>
                        <CoreInput
                            @inputChanged="defineSearch"
                            :widthsize="'large-100vw'"
                            class="searchinput"
                            :maxCharacters="50" />
                    </form>
                </div>
                <CoreSpinner :spinnerSize="'w-100 h-100'" :spinner-class="''" :isLoading="products.isLoading"  />
                <section class="cards">
                    <CoreCard :class="`${products.isLoading ? 'd-none' : null}`"
                        v-for="item in products.items" v-bind:key="item.id"
                        :v-if="item.length"
                        :card-image-url="{
                            id:item.upload ? item.upload.id : null,
                            name:item.upload ? item.upload.name : null,
                            scope:item.upload ? item.upload.scope : null,
                            
                        }"
                        :card-name="item.name"
                        :card-tag="item.tag"
                        :card-description="item.description" 
                        :card-price="item.price"
                        :card-type="item.type"/>
                </section>
                <CoreNotFoundItems v-if="(!products.items.length && !products.isLoading)" />
                <CoreMenuButton :button-name="'Cardápio'"></CoreMenuButton>
            </section>
        </main>
        <ComponentFooter></ComponentFooter>
    </div>
</template>

<script>
import CoreMenuButton from '@/components/core/CoreMenuButton.vue';
import ComponentHeader from "@/components/ComponentHeader.vue";
import ComponentFooter from "@/components/ComponentFooter.vue";
import CoreCard from "@/components/core/CoreCard.vue";
import CoreInput from "@/components/core/Input.vue";
import CoreSpinner from "@/components/core/CoreSpinner.vue";
import axios from 'axios';
import { baseURL } from '@/config/index.js';
import CoreNotFoundItems from "@/components/core/CoreNotFoundItems.vue";
import CoreReturnButton from '@/components/core/CoreReturnButton.vue';

export default {
    data() {
        return {
            products: {
                items: [],
                isLoading: true,
            },
            
            input_name: '',
            filter: [],
            total_products: 0
        }
    },
    components: {
        ComponentHeader,
        ComponentFooter,
        CoreCard,
        CoreSpinner,
        CoreInput,
        CoreNotFoundItems,
        CoreMenuButton,
        CoreReturnButton
    },

    watch: {
        '$route.query.q': {
            handler() {
                this.get_products(this.$route.query.q);
            }
        },
    },

    mounted() {
        this.get_products(this.$route.query.q);
    },

    methods: {

        defineSearch( data ) {
            this.input_name = data;
        },

        search_products() {
            this.$router.push({
                path: '/busca', 
                query: { 
                    q: this.input_name.toLowerCase()
                } 
            }).catch(error => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        },

        async get_products(filterName) {
            try {
                this.products.isLoading = true;

                let response = await axios.get(baseURL + 'product', {
                    params:{
                        'page[size]': 1000,
                        'order_by[name]': 'asc'
                    }
                });

                const { errors } = response.data;
                if(errors) throw { errors };

                const { records } = response.data;

                this.total_products = records.length;

                if (filterName) {
                    this.filter = records.filter(
                        item => item.name.toLowerCase().includes(filterName.toLowerCase())
                    );

                    this.products.items = this.filter;
                } else {
                    this.products.items = records;
                }

                this.products.isLoading = false;

            } catch({ errors }){

                console.error(errors);

            }
        },

        filteredProduct(search) {
            return this.products.items.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        },
    },
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
            padding-top: 100px;

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
                    gap: 32px;
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
            }
        }
    }
    
    
</style>