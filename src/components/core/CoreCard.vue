<template>
    <button class="card"
        v-on:click="showDetails(product)">
        <div class="card-img-content">
            <img 
                :card-image-url="cardImageUrl" 
                :src="cardImageUrl.name ? showCardImageURL : no_image"
                loading="eager"
                :alt="cardImageUrl.name">
        </div>
        <div class="card-text">
            <h1 :card-name="cardName" tabindex="-1" aria-hidden="true">{{ cardName }}</h1>
            <p :card-description="cardDescription">{{ cardDescription | str_limit(45) }}</p>
            <span :card-price="cardPrice" class="price">{{ cardPrice | toCurrency() }}</span>
        </div>
    </button>
</template>

<script>
import ProductModal from '@/components/core/ProductModal.vue';
import { str, number, obj } from "@/utils/props";
export default {
    props: {
        cardName: str(''),
        cardDescription: str(''),
        cardPrice: number(0),
        cardImageUrl: obj()
    },
    data() {
        return {
            showCardImageURL: `https://estagio.sauto.com.br//storage/${this.cardImageUrl.scope}/${this.cardImageUrl.id}/${this.cardImageUrl.name}`,
            no_image: require('@/assets/img/no_image.jpg'),
            card: {
                name: this.cardName,
                description: this.cardDescription,
                price: this.cardPrice,
                imageURL: this.cardImageUrl
            }
        }
    },
    components: {
        ProductModal
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 100%;
        height: 336px;
        border: 1.5px solid #EBEBEB;
        border-radius: 24px;
        padding: 0;
        overflow: hidden;
        .card-img-content {
            overflow: hidden;
            width: 100%;
            height: 168px;

            img {
                transform: scale(105%);
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform .25s ease-out;
                filter: saturate(85%);
            }
        }

        &:hover .card-img-content img {
            transform: scale(100%);
            filter: saturate(100%);
        }

        .card-text {
            display: flex;
            height: 100%;
            max-height: 172px;
            align-items: flex-start;
            flex-direction: column;
            padding: 21px;
            
            h1 {
                text-align: start;
                font-style: normal;
                font-weight: 800;
                font-size: 18px;
                line-height: 130%;
                color: #343A40;
            }

            p {
                text-align: start;
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 150%;
                color: #868E96;
            }

            span {
                margin-top: auto;
                font-style: normal;
                font-weight: 800;
                font-size: 18px;
                line-height: 130%;
                color: #F75B5D;
            }
        }
    }

    @media screen and (max-width: 1100px) {
        .card {
            display: flex;
            flex-direction: row;
            height: 140px;
            width: 100%;
            border: none;
            border-bottom: 1.5px solid #EBEBEB;
            border-radius: 0;
            margin: 0;
            margin-bottom: 0;
            padding: 0;
            overflow: hidden;

            .card-img-content {
                overflow: hidden;
                width: auto;
                min-width: fit-content;
                height: auto;

                img {
                    transform: scale(100%);
                    width: 78px;
                    height: 78px;
                    object-fit: cover;
                    border-radius: 16px;
                }
            }
            .card-text {
                padding: 0;
                margin-left: 16px;
                
                h1 {
                    font-style: normal;
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 130%;
                    color: #343A40;
                }

                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 150%;
                    color: #868E96;
                }

                span {
                    margin-top: 0;
                    font-style: normal;
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 130%;
                    color: #F75B5D;
                }
            }
        }
    }
</style>