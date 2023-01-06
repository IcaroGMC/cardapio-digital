<template>
    <header
    :removeHeader="RemoveHeader" 
    :class="(RemoveHeader == 'yes') ? 'remove-header' : null"
    class="header">
        <nav class="navbar">
            <div class="container-fluid">
                <div class="button-content position-relative">
                    <CoreButton
                        button-hidden="d-none-ss"
                        data-bs-toggle="modal" 
                        data-bs-target="#categoryBackdrop"
                        :style="'background: none !important; box-shadow: none; color: #f75b5d; font-size: 20px;'"
                        :button-icon="'fa-solid fa-bars'">
                    </CoreButton>
                </div>
                <router-link to="/" replace>
                    <img 
                    draggable="false"
                    class="unselectable" 
                    src="@/assets/img/logo.svg" 
                    alt="" 
                    srcset="">
                </router-link>
                <form v-on:submit.prevent v-on:submit="search_products()">
                    <CoreInput
                    @inputChanged="defineSearch"
                    name="search"
                    class="info-input"
                    :margin="'py-1'"
                    :placeholder="'O que você procura?'" 
                    :maxCharacters="30" />
                </form>
                <InfoButton 
                :remove-info="'yes-ss'" 
                class="info-button">
                </InfoButton>
            </div>
        </nav>
    </header>
</template>

<script>
import CoreCartButton from "@/components/core/CoreCartButton.vue";
import CoreButton from "@/components/core/CoreButton.vue";
import InfoButton from "@/components/core/InfoButton.vue";
import CoreInput from "@/components/core/Input.vue";
import { str, bool, number } from '@/utils/props';
export default {

    props: {
        A: str(''),
        B:number(0),
        C: bool(false),
        RemoveHeader: str(''),
    },

    data() {
        return {
            SearchLogoImage: '../assets/img/searchLogo.svg',
            input_name: ''
        }
    },
    components: {
        InfoButton,
        CoreInput,
        CoreButton,
        CoreCartButton
    },

    methods: {
        defineSearch( data ) {
            this.input_name = data;
        },

        search_products() {
            this.$router.push({
                path: '/busca', 
                query: { 
                    q: this.input_name.toLowerCase()
                } 
            }).catch(error => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .header {
        position: fixed;
        display: flex;
        justify-content: center;
        width: 100%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        z-index: 100;
        background-color: $white;
        .navbar {
            width: $max-width;
            padding: 0;
            .container-fluid {
                display: flex;
                margin: 25px 179px;
                padding: 0;

                a {
                    img {
                        image-rendering: optimizeQuality;
                        width: 100%;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1100px) {
        .remove-header {
            display: none !important;
        }

        .header {
            position: fixed;
            display: flex;
            justify-content: center;
            width: 100%;
            z-index: 100;
            background-color: $white;
            .navbar {
                width: $max-width;
                padding: 0;
                .container-fluid {
                    display: flex;
                    align-items: center;
                    margin: 25px 179px;
                    padding: 0;

                    a {
                        img {
                            width: 100%;
                        }
                    }

                    .info-input {
                        margin-top: 10px !important;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1360px) {
        .header {
            position: fixed;
            display: flex;
            justify-content: center;
            width: 100%;
            z-index: 100;
            background-color: $white;
            .navbar {
                width: $max-width;
                padding: 0;
                .container-fluid {
                    display: flex;
                    align-items: center;
                    margin: 25px 179px;
                    padding: 0;

                    a {
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
    
</style>