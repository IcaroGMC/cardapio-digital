<template>
    <footer class="footer-content">
        <div class="container-fluid">
            <div class="footer-text">
                <p>Cardápio digital - Todos os direitos reservados</p>
                <p>Desenvolvido por <span>Sauto Tecnologia</span></p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .footer-content {
        width: 100%;
        margin: 51px 0;

        .container-fluid {
            max-width: $max-width;

            .footer-text {
                display: flex;
                margin: 0 179px;

                :last-child {
                    text-align: end;
                    margin-left: auto;
                }

                p {
                    margin: 0;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 150%;

                    /* identical to box height, or 21px */

                    /* grey / g3 */
                    color: $gray-300;

                    span {
                        font-weight: 800;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1100px) {
        .footer-content {
            width: 100%;
            margin: 51px 0;

            .container-fluid {
                max-width: $max-width;

                .footer-text {
                    display: flex;
                    margin: 0;

                    :last-child {
                        margin-left: auto;
                    }

                    p {
                        margin: 0;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 150%;

                        /* identical to box height, or 21px */

                        /* grey / g3 */
                        color: $gray-300;

                        span {
                            font-weight: 800;
                        }
                    }
                }
            }
        }
    }
</style>