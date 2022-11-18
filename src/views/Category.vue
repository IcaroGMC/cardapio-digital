<template>
    <div class="site-container">
        <ComponentHeader></ComponentHeader>
        <main class="main-content">
            <section class="container-fluid">
                <div class="return-content">
                    <button><img src="@/assets/img/rightArrow.svg" alt=""><p> Voltar</p></button>
                    <h2>Hamburguer Gourmet</h2>
                </div>
                <section class="cards">
                    <button class="card" 
                    data-bs-toggle="modal" 
                    data-bs-target="#productModal">
                        <img src="@/assets/img/cardImage2.jpeg" alt="" srcset="">
                        <div class="card-text">
                            <h1>Hamburguer</h1>
                            <p>Pão de leite, molho da casa, creme de cheddar, blend 130g, alface...</p>
                            <span class="price">R$10,00</span>
                        </div>
                    </button>
                </section>
            </section>
            <button class="menu-button">
                <img src="@/assets/img/list.svg" alt="" srcset="">
                Cardápio
            </button>
        </main>
        <ComponentFooter></ComponentFooter>
    </div>
</template>

<script>
import ComponentHeader from "../components/ComponentHeader.vue";
import ComponentFooter from "../components/ComponentFooter.vue";

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
                padding: 0 179px;
                margin: 0;
                flex-direction: column;
                align-items: center;
                max-width: $max-width;
                .return-content {
                    width: 100%;
                    margin: 32px 0;

                    button {
                        display: flex;
                        border: 0;
                        background: 0;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 18px;
                        color: #868E96;

                        img {
                            margin-right: 2px;
                            background-position: center;
                        }

                        p {
                            text-align: center;
                            margin: 0;
                        }
                    }

                    h2 {
                        color: #343A40;
                        font-style: normal;
                        font-weight: 800;
                        font-size: 24px;
                        margin: 0;
                    }
                }

                .cards {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);

                    :nth-child(3n) {
                        justify-self: end;
                    }

                    :nth-child(3n-1) {
                        justify-self: center;
                    }
                    .card {
                        max-width: calc(100vw / 3);
                        width: 311px;
                        height: 336px;
                        border: 1.5px solid #EBEBEB;
                        border-radius: 24px;
                        margin: 0 16px;
                        margin-bottom: 32px;
                        padding: 0;
                        overflow: hidden;

                        img {
                            width: 100%;
                            height: 168px;
                            object-fit: cover;
                        }

                        .card-text {
                            display: flex;
                            align-items: flex-start;
                            flex-direction: column;
                            margin: 21px;
                            
                            h1 {
                                text-align: start;
                                font-style: normal;
                                font-weight: 800;
                                font-size: 18px;
                                line-height: 130%;

                                /* or 23px */

                                /* grey / g1 */
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
                                font-style: normal;
                                font-weight: 800;
                                font-size: 18px;
                                line-height: 130%;
                                color: #F75B5D;
                            }
                        }
                    }
                }
            }

            .menu-button {
                position: fixed;
                bottom: 51px;
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
        }
    }

    @media screen and (max-width: 1360px) {
        .site-container {

            .main-content {

                .container-fluid {

                    .cards {
                        width: 100%;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);

                        .card {
                            width: 221px;
                            justify-self: center;
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
                display: flex;
                justify-content: center;
                width: 100%;
                min-height: 100vh;
                padding-top: 0;

                .container-fluid {
                    width: 100%;
                    display: flex;
                    padding: 0;
                    margin: 0;
                    flex-direction: column;
                    align-items: center;
                    max-width: $max-width;
                    .return-content {
                        position: fixed;
                        z-index: 100;
                        background-color: white;
                        box-shadow: 0px 9px 8px -6px rgba(
                            158,158,158,0.67
                        );
                        display: flex;
                        width: 100%;
                        margin: 0;
                        padding: 23px 12px;

                        button {
                            display: flex;
                            border: 0;
                            background: 0;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 18px;
                            color: #868E96;

                            img {
                                align-self: center;
                                justify-self: center;
                                height: 20px;
                                margin-right: 2px;
                                background-position: center;
                            }

                            p {
                                display: none;
                            }
                        }

                        h2 {
                            color: #343A40;
                            font-style: normal;
                            font-weight: 800;
                            font-size: 24px;
                        }
                    }

                    .cards {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding: 90px 18px 0 18px;

                        :last-child {
                            margin-bottom: 0 !important;
                        }
                        .card {
                            display: flex;
                            flex-direction: row;
                            width: 100%;
                            max-width: 900px;
                            height: 140px;
                            border: none;
                            border-bottom: 1.5px solid #EBEBEB;
                            border-radius: 0;
                            margin: 0;
                            margin-bottom: 32px;
                            padding: 0;
                            overflow: hidden;

                            img {
                                width: 78px;
                                height: 78px;
                                object-fit: cover;
                                border-radius: 16px;
                            }

                            .card-text {
                                margin: 0;
                                margin-left: 16px;
                                
                                h1 {
                                    font-style: normal;
                                    font-weight: 800;
                                    font-size: 18px;
                                    line-height: 130%;

                                    /* or 23px */

                                    /* grey / g1 */
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
                                    font-style: normal;
                                    font-weight: 800;
                                    font-size: 18px;
                                    line-height: 130%;
                                    color: #F75B5D;
                                }
                            }
                        }
                    }
                }

                .menu-button {
                    position: fixed;
                    bottom: 51px;
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
            }
        }
    }
    
    
</style>