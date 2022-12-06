<template>
    <header
    :removeHeader="RemoveHeader" 
    :class="(RemoveHeader == 'yes') ? 'remove-header' : null"
    class="header">
        <nav class="navbar">
            <div class="container-fluid">
                <router-link to="/" replace><img draggable="false" class="unselectable" src="@/assets/img/logo.svg" alt="" srcset=""></router-link>	
                <CoreInput
                    name="search"
                    class="info-input" 
                    :margin="'py-1'" 
                    :placeholder="'O que você procura?'" 
                    :maxCharacters="30" />
                <InfoButton :remove-info="'yes-ss'" class="info-button"></InfoButton>
            </div>
        </nav>
    </header>
</template>

<script>
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
        }
    },
    components: {
        InfoButton,
        CoreInput
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
        box-shadow: 0px 10px 8px -6px rgba(158,158,158,0.67);
        z-index: 100;
        background-color: white;
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
            box-shadow: 0px 9px 8px -6px rgba(158,158,158,0.67);
            z-index: 100;
            background-color: white;
            .navbar {
                width: $max-width;
                padding: 0;
                .container-fluid {
                    display: flex;
                    align-items: center;
                    margin: 25px 179px;
                    padding: 0;

                    a {
                        order: 1;
                        img {
                            width: 100%;
                        }
                    }

                    .info-input {
                        order: 3;
                        margin-top: 10px !important;
                    }

                    .info-button {
                        order: 2;
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
            box-shadow: 0px 9px 8px -6px rgba(158,158,158,0.67);
            z-index: 100;
            background-color: white;
            .navbar {
                width: $max-width;
                padding: 0;
                .container-fluid {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 25px 179px;
                    padding: 0;

                    a {
                        order: 0;
                        img {
                            width: 100%;
                        }
                    }
                    .info-input {
                        order: 1;
                    }
                    .info-button {
                        order: 2;
                    }
                }
            }
        }
    }
    
</style>