<template>
    <!-- Modal -->
    <div 
        class="modal fade" 
        id="productBackdrop" 
        data-bs-keyboard="false" 
        tabindex="-1" 
        aria-labelledby="productBackdropLabel"
        ref="modalElement"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <img src="@/assets/img/cardImage.jpeg" alt="" srcset="">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div v-if="!productCategories" class="modal-body">
                    <small class="tag">#2004</small>
                    <h1>Classicburger gourmet</h1>
                    <p>Pão de leite, molho da casa, creme de cheddar, blend 130g, alface e tomate e mais algumas coisas gostosas</p>
                    <div class="categories-content">
                        <div class="categories">Acompanha Molhos</div>
                    </div>
                    <span class="price">R$10,00</span>
                </div>
                <div v-if="productCategories" class="modal-body">
                    <h1>Classicburger gourmet</h1>
                    <h3>Sabores</h3>
                    <div class="subcategories-content">
                        <div class="subcategories-body">
                            <div class="subcategories-info">
                                <h4>Coca-Cola</h4>
                                <small class="tag">#2004</small>
                            </div>
                            <span class="price">R$10,00</span>
                        </div>
                        <div class="subcategories-body">
                            <div class="subcategories-info">
                                <h4>Coca-Cola</h4>
                                <small class="tag">#2004</small>
                            </div>
                            <span class="price">R$10,00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productCategories: true,
            modalElement: null,
        }
    }
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
                border: 1px solid rgba($color: #2c2c2c, $alpha: 0.1);
                transform: scale(calc(100% - 1px));
                overflow: hidden;
                border-radius: 24px;
                .modal-header {
                    padding: 0;
                    border: 0;
                    img {
                        border-radius: 0;
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
                        display: flex;
                        align-items: center;
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

                    h3 {
                        font-style: normal;
                        font-weight: 700;
                        font-size: 15px;
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
                    .subcategories-content {
                        width: 100%;
                        .subcategories-body {
                            position: relative;
                            padding: 9px 0;
                            display: flex;
                            width: 100%;
                            border-bottom: 1px solid #E9ECEF;

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
                                    color: #495057;
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
                        color: #F75B5D;
                    }
                }
            }
        }
    }
</style>