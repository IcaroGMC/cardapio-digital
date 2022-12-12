<template>
    <div style="width:100%;margin:20px auto;height:30vh">
        <!-- Using the slider component -->
        <slider ref="slider" :options="options">
            <!-- slideritem wrapped package with the components you need -->
            <slideritem v-for="(item,index) in slides" :key="index" :style="style">
                <img draggable="false" class="unselectable slide-img" :src="`
                    https://estagio.sauto.com.br//storage/${item.upload.scope}/${item.upload_id}/${item.upload.name}`" alt="">    
            </slideritem>
            <!-- Customizable loading -->
            <CoreSpinner slot="loading"></CoreSpinner>
        </slider>
    </div>
</template>

<script>
import CoreSpinner from '@/components/core/CoreSpinner.vue';
import axios from 'axios';
import { baseURL } from '@/config/index.js';
import { slider, slideritem } from 'vue-concise-slider'
export default {
    components: {
        slider,
        slideritem,
        CoreSpinner
    },
    data() {
        return {
            slides: [
                
            ],

            style: {
                'width': `30%`,
                'height': '100%',
                'margin-right': '48px',
                'border-radius': '24px',
            },

            options: {
                itemAnimation: true,
                centeredSlides: true,
                currentPage: 1,
                slidesToScroll: 1,
                infinite: 3,
                pagination: false,
                autoplay: 2000,
                loop:true,
                loopedSlides: 3,
            }
        };
    },

    methods: {
        async get_slides() {
            try {

                let response = await axios.get(baseURL + 'slide', {
                    params:{
                        'page[size]': 1000,
                        'order_by[name]': 'asc'
                    }
                });

                const { errors } = response.data;
                if(errors) throw { errors };

                const { records } = response.data;

                this.slides = records;

                console.log(this.slides);

            } catch({ errors }){

                console.error(errors);

            }
        },
    },

    mounted() {
        this.get_slides();
    }
};
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    .slide-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 24px;

        &:active {
            cursor: grab;
        }
    }

    .slider-item {
        transform:scale(0.9);
        transition-timing-function: ease;
        transition-duration: 300ms;
    }
    .slider-item.slider-active {
        transform:scale(1.0);
    }
</style>