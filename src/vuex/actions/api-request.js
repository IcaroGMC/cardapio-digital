import axios from 'axios'
import { baseURL } from '@/config/index.js';

export default {
    async GENERAL_REQUISITION_API({commit}, params) {
        for (let index = 0; index < params.url.length; index++) {
            await axios(baseURL.concat(String(params.url[index])), {
                method: params.method,
                params: params.params,
                data: params.data
            }).then((res) => {
                commit('SET_REQUISITION', {
                    response: res.data.records,
                    store: String(params.url[index])
                });
                return res;
            }).catch((error) => {
                console.log(error);
                return error;
            });
        };
    },
}