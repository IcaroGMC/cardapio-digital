<template>
    <div class="site-container">
        <ComponentHeader remove-header="no"></ComponentHeader>
        <main class="main-content">
            <section class="container-fluid">
                <div class="notfound-info">
                    <div class="notfound-text">
                        <h1>Oops!</h1>
                        <p>
                            Por favor, retorne a página anterior ou ao menu do site.<br>
                            Esta página não foi encontrada ou não está no ar 
                        </p>
                    </div>
                    <div class="notfound-img">
                        <img draggable="false" class="unselectable" src="@/assets/img/404Error.png" alt="">
                    </div>
                </div>
            </section>
        </main>
        <ComponentFooter></ComponentFooter>
    </div>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader.vue";
import ComponentFooter from "@/components/ComponentFooter.vue";

export default {
    data() {
        return {

        }
    },
    components: {
        ComponentHeader,
        ComponentFooter,
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .site-container {
        max-width: 100% !important;

        .main-content {
            display: flex;
            justify-content: center;
            width: 100%;
            min-height: 100vh;
            padding-top: 98px;

            .container-fluid {
                width: 100%;
                display: flex;
                align-items: center;
                padding: 0 179px;
                margin: 0;
                max-width: $max-width;

                .notfound-info {
                    display: flex;
                    user-select: none;
                    position: relative;
                    display: flex;
                    width: 100%;
                    height: fit-content;
                    padding: 25px;

                    .notfound-text {
                        width: 75%;
                        h1 {
                        color: $main-color-700;
                        font-size: 8em;
                        font-weight: bolder;
                        margin: 55px 0;
                        }

                        p {
                            font-size: 20px;
                            color: $gray-300;
                            font-weight: 400;
                        }
                    }

                    .notfound-img {
                        position: relative;
                        display: flex;
                        justify-content: center;
                        width: 25%;

                        img {
                            position: absolute;
                            width: 100%;
                            aspect-ratio: 1/1;
                            @include animation('gravity 2s linear 0s infinite alternate');
                            user-select: none;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1100px) {
        .site-container {
            max-width: 100% !important;

            .main-content {
                padding-top: 7em !important;
                display: flex;
                justify-content: center;
                width: 100%;
                min-height: 100vh;
                padding-top: 98px;

                .container-fluid {
                    width: 100%;
                    display: flex;

                    flex-direction: column;

                    align-items: center;
                    padding: 0 179px;
                    margin: 0;
                    max-width: $max-width;

                    .notfound-info {
                        display: flex;
                        flex-direction: column;
                        user-select: none;
                        position: relative;
                        display: flex;
                        width: 100%;
                        height: fit-content;
                        padding: 25px;

                        .notfound-text {
                            order: 1;
                            width: 100%;
                            font-size: 45%;
                            margin-left: 0;
                            word-break: keep-all;
                            h1 {
                            color: $main-color-700;
                            font-size: 8em;
                            font-weight: bolder;
                            margin: 55px 0;
                            }

                            p {
                                font-size: 20px;
                                color: $gray-300;
                                font-weight: 400;
                            }
                        }

                        .notfound-img {
                            width: 100%;
                            min-height: 10em;
                            order: 0;

                            img {
                                width: 180px;
                                @include animation('gravity 2s linear 0s infinite alternate');
                                user-select: none;
                            }
                        }
                    }
                }
            }
        }
    }
</style>