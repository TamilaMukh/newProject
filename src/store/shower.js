export default {
    actions: {
        getShower({commit}) {
            commit ('addShower')
        }
    },
    mutations: {
        addShower(state) {
            if (state.shower === true) {
                state.shower = false
            } else {
                state.shower = true
            }
        }
    },
    state:{
        shower: false
    },
    getters: {
        setShower(state) {
            return state.shower
        }
    }
}