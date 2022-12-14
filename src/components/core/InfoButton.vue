<template>
    <div class="info-container">
        <button
        type="button" 
        data-bs-toggle="modal" 
        data-bs-target="#infoModal"
        class="info-content">
            <div
                :info-class="infoClass"
                class="info">
                <img src="@/assets/img/trueInfo.svg" alt="">
                <p>Aberto Agora</p>
            </div>
            <span :class="infoClass"></span>
        </button>
    </div>
</template>

<script>
import { str, bool, number } from '@/utils/props';
export default {

    props: {
        A: str(''),
        B:number(0),
        C: bool(false),
        removeInfo: str(''),
        infoClass: str('')
    },

    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .info-container {
        .info-content {
            display: flex;
            align-items: center;
            background-color: transparent;
            border: 0;

            .info {
                display: flex;
                
                :first-child{
                    margin-right: 6px;
                }

                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    color: $gray-300;
                    margin: 0px;
                }
            }
            

            span {
                width: 22px; height: 22px;
                background-color: transparent;
                background-image: url('../../assets/img/info.svg');
                border: none;
                padding: 0;
                margin-left: 21px;
            }

            .remove-info {
                display: none;
            }
        }

        #staticBackdrop {
            z-index: 10000000;
        }
    }

    @media screen and (max-width: 1100px) {
        .remove-info-sm {
            display: none !important;
        }
        .info {
            margin: 0 !important;
        }
    }
</style>