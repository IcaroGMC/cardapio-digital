export default {
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('DELETE_FROM_CART', index);
    },
    DELETE_ALL_FROM_CART({commit}) {
        commit('DELETE_ALL_FROM_CART');
    },
    LOCALSTORAGE_ADD_TO_CART({commit}) {
        commit('SET_CART_WITH_LOCALSTORAGE');
    }
}