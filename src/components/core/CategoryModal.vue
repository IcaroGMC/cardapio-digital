<template>
    <!-- Modal -->
    <div class="modal fade" id="categoryBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="categoryBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="categoryBackdropLabel">Cardápio</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="category-body">
                        <button class="category-content">
                            <h1>Nome da Categoria</h1>
                            <div class="category-info">
                                <span>3</span>
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
import axios from 'axios';
import { baseURL } from '@/config/index.js'
export default {
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
                let response = await axios.get(baseURL + 'categories');

                const { errors } = response.data;
                if(errors) throw { errors };

                const { records } = response.data;

                this.categories.items = records;

                this.categories.isLoading = false;

            } catch({ errors }){

                this.handle_server_errors(errors);

            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .modal {
        .modal-dialog {
            height: 100%;
            margin: 0;
            top: 0;
            left: 0;
            position: absolute;
            .modal-content {
                width: 475px;
                height: 100%;
                border-radius: 0;
                border-radius: 0px 24px 24px 0px;

                .modal-header {
                    border: 0;
                    h1 {
                        font-style: normal;
                        font-weight: 800;
                        font-size: 24px;
                        line-height: 140%;
                        color: #F75B5D;
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
                        border-bottom: 1px solid #E9ECEF;
                        .category-content {
                            background: 0;
                            border: 0;
                            display: flex;
                            width: 100%;
                            align-items: center;
                            border-bottom: 1px solid #E9ECEF;

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
                                color: #343A40;
                                
                            }

                            .category-info {
                                display: flex;
                                align-items: center;
                                min-width: 15%;
                                margin-left: auto;
                                padding: 10px;

                                span {
                                    color: #868E96;
                                    flex: none;
                                    order: 0;
                                    flex-grow: 0;
                                    background-color: #E9ECEF;
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