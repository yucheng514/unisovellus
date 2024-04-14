export default {
	namespaced: true,
	state: {
		msgA:"我是moduleA模块下state.msgA的值",
		galleon: 2
	},
	getters: {
		sickle: state => {
			return state.galleon * 17
		},
		knut: state => {
			return state.galleon * 493
		}
	},
	mutations: {
		add(state, payload) {
			// console.log(payload)
			state.galleon += 1
		}
	},
	actions:{
		
		// delayAdd(content){
		// 	console.log(content)
		// 	content.commit('add')
		// },
		// delayAdd({ commit }){
		// 	commit('add')
			
		// }
		delayAdd({ commit }){
			setTimeout(() => {
				commit('add')
			}, 2000)
		}
	}
}