<template>
    <CoreButton
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
        :button-hidden="buttonHidden"
        class="position-fixed"
        :style="'width: 135px; height: 48px;'"
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
        font-size: 75%;
    }
</style>