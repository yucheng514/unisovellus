<template>
	<view class="content">
		<br />
		<!-- <text>{{ this.$store.state.galleon}}</text> -->
		<text>1加隆(galleon) = 17西可(sickle) = 493纳特(knut)</text>
		<button @click="add('hello world')" size="mini">+</button>
		<button @click="delayAdd" size="mini">延迟+</button>
		<text> {{ galleon }} 加隆</text>
		<text>= {{ sickle }} 西可</text>
		<text>= {{ knut }} 纳特</text>
		<br />
		<text>{{msgA}}</text>
		<text>{{msgB}}</text>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		// computed: {
		// 	galleon() {
		// 		// return this.$store.state.galleon
		// 		return store.state.galleon
		// 	},
		// 	sickle() {
		// 		return store.getters.sickle
		// 	}
		// },
		// computed: mapState({
		// 	galleon: state => state.galleon
		// }),
		computed: {
			// ...mapState(['galleon']),
			// ...mapGetters(['sickle','knut']),
			// ...mapState({
			// 	msgA: state => {
			// 		console.log(state);
			// 		return state.moduleA.msgA
			// 	}
			// })
			
			// 命名空间用法
			...mapState('moduleA',['msgA','galleon']),
			...mapGetters('moduleA',['sickle','knut']),
			...mapState('moduleB',['msgB'])
			
		},
		methods: {
			// add() {
			// 	store.commit('add')
			// }
			...mapMutations('moduleA',['add']),
			delayAdd(){
				store.dispatch('moduleA/delayAdd')
			}
			// ...mapActions('moduleA',['delayAdd'])
			// ...mapActions({
			// 	delayAdd:'moduleA/delayAdd'
			// })
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>