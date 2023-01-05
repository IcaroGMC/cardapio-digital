import Vue from 'vue'
import Vuex from 'vuex'
import commonActions from './actions/actions'
import apiRequests from './actions/api-request'
import mutations from './mutations/mutations'
import getters from './getters/getters'


const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        data: [],
        cart: [],
    },
    mutations,
    actions,
    getters,
})

export default store;