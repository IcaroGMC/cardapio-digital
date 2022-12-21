export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },

    SET_SUBCATEGORIES_TO_STATE: (state, productgroups) => {
        state.productgroups = productgroups;
    },

    SET_CART: (state, product) => {
        let allProductsSaves = [];

        for (let index = 0; index < state.cart.length; index++) {
            allProductsSaves.push(state.cart[index].id);
        }

        if (!allProductsSaves.includes(product.id)) {
            state.cart.push(product);
            console.log(state.cart)
        } else {
            console.log('esse Produto já foi adicionado ao Carrinho')
        }
    },

    NUMBER_OF_PRODUCTS_IN_CART: (state) => {
        return state.cart.length;
    },

    DELETE_FROM_CART: (state, id) => {
        let arr = [];
        for (let index = 0; index < state.cart.length; index++) {
            if (state.cart[index].id !== id) {
                arr.push(state.cart[index]);
            }
        }

        state.cart = arr;
    }
}