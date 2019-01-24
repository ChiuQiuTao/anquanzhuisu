export default {
    state: {
        navs: []
    },
    mutations: {
        setmess(state, nav) {
            state.navs = nav
                //console.log(state.navs)
        }

    },
    actions: {
        increment({ commit }) {
            commit('setmess')
        },
    },
    // getter: {
    //     increment: state => {
    //         return state.navs
    //     }
    // }
}