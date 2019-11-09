<template>
  <div id="app">
   <nav>
        <router-link to="/">Home &nbsp;</router-link>
        <router-link to="/about">about us &nbsp;</router-link>
        <router-link to="/contactus">contact us</router-link>
        
    </nav>
    <router-view></router-view>
    
  
  
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import About from './components/About.vue';
import ContactUs from './components/ContactUs.vue';
import SearchForm from './components/SearchForm.vue';
import Home from './components/Home.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,About,ContactUs,Home
  }
}
</script>

<style>
@import './assets/styles/bootstrap-4.1.1-dist/css/bootstrap.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
