<template>
	<li @click="handleClick">{{content}}</li>
</template>

<script>
	export default {
		name: "todo-item",
		props: ['content', 'index'],
		data() {
			return {

			};
		},
		methods: {
			handleClick() {
				console.log(this.index);
				this.$emit('delete', this.index)
			}
		}
	}
</script>

<style>
	li {
		cursor: pointer;
	}
</style>