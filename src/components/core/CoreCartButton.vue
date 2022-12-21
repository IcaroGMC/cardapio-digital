<template>
    <CoreButton
        :button-hidden="buttonHidden"
        :class="buttonHidden"
        :style="'background: none !important; box-shadow: none; color: #868E96; font-size: 20px;'"
        :button-icon="'fa-solid fa-cart-shopping'">
        <span
            slot="card-span" 
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span class="visually-hidden">number of products</span>
        </span>
    </CoreButton>
</template>

<script>
import { str } from '@/utils/props.js';
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
    }
}
</script>

<style lang="scss" scoped>
    span {
        font-size: 55%;
    }
</style>