<template>
  <div id="app">
    <menu-nav></menu-nav>
    <transition name="pageChange">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import menuNav from './components/menu.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'menu-nav': menuNav
  },
	watch: {
    '$route': function(to, from) {
      console.log(this.$route, to, from)
    }
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
.pageChange {
  &-enter-active, &-leave-active {
    // transition: all 0.6s;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  &-enter-active {
    transition: all 0.6s;
  }
  &-leave-active {
    transition: all 1s;
  }
  &-enter {
    transform: translateX(100%);
  }
  &-leave-to {
    transform: translateX(-100%);
  }
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
