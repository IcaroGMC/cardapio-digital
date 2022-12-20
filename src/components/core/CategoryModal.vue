<template>
    <!-- Modal -->
    <div class="modal fade" id="categoryBackdrop" 
    data-bs-keyboard="false" 
    tabindex="-1" 
    aria-labelledby="categoryBackdropLabel" 
    aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="categoryBackdropLabel">Cardápio</h1>
                    <button 
                    type="button" 
                    class="btn-close" 
                    data-bs-dismiss="modal" 
                    aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="category-body" data-bs-dismiss="modal">
                        <CoreSpinner class="my-5" :spinnerSize="'w-100 h-100'" :spinner-class="''" :isLoading="categories.isLoading"  />
                        <button
                            @click="filterCategory(index)"
                            v-for="(item, index) in categories.items"
                            :class="`${categories.isLoading ? 'd-none' : null}`"
                            :key="item.id" 
                            class="category-content">
                            <h1>{{ item.name }}</h1>
                            <div class="category-info">
                                <span>{{ number_of_products[item.id] || 0 }}</span>
                                <button><img src="@/assets/img/rightArrow.svg" alt=""></button>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoreSpinner from '@/components/core/CoreSpinner'
import axios from 'axios';
import { baseURL } from '@/config/index.js';
export default {
    data() {
        return {
            categories: {
                items: [],
                isLoading: true,
            },
            get_category_id: [],
            number_of_products: []
        }
    },
    components: {
        CoreSpinner
    },

    methods: {
        async get_categories() {
            try {
                this.categories.isLoading = true;

                let response = await axios.get(`${baseURL}categories`, {
                    params:{
                        'page[size]': 1000,
                        'order_by[id]': 'asc',
                    }
                });

                const { errors } = response.data;
                if(errors) throw { errors };

                const { records } = response.data;

                this.categories.items = records;

                this.categories.isLoading = false;

                this.get_products();

            } catch({ errors }){

                console.error(errors);

            }
        },

        async get_products() {
            try {

                let response = await axios.get(`${baseURL}product`, {
                    params:{
                        'page[size]': 1000,
                        'order_by[category_id]': 'asc',
                    }
                });

                const { errors } = response.data;

                if(errors) throw { errors };

                const { records } = response.data;

                for (let index = 0; index < records.length; index++) {
                    this.get_category_id.push(records[index].category_id);
                    
                }

                var count = {}

                this.get_category_id.forEach(
                    function(i) { 
                        count[i] = (count[i]||0) + 1;
                    }
                )

                this.number_of_products = count;

            } catch({ errors }){
                console.error(errors)
            }
        },

        filterCategory(itemId) {
            this.$router.push({
                name: '/categoria',
                params: {
                    name: this.categories.items[itemId].name.toLowerCase(),
                    id: this.categories.items[itemId].id
                },
            }).catch(error => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        }
    },

    created() {
        this.get_categories();
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .modal {
        .modal-dialog {
            height: 100%;
            margin: 0;
            top: 0;
            left: 0;
            position: absolute;
            .modal-content {
                width: 475px;
                max-width: calc(100vw - 20px);
                height: 100%;
                border-radius: 0;
                border-radius: 0px 24px 24px 0px;

                .modal-header {
                    border-bottom: 1px solid $gray-100;
                    h1 {
                        font-style: normal;
                        font-weight: 800;
                        font-size: 24px;
                        line-height: 140%;
                        color: $main-color-700;
                    }

                    button {
                        position: absolute;
                        top: 25px;
                        right: 25px;
                    }
                }

                .modal-body {
                    padding: 0;
                    width: 100%;
                    &::-webkit-scrollbar {
                        width: 16px;
                    }

                    &::-webkit-scrollbar-track {
                        background: #ffffff;
                    }

                    &::-webkit-scrollbar-thumb {
                        background-color: #7a7a7a;
                        border-radius: 10px;
                        border: 3px solid #ffffff;
                    }
                    .category-body {
                        .category-content {
                            text-decoration: none;
                            background: 0;
                            border: 0;
                            display: flex;
                            width: 100%;
                            align-items: center;
                            border-bottom: 1px solid $gray-100;

                            &:hover .category-info button{
                                margin-left: 8px;
                            }

                            h1 {
                                word-break: break-all;
                                margin: 16px;
                                font-style: normal;
                                font-weight: 700;
                                font-size: 18px;
                                line-height: 130%;
                                color: $gray-800;
                                
                            }

                            .category-info {
                                display: flex;
                                align-items: center;
                                min-width: 15%;
                                margin-left: auto;
                                padding: 10px;

                                span {
                                    color: $gray-300;
                                    flex: none;
                                    order: 0;
                                    flex-grow: 0;
                                    background-color: $gray-100;
                                    padding: 1px 8px;
                                    border-radius: 24px;
                                }

                                button {
                                    align-items: center;
                                    background: none;
                                    border: 0;
                                    padding: 0;
                                    transition: 0.2s linear;
                                    img {
                                        margin: auto 0;
                                        rotate: 180deg;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>