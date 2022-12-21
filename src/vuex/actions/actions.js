export default {
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('DELETE_FROM_CART', index);
    },
}