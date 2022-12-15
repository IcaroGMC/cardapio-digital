<template>
    <div class="info-container d-flex">
        <CoreSpinner :spinnerStyle="{
            'width': `20px`,
            'height': '20px'
        }" :isLoading="infoLoading"  />
        <button
        type="button" 
        data-bs-toggle="modal" 
        data-bs-target="#infoModal"
        class="info-content">
            <div
            :hidden="infoLoading"
                :info-class="infoClass"
                class="info">
                <img :src="infoImage" alt="">
                <p>{{ infoText }}</p>
            </div>
            <span :class="infoClass"></span>
        </button>
    </div>
</template>

<script>
import { str, bool, number } from '@/utils/props';
import axios from 'axios';
import { baseURL } from '@/config/index.js';
import CoreSpinner from '@/components/core/CoreSpinner.vue';
export default {

    props: {
        A: str(''),
        B:number(0),
        C: bool(false),
        removeInfo: str(''),
        infoClass: str('')
    },

    data() {
        return {
            currentHour: '',
            currentDay: '',
            days: [
                {id: 1, name: 'Sun'},
                {id: 2, name: 'Mon'},
                {id: 3, name: 'Tue'},
                {id: 4, name: 'Wed'},
                {id: 5, name: 'Thu'},
                {id: 6, name: 'Fri'},
                {id: 7, name: 'Sat'},
            ],
            infoText: 'Fechado Agora',
            infoImage: require('@/assets/img/falseInfo.svg'),
            load: false,
            infoLoading: true
        }
    },

    components: {
        CoreSpinner
    },

    mounted() {
        if (!this.load) {
            this.get_workingtime();
            this.load = true;
        }
    },

    methods: {
        async get_workingtime() {
            try {
                this.infoLoading = true;

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

                this.getNow(this.days);

            } catch({ errors }){
                console.error(errors)
            }
        },

        getNow(result) {
            const time = new Date().toString().slice(16,21);
            var day = new Date().toString().slice(0,3);
            this.currentHour = time;
            this.currentDay = day.toLowerCase();

            var searchResult = result.filter(
                word => word.name.toLowerCase().indexOf(this.currentDay) > -1
            );

            if(searchResult[0].workingtime.length) {
                this.defineOpenOrClose(searchResult, this.currentHour);
            } else {
                this.infoLoading = false;
                this.infoText = 'Fechado Agora';
                this.infoImage = require('@/assets/img/falseInfo.svg');
            }
            
        },

        defineOpenOrClose(searchResult, currentHour) {

            let start_time = [];
            let finish_time = [];

            for (let index = 0; index < searchResult[0].workingtime.length; index++) {
                start_time.push(Number(searchResult[0].workingtime[index].start_time.replace(/:/g,"").slice(0,4)));
                finish_time.push(Number(searchResult[0].workingtime[index].finish_time.replace(/:/g,"").slice(0,4)));
            }

            var formatter = Number(currentHour.replace(/:/g,"").slice(0,4));

            console.log(`
                start_time:${start_time}
                finish_time:${finish_time}
                formatter:${formatter}
            `)

            let dontWork = [];

            for (let index = 0; index < searchResult[0].workingtime.length; index++) {
                if (formatter <= start_time[index] || formatter >= finish_time[index]) {
                    dontWork.push(index)
                }
            }

            console.log(`${dontWork.length}/${searchResult[0].workingtime.length}`)

            if (dontWork.length != searchResult[0].workingtime.length) {
                this.infoText = 'Aberto Agora';
                this.infoImage = require('@/assets/img/trueInfo.svg');
            } else {
                this.infoText = 'Fechado Agora';
                this.infoImage = require('@/assets/img/falseInfo.svg');
            }

            this.infoLoading = false
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .info-container {
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
                    color: $gray-300;
                    margin: 0px;
                }
            }
            

            span {
                width: 22px; height: 22px;
                background-color: transparent;
                background-image: url('../../assets/img/info.svg');
                border: none;
                padding: 0;
                margin-left: 21px;
            }

            .remove-info {
                display: none;
            }
        }

        #staticBackdrop {
            z-index: 10000000;
        }
    }

    @media screen and (max-width: 1100px) {
        .remove-info-sm {
            display: none !important;
        }
        .info {
            margin: 0 !important;
        }
    }
</style>