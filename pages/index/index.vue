<template>
	<view class="content">
		<ul>
			<li>
				请输入第一个数：
				<input type="text" placeholder="请输入数字" v-model="num1">
			</li>
			<li>
				请输入第二个数：
				<input type="text" placeholder="请输入数字" v-model="num2">
			</li>
			<li>
				<button type="primary" @click='compare()'>比较</button>
			</li>
		</ul>
		<div class="result">
			得出结果：{{result}}
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num1: '',
				num2: '',
				result: ''
			}
		},
		onLoad() {

		},
		methods: {
			compare() {
				if (!this.num1 || !this.num2) {
					this.result = '请输入正确的数字'
				} else {
					this.result = this.num1 == this.num2 ? '两个数相等' : parseInt(this.num1) > parseInt(this.num2) ?
						'第一个数大于第二个数' : '第一个数小于第二个数'
				}
			}
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

	.compare {
		margin: 0 auto;
		width: 500px;
	}

	input {
		padding: 2rpx 2rpx;
		border: 1rpx solid black;
	}

	ul {
		padding: 0;
	}

	ul li {
		list-style: none;
		margin-top: 20px;
	}
</style>