import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import pub from './module/state'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {
        //
    },
    getters: {
        //
    },
    modules: {
        user,
        app,
        pub
    }
})