import Vue from 'vue';

export default {

    SET_REQUISITION: (state, res) => {
        let name = res.store;
        switch (name) {
            case 'product':
                state.product = res.response;
                break;
            case 'company':
                state.company = res.response;
                break;
        
            default:
                break;
        }
    },

    SET_CART: (state, product) => {
        let allProductsSaves = [];

        for (let index = 0; index < state.cart.length; index++) {
            allProductsSaves.push(state.cart[index].id);
        }

        if (!allProductsSaves.includes(product.id)) {
            state.cart.push(product);
            localStorage.setItem('localStorageCart', JSON.stringify(state.cart));
            Vue.swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Produto Adicionado com Sucesso!',
                showConfirmButton: false,
                timer: 1500
              });

        } else {
            Vue.swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Este Produto já foi adicionado ao Carrinho',
                showConfirmButton: false,
                timer: 1500
            });
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
        state.cart[index].quantity++;
        
        localStorage.setItem('localStorageCart', JSON.stringify(state.cart));
    },

    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1 ) {
            state.cart[index].quantity--
        }
        localStorage.setItem('localStorageCart', JSON.stringify(state.cart));
    }
}