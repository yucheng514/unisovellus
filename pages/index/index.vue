<template>

	<section>

		<header>
			header
		</header>
		<main>
			<article class="left">
				left
			</article>
			<article class="center">
				main
			</article>
			<article class="right">
				right
			</article>
		</main>
		<footer>
			footer
		</footer>


	</section>

</template>

<style>
	html * {
		margin: 0;
		padding: 0;
	}

	section {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		text-align: center;
		line-height: 100rpx;
	}

	main {
		flex: 1 0 auto;
		background-color: #6dd9bf;
		display: flex;
		/*轴向默认为row, 这里可以不写*/
		flex-direction: row;
	}

	header,
	footer {
		flex: 0 0 50rpx;
	}


	.left,
	.right {
		flex: 0 0 200rpx;
	}

	.center {
		flex: 1 0 auto;
	}

	header {
		background-color: #f2d680;
	}


	footer {
		background-color: #50a18e;
	}


	.left {
		background-color: #f2916D;
	}

	.right {
		background-color: #f26e50;
	}

	header,
	main,
	footer {
		color: #ffffff;
	}
</style>