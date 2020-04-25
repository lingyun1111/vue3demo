const getDefaultState = () => {
  return {
    test: 'qqqqq'
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TEST: (state, val) => {
    state.test = val
  }
}

const actions = {
  // user login
  login ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      const { username, password } = userInfo
      resolve({ username, password })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
