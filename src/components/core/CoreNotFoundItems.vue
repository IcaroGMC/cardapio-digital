<template>
    <div class="not-found-content h-75 justify-content-center d-flex flex-column align-items-center">
        <i class="fa-solid fa-box-open"></i>
        <h3>Não há produtos</h3>
        <h4>Não encontramos produtos para esta pesquisa</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'CoreNotFoundItems'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/GeneralStyle.scss';
    
    i {
        font-size: 4em;
        margin-bottom: 10px;
    }

    h3 {
        font-weight: 400;
        font-size: 1.6em;
    }

    h4 {
        font-weight: 400;
        font-size: 1.25em;
    }

    i, h3, h4 {
        color: $gray-300;
        text-align: center;
    }
</style>