<template>
    <div class="buttons">
        <button v-on:click="Back()"><img src="@/assets/img/rightArrow.svg" alt=""><p>Voltar</p></button>
        <button v-on:click="Back()" class="return-btn"><img src="@/assets/img/arrow-left.svg" alt=""></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'CoreReturnButton'
        }
    },

    methods: {
        Back() {
            this.$router.push('/');
        },
    }
}
</script>

<style lang="scss" scoped>
    button {
        display: flex;
        border: 0;
        background: 0;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #868E96;

        img {
            margin-right: 2px;
            background-position: center;
        }

        p {
            text-align: center;
            margin: 0;
        }
    }
    .return-btn {
        display: none;
    }

    @media screen and (max-width: 1100px) {
        button {
            display: none;
        }
        .return-btn {
            display: block;

            img {
                width: 26px;
                aspect-ratio: 1/1;
            }
        }
    }
</style>