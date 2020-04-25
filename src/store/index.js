import Vuex from 'vuex'
import user from './modules/user'

export default Vuex.createStore({
  modules: {
    user
  }
})
