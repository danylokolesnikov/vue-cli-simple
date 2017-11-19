<template>
	<section class="s_posts">
		
		<div class="s_posts__list">
			<div class="s_posts__post" v-for="post in posts">
				<router-link :to="{
					name: 'post',
					params: {id: post.id}
				}" class="" :key="post.id">
					<h2 class="s_posts__user" v-for="user in users" v-if="user.id === post.userId">{{user.name}}</h2>
					<h3 class="s_posts__title">{{post.title}}</h3>
				</router-link>
			</div>
		</div>
	</section>
</template>


<script>
	export default {
		data() {
			return {
				posts: [],
				users: [],
				postOnPage: 0
			}
		},
		created: function() {
			this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {

		    // get body data
		      this.posts = response.body

		    }, response => {
		      // error callback
		      console.log('Error in posst request'+ response)
		    
		    });
		    this.$http.get('https://jsonplaceholder.typicode.com/users').then(response => {

		    // get body data
		      this.users = response.body

		    }, response => {
		      // error callback
		      console.log('Error in posst request'+ response)
		    
		    });
			// document.addEventListener("mousemove", this.mousemove);
		},
		destroyed: function() {
			// document.removeEventListener("mousemove", this.mousemove);
		},
		methods: {
			// mousemove: function(evt) {
			// 	console.log("MOVVE");
			// }
		}
	}
</script>

<style lang="scss">
	.s_posts {
		background: #f4f4f4;
		
		&__list {
			margin: 0 auto;
			max-width: 900px;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-gap: 15px;
  			/*grid-row-gap: 15px;*/
		}

		&__post {
			background: #7F8C8D;
			border: 1px solid #1abc9c;
			text-decoration: none;
			color: #ecf0f1;
		}

	}
</style>
