import Vue from 'vue'
// Vuex 依赖于 vue，需要先行引入
import Vuex from 'vuex'

Vue.use(Vuex); //vue的插件机制
import moduleA from "@/store/modules/moduleA.js"
import moduleB from "@/store/modules/moduleB.js"

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	modules:{
		moduleA,
		moduleB
	}
	
})
export default store