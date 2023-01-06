<template>
    <button class="card">
        <div class="content" v-on:click="changeShow(true)">
            <div class="card-img-content">
                <img
                    v-on:load="loadImage()"
                    draggable="false" class="unselectable"
                    :card-image-url="cardImageUrl"
                    loading="eager" 
                    :src="cardImageUrl.name && loadCardImage ? showCardImageURL : no_image"
                    :alt="cardImageUrl.name && loadCardImage ? cardImageUrl.name : null">
            </div>
            <div class="card-text">
                <h1 
                    :card-id="cardId" 
                    :card-tag="cardTag" 
                    :card-type="cardType" 
                    :card-name="cardName"
                    :card-quantity="cardQuantity"
                    tabindex="-1" 
                    aria-hidden="true">
                    {{ cardName }}
                </h1>
                <p 
                    :title="cardDescription" 
                    :card-description="cardDescription">
                    {{ cardDescription | str_limit(45) }}
                </p>
                <span
                    v-if="!cardType" 
                    :card-price="cardPrice" 
                    class="price">
                    {{ cardPrice | toCurrency() }}
                </span>
                <span 
                v-else 
                    :card-price="cardPrice" 
                    class="price">
                    <small>a partir de&nbsp;</small>{{ card.smallPrice | toCurrency() }}
                </span>
            </div>
            <img class="select-button" src="@/assets/img/rightArrow.svg" alt="">
        </div>

        <ProductModal @closeModal="changeShow(false)" v-if="showModal">
            <img
                slot="image"
                draggable="false" class="unselectable modal-img"
                :card-image-url="cardImageUrl"
                loading="eager" 
                :src="cardImageUrl.name && loadCardImage ? showCardImageURL : no_image"
                :alt="cardImageUrl.name">
            
            <div slot="body" v-if="!cardType" class="modal-body">
                <small class="tag">{{ cardTag | tag() }}</small>
                <h1>{{ cardName }}</h1>
                <p>{{ cardDescription | str_limit(200) }}</p>
                <CoreButton
                    v-on:click.native="addToCart(card), modalClose()"
                    class="mt-auto py-2 mx-2" 
                    :button-price="cardPrice" 
                    :button-name="`Adicionar a partir de `">
                </CoreButton>
            </div>
            <div slot="body" v-if="cardType" class="modal-body">
                <h1>{{ cardName }}</h1>
                <div 
                    class="d-flex flex-column" 
                    v-for="(item, index) in card.productgroup.items" 
                    v-bind:key="item.id">
                    <h3>{{ item.name }}</h3>
                    <div class="subcategories-content">
                        <div 
                            v-for="itemInfo in card.productgroup.productgroupitem.items[index]" 
                            v-bind:key="itemInfo.id" 
                            class="subcategories-body">
                            <div class="subcategories-info">
                                <h4>{{ itemInfo.name }}</h4>
                                <small class="tag">{{ itemInfo.tag | tag() }}</small>
                            </div>
                            <CoreButton
                                v-on:click.native="addToCart(itemInfo), modalClose()"
                                class="mt-auto py-1 px-2" 
                                :button-price="itemInfo.price">
                            </CoreButton>
                        </div>
                    </div>
                </div>
            </div>
        </ProductModal>
    </button>
</template>

<script>
import CoreButton from '@/components/core/CoreButton.vue';
import ProductModal from '@/components/core/ProductModal.vue';
import { str, number, obj } from "@/utils/props";
import axios from 'axios';
import { baseURL, uploadURL } from '@/config/index.js';
import { mapActions, mapGetters } from 'vuex';
export default {
    props: {
        cardId: number(0),
        cardName: str(''),
        cardQuantity: number(),
        cardTag: number(0),
        cardDescription: str(''),
        cardPrice: number(0),
        cardType: number(0),
        cardImageUrl: obj()
    },

    data() {
        return {
            showCardImageURL: `${uploadURL}${this.cardImageUrl.scope}/${this.cardImageUrl.id}/${this.cardImageUrl.name}`,
            no_image: require('@/assets/img/no_image.jpg'),
            card: {
                id: this.cardId,
                name: this.cardName,
                quantity: this.cardQuantity,
                description: this.cardDescription,
                price: this.cardPrice,
                tag: this.cardTag,
                imageURL: this.cardImageUrl,
                smallPrice: 0,

                productgroup: {
                    items: [],

                    productgroupitem: {
                        items: []
                    }
                }
            },
            loadCardImage: false,
            showModal: false,
            productCategories: false,
        }
    }, 

    components: {
        ProductModal,
        CoreButton
    },

    mounted() {
        this.get_productsgroup(this.card.id);
    },

    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'GET_SUBCATEGORIES_FROM_API', 
            'ADD_TO_CART',
            'LOCALSTORAGE_ADD_TO_CART',
            'DELETE_FROM_CART'
        ]),

        addToCart(data) {
            this.ADD_TO_CART(data);
        },

        modalClose() {
            this.$emit('closeModal');
        },

        loadImage() {
            this.loadCardImage = true;
        },

        changeShow(bool) {
            if (!!bool) {
                this.get_productsgroup(this.card.id);
            }

            this.showModal = bool;
        },

        async get_productsgroup(id) {
            try {

                let response = await axios.get(baseURL + 'productgroup', {
                    params:{
                        'page[size]': 1000,
                        'order_by[id]': 'asc',
                        'filter_by[product_id]': id,
                    }
                });

                const { errors } = response.data;
                if(errors) throw { errors };

                const { records } = response.data;

                if (records.length) {
                    this.card.productgroup.items = records;

                    this.get_productsgroupitem(this.card.productgroup.items);
                }

            } catch({ errors }){

                console.error(errors);

            }
        },

        async get_productsgroupitem(items) {

            let arr = [];

            items.forEach((value) => {    
                arr.push(value.id);
            });

            try {

                arr.forEach(id => {
                    axios.get(baseURL + 'productgroupitem', {
                        params:{
                            'page[size]': 1000,
                            'filter_by[product_group_id]': id,
                        }
                    }).then(response => {
                        const { errors } = response.data;
                        if(errors) throw { errors };

                        const { records } = response.data;

                        let allPrices = [];

                        for (let index = 0; index < records.length; index++) {
                            allPrices.push(records[index].price);
                        }
                        this.card.smallPrice = Math.min(...allPrices);
                        
                        this.card.productgroup.productgroupitem.items.push(records);

                    });
                });

            } catch({ errors }){

                console.error(errors);

            }
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .card {
        width: 100%;
        height: 336px;
        border: 1.5px solid #EBEBEB;
        border-radius: 24px;
        padding: 0;
        overflow: hidden;

        .content {
            width: 100%;
            .select-button {
                display: none;
            }
        }
        .card-img-content {
            overflow: hidden;
            width: 100%;
            height: 168px;

            img {
                transform: scale(105%);
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform .25s ease-in-out;
                filter: saturate(95%);
            }
        }

        &:hover .card-img-content img {
            transform: scale(103%);
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
                margin-top: 0;
                font-style: normal;
                font-weight: 800;
                font-size: 18px;
                line-height: 130%;
                color: $gray-800;
                margin-bottom: 0 !important;
            }

            p {
                inline-size: 100%;
                word-break: break-word;
                hyphens: manual;
                text-align: start;
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 150%;
                margin: 0;
                color: $gray-300;
            }

            span {
                margin-top: auto;
                font-style: normal;
                font-weight: 800;
                font-size: 18px;
                line-height: 130%;
                color: $main-color-700;

                small {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 130%;
                    color: #ADB5BD;
                }
            }
        }
        .modal-img {
            border-radius: 0;
            height: 223px;
            object-fit: cover;
            width: 100%;
            border-bottom: 1.2px solid $gray-100;
        }

        .modal-body {
            display: flex;
            overflow-y: scroll;
            flex-direction: column;
            background-color: $white;
            padding: 28px 31px;

            small {
                display: flex;
                align-items: center;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 140%;
                color: $gray-300;
            }

            h1 {
                font-style: normal;
                font-weight: 800;
                font-size: 18px;
                line-height: 140%;
                margin: 0;
                color: $gray-800;
            }

            h3 {
                width: fit-content;
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                margin-top: 30px;
                line-height: 130%;
                color: $gray-800;
            }

            p {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 130%;
                color: $gray-300;
            }

            .price {
                margin-top: auto;
            }
            .categories-content {
                display: flex;
                .categories {
                    padding: 3px 14px;
                    border-radius: 25px;
                    background-color: $gray-100;
                    margin: 8px 0;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 150%;

                    /* identical to box height, or 18px */

                    /* grey / g3 */
                    color: $gray-300;
                }
            }
            .subcategories-content {
                width: 100%;
                .subcategories-body {
                    position: relative;
                    padding: 9px 0;
                    display: flex;
                    width: 100%;
                    border-bottom: 1px solid $gray-100;

                    :nth-child(2) {
                        margin-left: auto !important;
                    }

                    .subcategories-info {
                        display: flex;

                        h4 {
                            font-style: normal;
                            font-weight: 400;
                            font-size: 18px;
                            line-height: 130%;
                            color: $gray-600;
                            margin: 0;
                        }

                        small {
                            margin-left: 6px !important;
                        }
                    }
                }
            }

            span {
                font-style: normal;
                font-weight: 800;
                font-size: 18px;
                line-height: 130%;
                color: $main-color-700;
            }
        }
    }

    @media screen and (max-width: 1100px) {
        .card {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 140px;
            width: 100%;
            border: none;
            border-bottom: 1.5px solid #EBEBEB;
            border-radius: 0;
            margin: 0;
            margin-bottom: 0;
            padding: 0;
            overflow: hidden;

            .content {
                display: flex;
                align-items: center;
                height: fit-content;
                align-items: center;
                flex-direction: row;

                .select-button {
                    display: block;
                    transform: rotate(180deg);
                    position: absolute;
                    right: 0;
                    align-self: center;
                }
            }

            .card-img-content {
                overflow: hidden;
                width: auto;
                min-width: fit-content;
                height: fit-content;

                img {
                    transform: scale(100%);
                    width: 78px;
                    height: 78px;
                    object-fit: cover;
                    border-radius: 16px;
                }
            }
            .card-text {
                height: fit-content;
                padding: 0;
                margin-left: 16px;
                
                h1 {
                    font-style: normal;
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 130%;
                    color: $gray-800;
                }

                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 150%;
                    color: $gray-300;
                }

                span {
                    margin-top: 0;
                    font-style: normal;
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 130%;
                    color: $main-color-700;
                }
            }
        }
    }
</style>