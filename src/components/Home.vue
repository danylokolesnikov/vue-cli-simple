<template>
	<h1 class="home">{{ message }}</h1>
</template>


<script>
	export default {
		data() {
			return {
				message: 'HOME PAGE'
			}
		}
	}
</script>

<style lang="scss">
	.home {
		background: red;
	}
</style>
