<template>
    <button
    :button-name="buttonName"
    :button-price="buttonPrice"
    :button-icon="buttonIcon"
    :style="buttonStyle"
    :class="`menu-button ${buttonClass}`">
        <i :class="buttonIcon"></i>
        {{ buttonName }}{{ buttonPrice | toCurrency() }}
        <slot name="card-span">

        </slot>
    </button>
</template>

<script>
import { str, number } from "@/utils/props.js";
export default {
    name: 'CoreButton',

    props: {
        buttonName: str(''),
        buttonPrice: number(),
        buttonIcon: str(''),
        buttonClass: str(''),
        buttonStyle: str('')
    },

    data() {
        return {
            name: 'CoreButton'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .menu-button {
        z-index: 1000;
        bottom: 51px;
        color: $white;
        background-color: $main-color-700;
        border: none;
        box-shadow: 6px 9px 8px -8px rgba(158,158,158,0.67);
        border-radius: 25px;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 130%;
        transition: .6s ease-out;

        &:hover {
            background-color: $main-color-800;
        }

        i{
            margin: auto 0;
            width: min-content;
            height: min-content;
            aspect-ratio: 1/1;
        }
    }
    .d-none-ss {
        display: none !important;
    }

    @media screen and (max-width: 1100px) {
        .d-none-ss {
            display: block !important;
        }
    }
</style>