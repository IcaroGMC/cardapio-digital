export default {
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('DELETE_FROM_CART', index);
    },
    INCREMENT_CART_PRODUCT({commit}, index ) {
        commit('INCREMENT', index)
    },
    DECREMENT_CART_PRODUCT({commit}, index ) {
        commit('DECREMENT', index)
    }
}