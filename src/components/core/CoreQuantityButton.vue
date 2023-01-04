<template>
  <div class="button-content">
    <button v-on:click="decrement(0)">-</button>
    <div class="quantity">{{ CART_QUANTITY[0] || 1 }}</div>
    <button v-on:click="increment(0)">+</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {

        }
    },

    computed: {
        ...mapGetters([
            'CART',
            'CART_QUANTITY'
        ]),
    },

    methods: {
        ...mapActions([
            'INCREMENT_CART_PRODUCT',
            'DECREMENT_CART_PRODUCT'
        ]),

        increment(index) {
            this.INCREMENT_CART_PRODUCT(index);
        },
        decrement(index) {
            this.DECREMENT_CART_PRODUCT(index);
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .button-content {
        color: $gray-300;
        width: fit-content;
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
</style>