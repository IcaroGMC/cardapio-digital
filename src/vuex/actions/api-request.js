import axios from 'axios'
import { baseURL } from '@/config/index.js';

export default {
    GET_PRODUCTS_FROM_API({commit}, params) {
        return axios(baseURL + 'product', {
            method: params[0].method,
            params: params[0].params
        }) 
        .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data.records)
            return products;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    },

    GET_SUBCATEGORIES_FROM_API({commit}, params) {
        return axios(baseURL + 'productgroup', {
            method: params[0].method,
            params: params[0].params
        }) 
        .then((productgroups) => {
            commit('SET_SUBCATEGORIES_TO_STATE', productgroups.data.records)
            return productgroups;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    },
}