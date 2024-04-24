<template>
	<view class="content">
		<view class="content-input">
			<text>TODOLIST</text>
			<input type="text" v-model="inputValue" />
			<button type="primary" size="mini" @click="add">添加</button>
		</view>
		<view class="content-item">
			<todoItem v-for="(item, index) in list" :key="index" :content="item" :index="index" @delete="handleDelete">
			</todoItem>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['微信开发', '混合式APP开发'],
				inputValue: ''
			}
		},
		onLoad() {

		},
		methods: {
			add() {
				if (!this.inputValue) return
				this.list.push(this.inputValue)
				this.inputValue = ''
			},
			handleDelete(index) {
				// console.log("index: " + JSON.stringify(index));
				this.list.splice(index, 1)
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

	.content-input {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	input {
		border: 1rpx solid black;
	}
	.content-item{
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: start;
	}
</style>