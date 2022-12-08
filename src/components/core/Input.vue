<template>
    <div
        id="navbarSupportedContent" 
        :class="`${margin}`"
        :margin="margin">
        <div
            :style="(widthsize == 'large-100vw') ? 'width:calc(75vw);' : null"
            :widthsize="widthsize"
            class="input-content">
            <button type="submit"></button>
            <input
                @change="emitChanged"
                v-model="inputName"
                class="search"
                :name="inputName"
                :maxCharacters="maxCharacters"
                :maxlength="maxCharacters"
                type="search" 
                :placeholder="placeholder" 
                aria-label="Search">
            <button v-on:click="buttonDelete()" class="close-active-btn" :class="inputName.length === 0 ? 'close-btn' : 'active-btn'"><i class="fa-solid fa-xmark"></i></button>
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
            input: str(''),
		},

        data() {
            return {
                closeBtnIsActive: true,
                inputName: ''
            }
        },

        computed: {
            nameLength: function () {
                return this.inputName.length;
            }
        },

        methods: {
            buttonDelete: function () {
                this.inputName = '';
                this.$emit('inputChanged', this.inputName);
            },
            emitChanged () {
                this.$emit('inputChanged', this.inputName);
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