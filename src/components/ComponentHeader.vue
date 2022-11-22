<template>
    <header class="header">
        <nav class="navbar">
            <div class="container-fluid">
                <a href="/"><img src="@/assets/img/logo.svg" alt="" srcset=""></a>
                <CoreInput :placeholder="'O que você procura?'" :maxCharacters="25" />
                <InfoButton></InfoButton>
            </div>
        </nav>
    </header>
</template>

<script>
import InfoButton from "@/components/core/InfoButton.vue";
import CoreInput from "@/components/core/Input.vue";
export default {
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
                        width: 100%;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1100px) {
        .header {
            display: none !important;
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