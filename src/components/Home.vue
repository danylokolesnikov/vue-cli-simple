<template>
	<h1 class="home">{{ message }}</h1>
</template>


<script>
	export default {
		data() {
			return {
				message: 'HOME PAGE'
			}
		},
		created: function() {
			document.addEventListener("mousemove", this.mousemove);
		},
		destroyed: function() {
			document.removeEventListener("mousemove", this.mousemove);
		},
		methods: {
			mousemove: function(evt) {
				console.log("MOVVE");
			}
		}
	}
</script>

<style lang="scss">
	.home {
		background: red;
	}
</style>
