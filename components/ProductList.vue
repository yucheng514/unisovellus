<template>
	<ul>
		<li v-for="product in goods" :key="product.id">
			{{ product.title }} - {{ product.price | currency }}
			<br>
			<button @click="add(product)">
				加入购物车
			</button>
		</li>
	</ul>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'

	export default {
		computed: mapState({
			goods: state => state.goods.list,

		}),
		methods: {
			...mapActions('cart', [
				'add'
			]),
		},
		created() {
			this.$store.dispatch('goods/getList')
		},
		filters: {
			currency(value) {
				return '¥ ' + value
			}
		}
	}
</script>