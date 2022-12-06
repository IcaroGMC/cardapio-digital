<template>
    <button :button-name="buttonName" class="menu-button" data-bs-toggle="modal" data-bs-target="#categoryBackdrop">
        <img src="@/assets/img/list.svg" alt="" srcset="">
        {{ buttonName }}
    </button>
</template>

<script>
import { str } from "@/utils/props.js";
export default {
    props: {
        buttonName: str('')
    },
    data() {
        return {
            name: 'CoreMenuButton'
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu-button {
        z-index: 1000;
        position: fixed;
        bottom: 51px;
        margin: 0 100% !important;
        color: white;
        background-color: #F75B5D;
        border: none;
        box-shadow: 6px 9px 8px -8px rgba(158,158,158,0.67);
        width: 135px;
        height: 48px;
        border-radius: 25px;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 130%;
    }
</style>