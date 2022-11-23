<template>
    <button class="card" 
    data-bs-toggle="modal" 
    data-bs-target="#productModal">
        <img src="@/assets/img/no_image.jpg" alt="" srcset="">
        <div class="card-text">
            <h1>{{ cardName }}</h1>
            <p>{{ cardDescription }}</p>
            <span class="price">{{ cardPrice }}</span>
        </div>
    </button>
</template>

<script>
export default {
    data() {
        return {
            image: '',
            cardName: 'Hamburguer',
            cardDescription: 'Pão de leite, molho da casa, creme de cheddar, blend 130g, alface...',
            cardPrice: 'R$ 10,00'
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: calc(100% - 32px);
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

    @media screen and (max-width: 1360px) {
        .card {
            justify-self: center;
        }
    }

    @media screen and (max-width: 1100px) {
        .card {
            display: flex;
            flex-direction: row;
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
</style>