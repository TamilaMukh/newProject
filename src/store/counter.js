export default {
    state: {
        counter: 0
      },
      getters: {
        getCounter(state) {
          return state.counter
        }
      },
      mutations: {
        addNumber(state) {
          state.counter = state.counter + 1
        }
      },
      actions: {
        setCounter({commit}){
          commit('addNumber')
        } 
      }
}