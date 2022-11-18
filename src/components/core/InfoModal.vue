<template>
    <div class="modal fade m-auto" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content rounded-5">
                <div class="modal-header border border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <a href="" data-bs-dismiss="modal" aria-label="Close"><img class="mb-4" src="@/assets/img/logo.svg" alt=""></a>
                    <h1>Sauto Delivery LTDA</h1>
                    <h4>Vila Gonçalves, 45 - Centro - Russas/CE</h4>
                    <div class="phones d-flex flex-column my-2">
                        <a href="#">(88) 3411-6372</a>
                        <a href="#">(88) 9 9688-7667</a>
                    </div>
                    <h2>Horários de funcionamento</h2>
                    <div class="d-flex align-items-center mb-4">
                        <h3 class="me-auto my-0">Domingo</h3>
                        <p class="m-0">8:00 - 14:00</p>
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <h3 class="me-auto my-0">Domingo</h3>
                        <p class="m-0">8:00 - 14:00</p>
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <h3 class="me-auto my-0">Domingo</h3>
                        <p class="m-0">8:00 - 14:00</p>
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <h3 class="me-auto my-0">Domingo</h3>
                        <p class="m-0">8:00 - 14:00</p>
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <h3 class="me-auto my-0">Domingo</h3>
                        <p class="m-0">8:00 - 14:00</p>
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <h3 class="me-auto my-0">Domingo</h3>
                        <p class="m-0">8:00 - 14:00</p>
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <h3 class="me-auto my-0">Domingo</h3>
                        <p class="m-0">8:00 - 14:00</p>
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <h3 class="me-auto my-0">Domingo</h3>
                        <p class="m-0">8:00 - 14:00</p>
                    </div>
                </div>
                <div class="modal-footer d-flex flex-column align-items-start">
                    <button type="button" data-bs-dismiss="modal"><img src="@/assets/img/phone.svg" alt="">Ligar</button>
                    <button type="button" data-bs-dismiss="modal"><img src="@/assets/img/number.svg" alt="">Falar no WhatsApp</button>
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

    h1{
        font-weight: 800;
        font-size: 18px;
        line-height: 25.2px;
        color: #343A40;
    }

    h3 {
        font-weight: 800;
        font-size: 15px;
        line-height: 22.5px;
        color: #343A40;
    }

    h4{
        font-weight: 400;
        font-size: 15px;
        line-height: 22.5px;
        color: #868E96;
    }

    .phones a {
        font-weight: 400;
        font-size: 15px;
        line-height: 22.5px;
        color: #868E96;
        text-decoration: none;
    }

    .phones a:hover {
        text-decoration: underline;
    }

    h2 {
        font-weight: 800;
        font-size: 14px;
        line-height: 25.2px;
        color: #343A40;
    }

    p {
        font-weight: 400;
        font-size: 15px;
        line-height: 22.5px;
        color: #868E96;
    }

    p strong {
        font-weight: 800;
        font-size: 15px;
        line-height: 22.5px;
        color: #343A40;
    }

    .modal-footer {
        border-top: 1px solid #E9ECEF;
    }

    .modal-body img {
        object-fit: cover;
        width: 142px;
        height: 36px;
    }
    .modal-body::-webkit-scrollbar {
        width: 4px;
        background: var(--lightgray-color);
    }

    .modal-footer {
        button {
            font-weight: 700;
            font-size: 15px;
            line-height: 20.46px;
            background-color: transparent;
            border: none;
        }
    }

    .modal-footer {
        button:first-child {
            margin-bottom: 15px;
        }
    }

    .modal-footer {
        i {
            color: #F75B5D;
            font-weight: 500;
            font-size: 18px;
            margin-right: 10px;
        }
    }

    .modal-footer img {
        margin-right: 10px;
    }
</style>