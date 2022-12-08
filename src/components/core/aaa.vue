<template>
    
<div class="modal fade" id="infoBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="infoBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content rounded-5 position-absolute">
            <div class="modal-header border border-0">
                <button type="button" class="close-btn btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body m-2">
                <a href="" data-bs-dismiss="modal" aria-label="Close"><img class="mb-4" src="@/assets/img/logo.svg" alt=""></a>
                <h1>{{ company.items }}</h1>
                <h4>Vila Gonçalves, 45 - Centro - Russas/CE</h4>
                <div class="phones d-flex flex-column my-3">
                    <a href="tel:+8834116372">(88) 3411 - 6372</a>
                    <a href="tel:+88996887667">(88) 9 9688 - 7667</a>
                </div>
                <div class="mt-3">
                    <h2>Horários de funcionamento</h2>
                    <div class="d-flex align-items-center mb-4"
                        v-for="item in days" v-bind:key="item.id">
                        <h3 class="me-auto my-0">{{item.name}}</h3>
                         <div class="workingtime d-flex flex-column">
                            <p class="mb-0"
                                v-for="item in days.times" v-bind:key="item.id">
                                {{ item.start_time }}&nbsp;-&nbsp;{{ item.finish_time }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer d-flex flex-column align-items-start">
                <a 
                    class="text-reset text-decoration-none" 
                    type="button" href="tel:+8834116372">
                    <img src="@/assets/img/phone.svg" alt="">
                    <span class="font-weight-bold ml-2"> Ligar </span>
                </a>
                <a 
                    class="text-reset text-decoration-none" 
                    type="button" href="https://api.whatsapp.com/send?phone=558834116372">
                    <img src="@/assets/img/number.svg" alt="">
                    <span class="font-weight-bold ml-2">Falar no WhatsApp</span>
                </a>
            </div>
        </div>
    </div>
</div>

</template>