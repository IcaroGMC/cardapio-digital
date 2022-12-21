export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },

    SET_SUBCATEGORIES_TO_STATE: (state, productgroups) => {
        state.productgroups = productgroups;
    },

    SET_CART: (state, product) => {
        let allProductsSaves = [];

        console.log(product);

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

    DELETE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1);
    }
}