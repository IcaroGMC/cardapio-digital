import axios from 'axios'
import { baseURL } from '@/config/index.js';

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios.get(`baseURL${product}`, {
        }) 
        .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data)
            return products;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    },
}