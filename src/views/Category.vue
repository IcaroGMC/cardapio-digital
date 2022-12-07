<template>
    <div class="site-container">
        <ComponentHeader remove-header="yes"></ComponentHeader>
        <main class="main-content">
            <section class="container-fluid">
                <div class="return-content">
                    <button><img src="@/assets/img/rightArrow.svg" alt=""><p>Voltar</p></button>
                    <h2>{{ category.item.name | capitalize() }}</h2>
                </div>
                <CoreSpinner :spinnerSize="'w-100 h-100'" :spinner-class="''" :isLoading="products.isLoading"  />
                <section class="cards">
                    <CoreCard 
                        :class="`${products.isLoading ? 'd-none' : null}`"
                        v-for="item in products.items" v-bind:key="item.id"
                        :v-if="item.length"
                        :card-image-url="{
                            id:item.upload ? item.upload.id : null,
                            name:item.upload ? item.upload.name : null,
                            scope:item.upload ? item.upload.scope : null    
                        }"
                        :card-name="item.name" 
                        :card-description="item.description" 
                        :card-price="item.price" />
                        <CoreNotFoundItems v-if="!products.items" />
                </section>
                <CoreMenuButton :button-name="'Cardápio'"></CoreMenuButton>
                <CorePagination />
            </section>
           
        </main>
        <ComponentFooter></ComponentFooter>
    </div>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader.vue";
import ComponentFooter from "@/components/ComponentFooter.vue";
import CoreCard from "@/components/core/CoreCard.vue";
import CorePagination from "@/components/core/CorePagination.vue";
import CoreSpinner from "@/components/core/CoreSpinner.vue";
import CoreMenuButton from "@/components/core/CoreMenuButton.vue";
import CoreNotFoundItems from "@/components/core/CoreNotFoundItems.vue";
import axios from 'axios';
import { baseURL } from '@/config/index.js';                               

export default {
    data() {
        return {
            info: null,
            products: {
                items: [],
                isLoading: true,
            },
            category: {
                item: [],
            },
            filter: [],
            metadata: {
                quantity: 0,
                items_per_page: 0,
                numbers_of_pages: 0
            }
        }
    },
    components: {
        ComponentHeader,
        ComponentFooter,
        CoreCard,
        CorePagination,
        CoreSpinner,
        CoreMenuButton,
        CoreNotFoundItems
    },

    watch: {
        '$route.params.id': {
            handler(categoryId) {
                console.log(categoryId);
                this.get_category(categoryId);
                this.get_products(this.$route.params.id)
            }
        },
        
    },

    mounted() {
        this.get_category(this.$route.params.id);
        this.get_products(this.$route.params.id);
    },

    methods: {
        async get_products(filterId) {
            try {

                this.products.isLoading = true;
                
                let response = await axios.get(baseURL + 'product', { 
                    params: { 
                        'filter_by[category_id]': filterId,
                        'page[size]': 1000
                    }
                });

                const { errors } = response.data;
                if(errors) throw { errors };

                const { records, metadata } = response.data;

                this.metadata = metadata;
                this.metadata.items_per_page = metadata.pagination.items_per_page;
                this.metadata.quantity = metadata.quantity;
                this.metadata.numbers_of_pages = Math.ceil(this.metadata.quantity / this.metadata.items_per_page);

                this.products.items = records;

                this.products.isLoading = false;

            } catch({ errors }){

                console.error(errors)

            }
        },

        async get_category(id) {
            try {
                let response = await axios.get(baseURL + `categories/${id}`);

                const { errors } = response.data;
                if(errors) throw { errors };

                this.category.item = response.data.record;

            } catch({ errors }){

                console.error(errors);

            }
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
                        padding-left: 15px;
                        padding-bottom: 12px;

                        img {
                            width: 20px;
                            margin-right: 2px;     
                            background-position: center;
                        }

                        p {
                            text-align: center;
                            margin: 0;                            
                        }
                    }

                    h2 {
                        padding-left: 4px;
                        color: #343A40;
                        font-style: normal;
                        font-weight: 800;
                        font-size: 24px;
                        margin: 0;
                        padding-left: 23px;
                    }
                }

                .cards {
                    width: 100%;
                    display: grid;
                    gap: 32px;
                    grid-template-columns: repeat(3, 1fr);
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
                            padding: 0;
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
                            }
                        }

                        h2 {
                            color: #343A40;
                            font-style: normal;
                            font-weight: 800;
                            font-size: 24px;
                        }
                    }

                    .cards {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding: 120px 18px 0 18px;
                    }
                }
            }
        }
    }
    
    
</style>