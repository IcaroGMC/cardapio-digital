<template>
    <CoreButton
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
        :button-hidden="buttonHidden"
        :class="buttonHidden"
        :style="'background: none !important; box-shadow: none; color: #868E96; font-size: 20px;'"
        :button-icon="'fa-solid fa-cart-shopping'">
        <span
            slot="card-span" 
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ CART_SIZE | maxNumber(9)}}
            <span class="visually-hidden">number of products: {{ CART_SIZE }}</span>
        </span>
    </CoreButton>
</template>

<script>
import { str } from '@/utils/props.js';
import { mapActions, mapGetters } from 'vuex';
import CoreButton from '@/components/core/CoreButton.vue';
export default {
    name: 'CoreCartButton',

    props: {
        buttonHidden: str('')
    },

    data() {
        return {

        }
    },

    components: {
        CoreButton
    },

    computed: {
        ...mapGetters(['CART_SIZE']),
    },
}
</script>

<style lang="scss" scoped>
    span {
        font-size: 55%;
    }
</style>