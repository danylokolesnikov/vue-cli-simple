<template>
	<nav>

		<router-link to="/">Home</router-link>
	    <router-link to="/portfolio">Portfolio</router-link>
		<!-- <a :href="item.link" v-for="item in menu">{{item.title}}</a> -->
	</nav>
</template>

<script>
export default {
	name: 'menu',
	data() {
		return {
			menu: [{link: '/', title: 'General'}, {link: '/case', title: 'Case'}]
		}
	}
}
</script>

<style lang="scss">
nav {
	margin: 0 auto;
	width: 100%;
	background: #c3c3c3;
	display: flex;
	max-width: 1000px;
	-webkit-align-items: flex-start;
	        align-items: flex-start;
	-webkit-justify-content: flex-start;
	        justify-content: flex-start;
	
	a {
		display: inline-block;
		padding: 10px 30px;
		color: #FFF;
		-webkit-transition: all 0.2s;
		   -moz-transition: all 0.2s;
		    -ms-transition: all 0.2s;
		     -o-transition: all 0.2s;
		        transition: all 0.2s;
		&:hover {
			background: #f3f3f3;
			color: #CCC;
		}

	}
}
.router-link-exact-active {
	background: #d4d4d4;
}
</style>