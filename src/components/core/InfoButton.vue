<template>
    <div class="info-container">
        <button 
        class="info-content" 
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#infoModal">
            <div 
                :removeInfo="removeInfo" 
                :class="(removeInfo == 'yes-ss') ? 'remove-info' : null"
                class="info">
                <img src="@/assets/img/trueInfo.svg" alt="">
                <p>Aberto Agora</p>
            </div>
            <span :class="(removeInfo == 'yes-ss') ? 'info' : null"></span>
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
                    color: #868E96;
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
        }

        #staticBackdrop {
            z-index: 10000000;
        }
    }

    @media screen and (max-width: 1100px) {
        .remove-info {
            display: none !important;
        }
        .info {
            margin: 0 !important;
        }
    }
</style>