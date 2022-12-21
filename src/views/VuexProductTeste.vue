<template>
  <div>
    <div 
        style="background-color: cyan" 
        v-for="item in PRODUCTS" :key="item.id">
        <p>{{ item.name }}</p>
        <p>{{ item.price | toCurrency() }}</p>
        <button v-on:click="addToCart(item)">adicionar</button>
        <button v-on:click="removeToCart(item.id)">deletar</button>
    </div>

    <div 
        style="background-color: lime" 
        v-for="item in SUBCATEGORIES" :key="item.id">
        <p>{{ item.name }}</p>
        <p>{{ item.price | toCurrency() }}</p>
    </div>
    <p>numero: {{ CART_SIZE }}</p>
    <p>preço total: {{ TOTAL_PRICE | toCurrency() }}</p>
    <div>
        <div v-for="cart in CART" :key="cart.id">
            <p>{{ cart.name }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            storage: []
        }
    },

    computed: {
        ...mapGetters(['PRODUCTS','SUBCATEGORIES', 'CART', 'CART_SIZE', 'TOTAL_PRICE']),
    },

    watch: {

    },

    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API', 
            'GET_SUBCATEGORIES_FROM_API', 
            'ADD_TO_CART', 
            'DELETE_FROM_CART'
        ]),

        addToCart(data) {
            this.ADD_TO_CART(data);
            localStorage.setItem('cartStorage',JSON.stringify(data))
        },

        removeToCart(data) {
            console.log(data);
            this.DELETE_FROM_CART(data);
        },

        async get_products() {
            await this.GET_PRODUCTS_FROM_API([{
                method: 'GET', params: {
                    'filter_by[category_id]': null,
                    'page[size]': 1000
                }
            }]).then((response) => {
                if (response.data) {
                    console.log(response.data);
                }
            });
        },

        async get_subcategories() {
            await this.GET_SUBCATEGORIES_FROM_API([{
                method: 'GET', 
                params: {
                    'filter_by[category_id]': null,
                    'page[size]': 1000
                }
            }]).then((response) => {
                if (response.data) {
                    console.log(response.data);
                }
            });
        }
    },

    mounted() {
        this.get_products();
        this.get_subcategories();
        if (localStorage.data) {
            this.ADD_TO_CART(JSON.parse(localStorage.getItem('cartStorage')));
        }
       
    },
}
</script>

<style lang="scss" scoped>

</style>