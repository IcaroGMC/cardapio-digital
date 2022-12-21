export default {
    // Получение данных из state
    PRODUCTS(state) {
        return state.products;
    },
    SUBCATEGORIES(state) {
        return state.productgroups;
    },
    CART(state) {
        return state.cart;
    }
}