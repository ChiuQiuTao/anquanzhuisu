import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import navtop from './module/navtop'

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
        navtop
    }
})