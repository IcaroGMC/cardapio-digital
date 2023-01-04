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
            localStorage.setItem('localStorageCart', JSON.stringify(state.cart));

        } else {
            console.log('Este Produto já foi adicionado ao Carrinho');
        }
    },

    SET_CART_WITH_LOCALSTORAGE: (state) => {
        let arr = JSON.parse(localStorage.getItem('localStorageCart') || '[]');
        state.cart = arr;
    },

    DELETE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1);
        localStorage.setItem('localStorageCart', JSON.stringify(state.cart));
    },

    DELETE_ALL_FROM_CART: (state) => {
        state.cart = [];
        localStorage.removeItem('localStorageCart');
    },

    INCREMENT: (state, index) => {
        console.log(state.cart[index]);
        if (!state.cart[index].quantity) {
            state.cart[index].quantity = 2;
        } else {
            state.cart[index].quantity++;
        }
    },

    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1 ) {
            state.cart[index].quantity--
        }
    }
}