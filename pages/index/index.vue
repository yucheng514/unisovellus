<template>
	<view>
		<br />
		<!-- 第一次调用 -->
		<child></child>
		
		<br />
		<!-- 第二次调用 -->
		<child>
			<template #left>
				<button size="mini" class="left">购物车</button>
			</template>
			<template #right>
				<button size="mini" class="right">搜索</button>
			</template>
		</child>

		<br />
		<!-- 第三次调用 -->
		<child>
			<!-- <template #middle="{msg}"><text>{{msg}}</text></template> -->
			<template #middle>
				<text>购物车</text>
			</template>
			<template #right>
				<button size="mini" class="right">搜索</button>
			</template>
		</child>
	</view>
</template>

<script>
	import child from "@/components/child.vue"
	export default {
		components: {
			child
		}
	}
</script>

<style>
	.left {
		font-weight: bold;
	}
</style>