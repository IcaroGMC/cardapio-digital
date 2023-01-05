<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Carrinho</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Código</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Total</th>
                                <th scope="col">
                                    <CoreRemoveAll class="remove-button" v-if="CART.length"></CoreRemoveAll>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cart, index) in CART" :key="cart.id">
                                <th scope="row">{{ cart.tag | tag() || '-' }}</th>
                                <td>{{ cart.search_name || cart.name }}</td>
                                <td>{{ cart.price | toCurrency() }}</td>
                                <td>
                                    <div class="button-content">
                                        <button v-on:click="decrement(index)">-</button>
                                        <div class="quantity">{{ CART[index].quantity }}</div>
                                        <button v-on:click="increment(index)">+</button>
                                    </div>
                                </td>
                                <td>{{ CART_TOTAL[index] | toCurrency() }}</td>
                                <td>
                                    <button v-on:click="removeToCart(index)"><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr v-if="!CART.length">
                                <td colspan="5">Não há Nenhum Produto neste Carrinho</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="6"><p class="m-0" v-if="CART.length">Preço Total: {{ TOTAL_PRICE | toCurrency() }}</p></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="modal-footer">
                    <CoreCellCartButton></CoreCellCartButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoreRemoveAll from '@/components/core/CoreRemoveAll.vue';
import CoreCellCartButton from '@/components/core/CoreCellCartButton.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            textWhatsappMessage: 'a',
        }
    },

    components: {
        CoreRemoveAll,
        CoreCellCartButton
    },

    computed: {
        ...mapGetters([
            'CART',
            'CART_TOTAL',
            'CART_SIZE',
            'TOTAL_PRICE'
        ]),
    },

    methods: {
        ...mapActions([
            'INCREMENT_CART_PRODUCT',
            'DECREMENT_CART_PRODUCT',
            'GET_PRODUCTS_FROM_API', 
            'GET_SUBCATEGORIES_FROM_API', 
            'ADD_TO_CART',
            'DELETE_FROM_CART',
            'DELETE_ALL_FROM_CART'
        ]),

        removeToCart(data) {
            this.DELETE_FROM_CART(data);
        },

        deleteAllFromCart() {
            this.DELETE_ALL_FROM_CART();
        },

        increment(index) {
            this.INCREMENT_CART_PRODUCT(index);
        },
        decrement(index) {
            this.DECREMENT_CART_PRODUCT(index);
        },
    },
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .modal-dialog {
        display: flex;
        .modal-content {
            max-height: calc(100vh - 20px);
            max-width: $max-width;
            border-radius: 0;
            border-radius: 24px;
            margin: auto;
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
                padding: 10px 4em;
                table {
                    border-collapse: separate;
                    border-spacing: 0 8px;
                    thead, tbody, th, tr, td {  
                        border: none;
                    }

                    thead, tfoot {
                        color: $white;
                        background-color: $main-color-700;
                    }

                    tr {
                        height: 40px;
                    }

                    thead {

                        th {
                            &:first-of-type {
                                width: 8%;
                            }
                            &:last-of-type {
                                display: flex;
                                .remove-button {
                                    margin-left: auto;
                                    margin-right: 5px;
                                }
                            }
                        }
                    }

                    tbody {
                        tr {
                            
                            th, td {
                                padding: 2% 0;
                                vertical-align: middle;
                                border-bottom: 1px solid $gray-200;
                            }

                            th {
                                padding-left: 10px;
                            }

                            td {
                                .button-content {
                                    color: $gray-300;
                                    min-width: fit-content;
                                    width: 120px;
                                    border-radius: 25px;
                                    border: 1px solid $gray-200;
                                    display: flex;
                                    align-items: center;

                                    .quantity {
                                        padding: 0 10px;
                                    }

                                    button {
                                        font-size: 18px;
                                        font-weight: bolder;
                                        color: $gray-300;
                                        background: none;
                                        border: none;
                                        width: 38px;
                                        height: 30px;
                                    }
                                }

                                button {
                                    margin-right: auto;
                                    color: $white;
                                    background-color: $main-color-700;
                                    border: none;
                                    min-width: fit-content;
                                    min-height: fit-content;
                                    aspect-ratio: 1/1;

                                    i {
                                        padding: 4px;
                                    }
                                }

                                &:last-of-type {
                                    padding-right: 10px;
                                    text-align: right;
                                }
                            }
                        }
                    }
                }
            }
            .modal-footer {
                border: none;

                a, button {
                    border: none;
                    border-radius: 8px;
                    background-color: $main-color-700;
                    padding: 4px 10px;
                    transition: all .3s linear;

                    span {
                        color: $white;
                    }

                    &:hover {
                        background-color: $main-color-800;
                    }
                }
            }
        }
    }
</style>