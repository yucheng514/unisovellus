<template>
	<div class="cart">
		<h2>你的购物车</h2>
		<p v-show="!items.length">
			<i>（空）</i>
		</p>
		<ul>
			<li v-for="item in items" :key="item.id">
				{{ item.title }} - {{ (item.price) | currency }} x {{ item.num }}
				<button @click="del(item.id)" size="mini">删除</button>

			</li>
		</ul>
		<p>Total: {{ (total) | currency }}</p>
	</div>
</template>

<script>
	import {
		mapGetters,
		mapState,
		mapActions
	} from 'vuex'

	export default {
		computed: {
			...mapState({
				items: state => state.cart.items
			}),
			...mapGetters('cart', {
				total: 'totalPrice'
			})
		},
		methods: {
			...mapActions('cart', ['del']),

		},
		filters: {
			currency(value) {
				return '¥ ' + value
			}
		}
	}
</script>