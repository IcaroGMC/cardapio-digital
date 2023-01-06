import axios from 'axios'
import { baseURL } from '@/config/index.js';

export default {
    async GENERAL_REQUISITION_API({commit}, params) {
        await axios(baseURL.concat(String(params.url)), {
            method: params.method,
            params: params.params,
            data: params.data
        }).then((res) => {
            commit('SET_REQUISITION', {
                response: res.data.records,
                store: String(params.url)
            });
            return res;
        }).catch((error) => {
            console.error(error);
            return error;
        });
    },
}