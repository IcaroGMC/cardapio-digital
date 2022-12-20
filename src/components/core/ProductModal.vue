<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper" v-on:click="modalClose()">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="image">

                        </slot>
                        <button 
                        type="button" 
                        class="btn-close" 
                        v-on:click="modalClose()">
                        </button>
                    </div>
                    <slot name="body">
                        <CoreSpinner :spinnerSize="'w-100 h-100'" :spinner-class="''" :isLoading="true"  />
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import CoreSpinner from '@/components/core/CoreSpinner.vue';
export default {
    data() {
        return {
            productCategories: true,
        }
    },

    components: {
        CoreSpinner
    },

    methods: {
        modalClose() {
            this.$emit('closeModal');
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        display: table;
        transition: opacity 0.3s ease;

        .modal-wrapper {
            display: table-cell;
            vertical-align: middle;

            .modal-container {
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                height: 500px !important;
                width: 420px !important;
                max-width: 90vw;
                max-height: 100vh;
                border: 1px solid rgba($color: #2c2c2c, $alpha: 0.1);
                transform: scale(calc(100% - 1px));
                overflow: hidden;
                border-radius: 24px;
                transition: all 0.3s ease;
                .modal-header {
                    position: relative;
                    padding: 0;
                    border: 0;

                    button {
                        color: transparent;
                        position: absolute;
                        top: 16px;
                        right: 16px;
                        z-index: 1000;
                    }
                }
            }
        }
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>