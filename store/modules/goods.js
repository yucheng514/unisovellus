import shop from '../../api/shop'

// initial state
const state = {
	list: []
}

// getters
const getters = {}

// actions
const actions = {
	getList({
		commit
	}) {
		shop.getGoodsList(data => {
			commit('setList', data)
		})
	}
}

// mutations
const mutations = {
	setList(state, data) {
		state.list = data
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}