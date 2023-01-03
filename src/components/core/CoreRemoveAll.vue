<template>
    <div class="btn-group dropend">
        <button 
            class="dropdown-toggle" 
            data-bs-toggle="dropdown" 
            aria-expanded="false">
            <i class="fa-solid fa-circle-xmark"></i>
        </button>
        <ul class="dropdown-menu">
            <p>deseja realmente remover todos os produtos?</p>
            <div class="btn-group" role="group">
                <button type="button" v-on:click="deleteAllFromCart()">Sim</button>
                <button type="button">Não</button>
            </div>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['PRODUCTS','SUBCATEGORIES', 'CART', 'CART_SIZE', 'TOTAL_PRICE']),
    },

    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API', 
            'GET_SUBCATEGORIES_FROM_API', 
            'ADD_TO_CART', 
            'DELETE_FROM_CART',
            'DELETE_ALL_FROM_CART'
        ]),

        deleteAllFromCart() {
            this.DELETE_ALL_FROM_CART();
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    button {
        background-color: $main-color-700;
        color: $white;
        border: none;
        min-width: fit-content;
        min-height: fit-content;
        aspect-ratio: 1/1;

        &::after {
            display: none !important;
        }
    }

    .dropdown-menu {
        border: none;
        padding: 5px;

        p,button {
            font-size: 12px;
        }

        p {
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            color: $gray-600;
            margin: 0;
            margin-bottom: 4px;
        }
        .btn-group {
            border-radius: 8px;
            overflow: hidden;
            width: 80%;
            margin: 0 auto;
            display: flex;
            button {
                height: 15px;
                width: 100%;

                &:first-of-type {
                    background-color: rgb(109, 182, 37);
                }

                &:last-of-type {    
                    background-color: rgb(202, 118, 118);
                }
            }
        }
    }

    @media screen and (max-width: 1100px) {
        .dropdown-menu {
            border: none;
            padding: 5px;

            p,button {
                font-size: 18px;
            }

            p {
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                color: $gray-600;
                margin: 0;
                margin-bottom: 4px;
            }
            .btn-group {
                border-radius: 8px;
                overflow: hidden;
                width: 80%;
                margin: 0 auto;
                display: flex;
                button {
                    height: min-content;
                    width: 100%;

                    &:first-of-type {
                        background-color: rgb(109, 182, 37);
                    }

                    &:last-of-type {    
                        background-color: rgb(202, 118, 118);
                    }
                }
            }
        }
    }
</style>