<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/checker">Checker</router-link>
    </div>
    <router-view /> -->
    <Checker />
    <router-view />
  </div>
</template>
<script>
import Checker from "./views/Checker.vue"

export default {
  components: {
    Checker,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
