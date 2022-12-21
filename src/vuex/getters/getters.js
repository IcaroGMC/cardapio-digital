export default {
    PRODUCTS(state) {
        return state.products;
    },
    SUBCATEGORIES(state) {
        return state.productgroups;
    },
    CART(state) {
        return state.cart;
    },
    CART_SIZE(state) {
        return state.cart.length;
    },
    TOTAL_PRICE(state) {
        let arr = [];
        for (let index = 0; index < state.cart.length; index++) {
            arr.push(state.cart[index].price);
        }

        return arr.reduce(function(a, b) { return a + b; }, 0);
    }
}