export default {
    GENERIC_GET(state) {
        return state.data;
    },

    CART(state) {
        return state.cart;
    },

    CART_TOTAL(state) {
        let arr = [];
        for (let index = 0; index < state.cart.length; index++) {
            arr.push(state.cart[index].price * state.cart[index].quantity);
        };
        return arr;
    },

    CART_ITEMS(state) {
        return state.cart;
    },

    CART_SIZE(state) {
        let arr = [];
        for (let index = 0; index < state.cart.length; index++) {
            arr.push(state.cart[index].quantity);
        }
        return arr.reduce(function(firstValue, secondValue) { 
            return firstValue + secondValue; 
        }, 0);
    },

    TOTAL_PRICE(state, getters) {

        return getters.CART_TOTAL.reduce(function(firstPrice, secondPrice) { 
            return firstPrice + secondPrice; 
        }, 0);
    }
}