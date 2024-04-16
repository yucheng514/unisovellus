<template>
	<view class="content">
		<view class="btn">
			<button type="default" size="mini" @click="add">添加学生</button>
			<button type="warn" @click="del" size="mini" style="margin-left: 20rpx;">删除学生</button>
		</view>
		
		<uni-table style="margin-top: 20rpx;" border stripe emptyText="暂无更多数据">
			<uni-tr>
				<uni-th width="20" align="center">班级</uni-th>
				<uni-th width="20" align="center">姓名</uni-th>
				<uni-th width="20" align="center">性别</uni-th>
				<uni-th width="20" align="center">年龄</uni-th>
			</uni-tr>
			<uni-tr align="center" v-for="stu in students">
				<uni-td>{{stu.grade}}</uni-td>
				<uni-td>{{stu.name}}</uni-td>
				<uni-td>{{stu.gender}}</uni-td>
				<uni-td>{{stu.age}}</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				students: []
			}
		},
		methods: {
			add() {
				let stu = {
					grade: '1',
					name: '张三',
					gender: '男',
					age: '25'
				}
				this.students.push(stu)
			},
			del(){
				this.students.pop()
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

	.btn {
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>