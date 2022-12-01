<template>
    <nav aria-label="...">
        <ul class="pagination pagination-sm">
            <li class="page-item active" aria-current="page">
                <span class="page-link"></span>
            </li>
            <li class="page-item"><a class="page-link" href="#"></a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    nav {
        margin-top: auto;
        width: 320px;
        ul {
            margin: 10px 0;
            li {
                width: 100%;
                background-color: white !important;

                span {
                    background-color: #F75B5D !important;
                    border: 1px solid #F75B5D !important;
                }
            }
        } 
    }
</style>