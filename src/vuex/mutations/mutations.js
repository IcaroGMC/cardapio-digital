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
            console.log(product);
            localStorage.setItem('localStorageCart', JSON.stringify(state.cart));

            console.log(JSON.parse(localStorage.getItem('localStorageCart')));

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
    }
}