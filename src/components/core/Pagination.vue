<template>
  
</template>

<script>
export default {
    data() {
        return {
            page: 1,
            perPage: 20,
            records: [],
            recordsLength: 0
        }
    },

    methods: {
        getPage(page) {
            records = this.products.items;
                const startIndex = this.perPage * (page - 1) + 1;
                const endIndex = startIndex + this.perPage - 1;
                for (let i = startIndex; i <= endIndex; i++) {
                    this.records.push(`Item ${i}`);
                }
            },
            getRecordsLength() {
            // here we simulate an api call that returns the records length
            this.recordsLength = 500;
        },
    },

    created() {
        this.getRecordsLength();
        this.getPage(this.page);
    }
}
</script>

<style lang="scss" scoped>

</style>