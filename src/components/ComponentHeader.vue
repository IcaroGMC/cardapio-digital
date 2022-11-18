<template>
    <header class="header">
        <nav class="navbar">
            <div class="container-fluid">
                <a href="/"><img src="@/assets/img/logo.svg" alt="" srcset=""></a>
                <div class="ms-auto" id="navbarSupportedContent">
                    <form class="" role="search">
                        <button type="submit"></button>
                        <input class="search" type="search" placeholder="O que você procura?" aria-label="Search">
                    </form>
                </div>
                <button class="info-content">
                    <div class="info">
                        <img src="@/assets/img/trueInfo.svg" alt="" srcset="">
                        <p>Aberto Agora</p>
                    </div>
                    <span></span>
                </button>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            SearchLogoImage: '../assets/img/searchLogo.svg',
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

                #navbarSupportedContent {
                    margin: auto;
                    
                    form {
                        background-color: #E9ECEF;
                        width: 480px;
                        height: 48px;
                        border-radius: 25px;
                        border: none;
                        display: flex;
                        align-items: center;
                        padding: 0 19px;

                        input {
                            background: none;
                            border: none;
                            width: 100%;
                            height: 20px;
                            font-size: 15px;
                            color: #868E96;
                            margin-left: 14px;
                            :focus {
                                border: none;
                            }
                        }
                        
                        ::placeholder {
                            font-weight: 400;
                            color: #343A40;
                        }

                        button {
                            width: 16px; height: 16px;
                            background-image: url('../assets/img/searchLogo.svg');
                            background-color: transparent;
                            border: none;
                        }

                    }
                }

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
                        background-image: url('../assets/img/info.svg');
                        border: none;
                        padding: 0;
                        margin-left: 21px;
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

                    #navbarSupportedContent {
                        margin: auto;
                        
                        form {
                            background-color: #E9ECEF;
                            width: 340px;
                            height: 48px;
                            border-radius: 25px;
                            border: none;
                            display: flex;
                            align-items: center;
                            padding: 0 19px;

                            input {
                                background: none;
                                border: none;
                                width: 100%;
                                height: 20px;
                                font-size: 15px;
                                color: #868E96;
                                margin-left: 14px;
                                :focus {
                                    border: none;
                                }
                            }

                            button {
                                width: 16px; height: 16px;
                                background-image: url('../assets/img/searchLogo.svg');
                                background-color: transparent;
                                border: none;
                            }

                        }
                    }

                    .info-content {
                        display: flex;
                        align-items: center;
                        background-color: transparent;
                        border: 0;
                        p {
                            font-style: normal;
                            font-weight: 400;
                            font-size: 15px;
                            color: #868E96;
                            margin: 0px;
                        }

                        span {
                            width: 22px; height: 22px;
                            background-color: transparent;
                            background-image: url('../assets/img/info.svg');
                            border: none;
                            padding: 0;
                            margin-left: 21px;
                        }
                    }
                }
            }
        }
    }
    
</style>