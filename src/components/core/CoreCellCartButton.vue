<template>
    <div>
        <CoreButton
            v-on:click.native="sendMessageToWhatsapp()"
            :style="'width: 120px; height: 35px;'"
            button-icon="fa-solid fa-cart-shopping"  
            button-name="Comprar">
        </CoreButton>
    </div>
</template>

<script>
import CoreButton from '@/components/core/CoreButton.vue';
import { mapActions, mapGetters } from 'vuex';
import { transformToListString } from '@/utils/functions.js';
    export default {
        data() {
            return {
                
            }
        },

        components: {
            CoreButton
        },

        computed: {
            ...mapGetters([
                'GENERIC_GET',
                'COMPANY',
                'CART',
                'CART_TOTAL',
                'CART_SIZE',
                'TOTAL_PRICE'
            ]),
        },

        methods: {
            ...mapActions([
                'GENERAL_REQUISITION_API',
                'ADD_TO_CART',
                'DELETE_FROM_CART',
                'DELETE_ALL_FROM_CART'
            ]),

            sendMessageToWhatsapp() {
                if (!!this.CART.length) {
                    var anchor = document.createElement('a');
                    var phone = '55'.concat(this.$options.filters.number(this.COMPANY[0].phone_number));
                    anchor.href = `https://wa.me/${phone}/?text=${transformToListString([this.CART, this.CART_TOTAL, this.CART_SIZE, this.TOTAL_PRICE])}`;
                    anchor.target="_blank";
                    anchor.click();
                }
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>