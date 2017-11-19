<template>
	<section class="s_post">
		<h1 class="s_post__title">{{post.title}}</h1>
		<p class="s_post__text">{{post.body}}</p>
		
	</section>
</template>


<script>
	export default {
		data() {
			return {
				post: []
			}
		},
		created: function() {

			this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.id).then(response => {

		    // get body data
		      this.post = response.body

		    }, response => {
		      // error callback
		      console.log('Error in posst request'+ response)
		    
		    });
		    // this.$http.get('https://jsonplaceholder.typicode.com/users').then(response => {

		    // // get body data
		    //   this.users = response.body

		    // }, response => {
		    //   // error callback
		    //   console.log('Error in posst request'+ response)
		    
		    // });
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
	
</style>
