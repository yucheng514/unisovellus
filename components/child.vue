<template>
	<view class="nav">
		<slot name="left">
			<button size="mini" class="left">返回</button>
		</slot>
		<slot name="middle" :msg="msg">
			<input type="text" />
		</slot>
		<slot name="right">
			<button size="mini" class="right">确定</button>
		</slot>
	</view>
</template>

<script>
	export default {
		name: "child",
		data() {
			return {
				msg: 'hello km'
			};
		}
	}
</script>

<style>
	.nav {
		background-color: rgb(221, 220, 220);
		width: 100vw;
		height: 70rpx;
		line-height: 70rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	input {
		border: 1rpx solid black;
	}

	.left .right {
		margin: 0px 10px;
	}

	.nav button {
		margin-top: 5rpx;
	}
</style>