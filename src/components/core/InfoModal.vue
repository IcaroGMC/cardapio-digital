<template>
    <div class="modal fade m-auto" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
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

<script>
import axios from 'axios';
import { baseURL } from '@/config/index.js'; 
export default {
    data() {
        return {
            name: 'InfoModal',
            workingtime: {
                items: []
            },
            days: [
                {id: 1, name: 'Domingo', times: []},
                {id: 2, name: 'Segunda-Feira', times: []},
                {id: 3, name: 'Terça-Feira', times: []},
                {id: 4, name: 'Quarta-Feira', times: []},
                {id: 5, name: 'Quinta-Feira', times: []},
                {id: 6, name: 'Sexta-Feira', times: []},
                {id: 7, name: 'Sábado', times: []},
            ],
            filter: []
        }
    },

    methods: {
        async get_workingtime() {
            try {
                let response = await axios.get(baseURL + 'workingtime');

                const { errors } = response.data;
                if(errors) throw { errors };

                const { records } = response.data;

                console.log(records);

                this.workingtime.items = records;

                for (const day in this.days.id) {
                    
                    this.days[day].times = {
                        start_time: this.workingtime[day].items.start_time,
                        finish_time: this.workingtime[day].items.finish_time,
                    }
                    
                }

            } catch({ errors }){

                console.error(errors);

            }
        },
    },

    created() {
        this.get_workingtime();
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';

    .modal-header {
        .close-btn {
            right: 1.5em;
            top: 1.5em;
        }
    }

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
    .modal-body {
        &::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: #888;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
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