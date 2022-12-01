<template>
    <div
        id="navbarSupportedContent" 
        :class="`${margin}`"
        :margin="margin">
        <div
            :style="(widthsize == 'large-100vw') ? 'width:calc(100vw - 158px)' : null"
            :widthsize="widthsize"
            class="input-content">
            <button type="submit"></button>
            <input
            v-model="name"
            class="search"
            :name="name"
            :maxCharacters="maxCharacters"
            :maxlength="maxCharacters"
            type="search" 
            :placeholder="placeholder" 
            aria-label="Search">
            <button v-on:click="buttonDelete()" class="close-active-btn" :class="name.length === 0 ? 'close-btn' : 'active-btn'"><i class="fa-solid fa-xmark"></i></button>
        </div>
    </div>
</template>

<script>

    import { str, number } from '@/utils/props';

    export default {

        props: {
			label: str(null),
			id: str(null),
            widthsize: str(null),
			placeholder: str(null),
            maxCharacters: number(null),
            margin: str(''),
		},

        data() {
            return {
                closeBtnIsActive: true,
                name: '',
            }
        },

        computed: {
            nameLength: function () {
                return this.name.length;
            }
        },

        methods: {
            buttonDelete: function () {
                this.name = '';
            }
        },

    }

</script>

<style lang="scss" scoped>
    #navbarSupportedContent {
        .input-content {
            position: relative;
            background-color: #E9ECEF;
            width: 480px;
            height: 48px;
            border-radius: 25px;
            border: none;
            display: flex;
            align-items: center;
            padding: 0 19px;

            input {
                background: none;
                border: none;
                width: 100%;
                height: 20px;
                font-size: 15px;
                color: #646a70;
                margin-left: 14px;

                :focus {
                    border: none;
                }
            }

            input::placeholder {
                font-weight: 600;
                color: #474b50;
            }

            button {
                width: 16px; height: 16px;
                background-image: url('../../assets/img/searchLogo.svg');
                background-color: transparent;
                border: none;
            }

            .close-active-btn {
                color: gray;
                align-content: center;
                justify-content: center;
                padding: 0;
                display: flex;
                z-index: 1002;
                right: 18px;
                width: 16px;
                height: 16px;
                background: 0;
                position: absolute;
            }

            .close-btn {
                display: none !important;
            }

            .active-btn {
                display: flex !important;
            }

        }
    }

    @media screen and (max-width: 1360px) {
        #navbarSupportedContent {
            margin: auto;
            
            .input-content {
                background-color: #E9ECEF;
                width: 340px;
                height: 48px;
                border-radius: 25px;
                border: none;
                display: flex;
                align-items: center;
                padding: 0 19px;

                input {
                    background: none;
                    border: none;
                    width: 100%;
                    height: 20px;
                    font-size: 15px;
                    color: #868E96;
                    margin-left: 14px;
                    :focus {
                        border: none;
                    }
                }

                button {
                    width: 16px; height: 16px;
                    background-image: url('../../assets/img/searchLogo.svg');
                    background-color: transparent;
                    border: none;
                }

            }
        }
    }
</style>