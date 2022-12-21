<template>
    <div class="modal fade m-auto" 
    id="infoModal" 
    tabindex="-1" 
    aria-labelledby="infoModalLabel" 
    aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content rounded-5">
                <div class="modal-header border border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div
                    v-for="item in company.items"
                    :key="item.id"
                    class="modal-body m-2">
                    <a href="" data-bs-dismiss="modal" aria-label="Close"><img class="mb-4" 
                    :src="'https://estagio.sauto.com.br//storage/company/'+item.upload.id+'/'+item.upload.name" alt=""></a>
                    <h1>{{ item.name }}</h1>
                    <h4>{{ item.street }}, {{ item.number }} - {{ item.district }} - {{ item.city.name }}/{{item.city.state.uf}}</h4>
                    <div class="phones d-flex flex-column my-3">
                        <a href="#">{{ item.phone_number }}</a>
                    </div>
                    <div class="mt-3">
                        <h2>Horários de funcionamento</h2>
                        <div class="d-flex align-items-center mb-3"
                            v-for="item in days" v-bind:key="item.id">
                            <h3 class="me-auto my-0">{{ item.name }}</h3>
                             <div class="workingtime d-flex flex-column justify-content-center">
                                <p 
                                    v-for="work in item.workingtime" v-bind:key="work.id" 
                                    class="mb-0">
                                    {{ work.start_time | timeFormat('short') }}&nbsp;-&nbsp;{{ work.finish_time | timeFormat('short') }}
                                </p>
                                <p v-if="!item.workingtime[0]">fechado</p>
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
import axios from 'axios';
import { baseURL } from '@/config/index.js';  
export default {
    data() {
        return {
            name: 'InfoModal',
            days: [
                {id: 1, name: 'Domingo'},
                {id: 2, name: 'Segunda-Feira'},
                {id: 3, name: 'Terça-Feira'},
                {id: 4, name: 'Quarta-Feira'},
                {id: 5, name: 'Quinta-Feira'},
                {id: 6, name: 'Sexta-Feira'},
                {id: 7, name: 'Sábado'},
            ],
            company: {
                items: []
            },
        }
    },

    methods: {
        async get_workingtime() {
            try {

                let response = await axios.get(`${baseURL}workingtime`, {
                    params:{
                        'page[size]': 1000,
                        'order_by[day_id]': 'asc',
                    }
                });

                const { errors } = response.data;

                if(errors) throw { errors };

                const { records } = response.data;

                const composed = this.days.map(d => {
                    return {
                        ...d,
                        workingtime: records.filter(({day_id}) => d.id === day_id)
                    }
                });

                this.days = composed;

            } catch({ errors }){
                console.error(errors)
            }
        },

        async get_company() {
            try {

                let response = await axios.get(`${baseURL}company`, {
                });

                const { errors } = response.data;

                if(errors) throw { errors };

                const { records } = response.data;

                this.company.items = records;


            } catch({ errors }){
                console.error(errors)
            }
        },
    },

    created() {
        this.get_workingtime();
        this.get_company();
    }
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
        color: $gray-800;
    }

    h3 {
        font-weight: 800;
        font-size: 17px;
        line-height: 22.5px;
        color: $gray-800;
    }

    h4{
        font-weight: 400;
        font-size: 15px;
        line-height: 22.5px;
        color: $gray-300;
    }

    .phones a {
        font-weight: 400;
        font-size: 15px;
        line-height: 22.5px;
        color: $gray-300;
        text-decoration: none;
    }

    .phones a:hover {
        text-decoration: underline;
    }

    h2 {
        font-weight: 800;
        font-size: 20px;
        line-height: 25.2px;
        color: $gray-800;
    }

    p {
        font-weight: 400;
        font-size: 15px;
        line-height: 22.5px;
        color: $gray-300;
    }

    p strong {
        font-weight: 800;
        font-size: 15px;
        line-height: 22.5px;
        color: $gray-800;
    }

    .modal-footer {
        border-top: 1px solid $gray-100;
    }

    .modal-body {
        overflow-x: hidden;
    }

    .btn-close {
        position: absolute;
        right: 1.5em;
        top: 1.5em;
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
            color: $main-color-700;
            font-weight: 500;
            font-size: 18px;
            margin-right: 10px;
        }
    }

    .modal-footer img {
        margin-right: 10px;
    }
</style>