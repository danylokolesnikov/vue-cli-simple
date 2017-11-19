import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'
import Posts from './components/Posts.vue'
import Post from './components/Post.vue'


Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/portfolio', component: Portfolio},
		{ path: '/blog', component: Posts},
		{ path: '/blog/:id', name:'post', component: Post}
	]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
