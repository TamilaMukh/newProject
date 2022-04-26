export default {
    actions: {
        setTheme({commit}) {
            commit('mutateTheme')
        }
    },
    mutations: {
        mutateTheme(state) {
            if (state.theme != 'night') {
                state.theme = 'night'
            } else {
                state.theme = 'light'
            }
        }
    },
    state: {
        theme: 'light'
    },
    getters: {
        getTheme(state) {
            return state.theme
        }
    }
}