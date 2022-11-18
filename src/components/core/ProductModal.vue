<template>
    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <img src="@/assets/img/cardImage.jpeg" alt="" srcset="">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <small>#2004</small>
                    <h1>Classicburger gourmet</h1>
                    <p>Pão de leite, molho da casa, creme de cheddar, blend 130g, alface e tomate e mais algumas coisas gostosas</p>
                    <div class="categories-content">
                        <div class="categories">Acompanha Molhos</div>
                    </div>
                    <span class="price">R$10,00</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .modal {
        .modal-dialog {
            display: flex;
            align-items: center;
            justify-content: center;
            .modal-content {
                height: 500px !important;
                width: 420px !important;
                border: 0;
                transform: scale(calc(100% - 1px));
                overflow: hidden;
                border-radius: 24px;
                .modal-header {
                    padding: 0;
                    border: 0;
                    img {
                        height: 223px;
                        object-fit: cover;
                        width: 100%;
                    }

                    button {
                        position: absolute;
                        top: 16px;
                        right: 16px;
                        z-index: 1000;
                    }
                }

                .modal-body {
                    padding: 28px 31px;
                    small {
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 140%;
                        color: #868E96;
                    }

                    h1 {
                        font-style: normal;
                        font-weight: 800;
                        font-size: 18px;
                        line-height: 140%;
                        color: #343A40;
                    }

                    p {
                        font-style: normal;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 150%;
                        color: #868E96;
                    }
                    .categories-content {
                        display: flex;
                        .categories {
                            padding: 3px 14px;
                            border-radius: 25px;
                            background-color: #E9ECEF;
                            margin: 8px 0;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 150%;

                            /* identical to box height, or 18px */

                            /* grey / g3 */
                            color: #868E96;
                        }
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
</style>