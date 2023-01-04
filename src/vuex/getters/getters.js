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
    CART_QUANTITY(state) {
        let arr = [];
        for (let index = 0; index < state.cart.length; index++) {
            arr.push(state.cart[index].quantity || 1);
        }
        return arr;
    },
    CART_ITEMS(state) {
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

        return arr.reduce(function(firstPrice, secondPrice) { 
            return firstPrice + secondPrice; 
        }, 0);
    }
}