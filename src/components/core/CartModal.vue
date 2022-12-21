<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div>
                    <div v-for="(cart, index) in CART" :key="cart.id">
                        <p>{{ cart.name }}{{ index }}</p>
                        <button v-on:click="removeToCart(index)">remover produto do carrinho</button>
                    </div>
                </div>
                <p>preço total: {{ TOTAL_PRICE | toCurrency() }}</p>
                <a class="text-reset text-decoration-none" type="button" :href="`https://api.whatsapp.com/send?phone=558834116372&text=${TOTAL_PRICE}`"><span class="font-weight-bold ml-2">Comprar</span></a>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            textWhatsappMessage: 'a',
            
        }
    },

    computed: {
        ...mapGetters(['PRODUCTS','SUBCATEGORIES', 'CART', 'CART_SIZE', 'TOTAL_PRICE']),
    },

    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API', 
            'GET_SUBCATEGORIES_FROM_API', 
            'ADD_TO_CART', 
            'DELETE_FROM_CART'
        ]),

        removeToCart(data) {
            this.DELETE_FROM_CART(data);
        },
    }
}
</script>

<style lang="scss" scoped>

</style>