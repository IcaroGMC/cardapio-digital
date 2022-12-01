<template>
    <div
        :size="spinnerSize"
        
        :class="`${isLoading ? '' : 'd-none'} ${spinnerSize} d-flex align-items-center justify-content-center`">
        <div 
            :isLoading="isLoading" 
            :class="`h-auto w-auto`">
            <div 
                :spinner-class="spinnerClass" 
                :class="`spinner-border ${spinnerClass}`" 
                role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import { bool, str } from "@/utils/props";
export default {
    props: {
        spinnerSize: str(),
        isLoading: bool(true),
        spinnerClass: str()
    }
}
</script>

<style lang="scss" scoped>

</style>