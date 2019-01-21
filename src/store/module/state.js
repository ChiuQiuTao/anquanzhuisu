export default {
    state: {
        navs: ""
    },
    mutations: {
        setmess(state, arrs) {
            state.navs = arrs
        }
    },
    actions: {
        acmess({ commit }) {
            commit("setmess")
        }
    }
}