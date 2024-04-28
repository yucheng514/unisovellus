<template>
	<div class="content">
		<div>
			Ask a yes/no question:
			<input v-model="question" :disabled="loading" />
			<text>{{ answer }}</text>
		</div>
		<text>{{ fullName }}</text>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				question: '',
				answer: 'Questions usually contain a question mark. ;-)',
				loading: false,
				author: {
					firstName: 'Jhon',
					lastName: 'Doe'
				}
			}
		},
		watch: {
			question(newQuestion, oldQuestion) {
				if (newQuestion.includes('?') || newQuestion.includes('？')) {
					this.loading = true
					this.answer = 'Thinking...'
					// fetch api 返回一个 response 对象，详见：
					// https://developer.mozilla.org/zh-CN/docs/Web/API/Response/json
					fetch('https://yesno.wtf/api').then(res => res.json()).then(data => {
						this.answer = data.answer
					}).catch(err => {
						this.answer = 'Error!' + err
					}).finally(() => {
						this.loading = false
					})
				}
			},

		},
		computed: {
			fullName() {
				return this.author.firstName + " " + this.author.lastName
			}
		}
	}
</script>

<style>
.content {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		height: 50vh;

	}

	input {
		margin: 10rpx 0;
		border: 1rpx solid black;
	}
</style>