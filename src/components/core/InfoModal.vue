<template>
    <div class="modal fade m-auto" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content rounded-5">
                <div class="modal-header border border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body m-2">
                    <a href="" data-bs-dismiss="modal" aria-label="Close"><img class="mb-4" src="@/assets/img/logo.svg" alt=""></a>
                    <h1>Sauto Delivery LTDA</h1>
                    <h4>Vila Gonçalves, 45 - Centro - Russas/CE</h4>
                    <div class="phones d-flex flex-column my-3">
                        <a href="#">(88) 3411 - 6372</a>
                        <a href="#">(88) 9 9688 - 7667</a>
                    </div>
                    <div class="mt-3">
                        <h2>Horários de funcionamento</h2>
                        <div class="d-flex align-items-center mb-4">
                            <h3 class="me-auto my-0">Domingo</h3>
                             <div class="workingtime d-flex flex-column">
                                <p class="mb-0">Fechado</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <h3 class="me-auto my-0">Segunda-Feira</h3>
                             <div class="workingtime d-flex flex-column">
                                <p class="mb-0">08:00 - 12:00</p>
                                <p class="mb-0">13:30 - 17:30</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <h3 class="me-auto my-0">Terça-Feira</h3>
                             <div class="workingtime d-flex flex-column">
                                <p class="mb-0">08:00 - 12:00</p>
                                <p class="mb-0">13:30 - 17:30</p>
                                <p class="mb-0">13:30 - 17:30</p>
                                <p class="mb-0">13:30 - 17:30</p>
                                <p class="mb-0">13:30 - 17:30</p>
                                <p class="mb-0">13:30 - 17:30</p>
                                <p class="mb-0">13:30 - 17:30</p>
                                <p class="mb-0">13:30 - 17:30</p>
                                <p class="mb-0">13:30 - 17:30</p>
                                <p class="mb-0">13:30 - 17:30</p>
                                <p class="mb-0">13:30 - 17:30</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <h3 class="me-auto my-0">Quarta-Feira</h3>
                             <div class="workingtime d-flex flex-column">
                                <p class="mb-0">08:00 - 12:00</p>
                                <p class="mb-0">13:30 - 17:30</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <h3 class="me-auto my-0">Quinta-Feira</h3>
                             <div class="workingtime d-flex flex-column">
                                <p class="mb-0">08:00 - 12:00</p>
                                <p class="mb-0">13:30 - 17:30</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <h3 class="me-auto my-0">Sexta-Feira</h3>
                             <div class="workingtime d-flex flex-column">
                                <p class="mb-0">08:00 - 12:00</p>
                                <p class="mb-0">13:30 - 17:30</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <h3 class="me-auto my-0">Sábado</h3>
                             <div class="workingtime d-flex flex-column">
                                <p class="mb-0">08:00 - 12:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex flex-column align-items-start">
                    <a class="text-reset text-decoration-none" type="button" href="tel:+8834116372"><img src="@/assets/img/phone.svg" alt=""><span class="font-weight-bold ml-2"> Ligar </span></a>
                    <a class="text-reset text-decoration-none" type="button" href="https://api.whatsapp.com/send?phone=558834116372"><img src="@/assets/img/number.svg" alt=""><span class="font-weight-bold ml-2">Falar no WhatsApp</span></a>
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

    p {
        margin-right: 150px;
    }

    h1{
        font-weight: 800;
        font-size: 24px;
        line-height: 25.2px;
        color: #343A40;
    }

    h3 {
        font-weight: 800;
        font-size: 17px;
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
        font-size: 20px;
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

    .modal-footer {
        a {
            font-weight: 700;
            font-size: 15px;
            line-height: 20.46px;
            background-color: transparent;
            border: none;
        }
    }

    .modal-footer {
        a:first-child {
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