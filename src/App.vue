<template>
  <div id="app">
    <menu-nav></menu-nav>

    <transition mode="out-in" v-on:enter="animEnter" v-on:leave="animLeave">
      <router-view></router-view>
    </transition>
    <conversion name="conversion"></conversion>
  </div>
</template>

<script>
import menuNav from './components/menu.vue';
import conversion from './components/conversion.vue';
import {TimelineMax} from 'gsap';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'menu-nav': menuNav,
    conversion,
  },
	watch: {
    '$route': function(to, from) {
      console.log(this.$route, to, from)
    }
	},
  methods: {
    animEnter: function(el, done) {
      let enter = new TimelineMax({
        onComplete: function() {
          done();
        }
      })
      enter.fromTo('.conversion', 1, {width: '100%', opacity: 1}, {width: 0, opacity: 0,ease: Expo.easeOut})
    },
    animLeave: function(el, done) {
      console.log(this.$route)
      let leave = new TimelineMax({
        onComplete: function() {
          done();
        }
      })
      leave.to('.conversion', 1, {width: '100%', opacity: 1, ease: Expo.easeOut}, 0.5)
    }
  },
  mounted: function() {
    
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
