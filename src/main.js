import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue';

//import HelloWorld from './components/HelloWorld.vue';
import About from './components/About.vue';
import ContactUs from './components/ContactUs.vue';
import Home from './components/Home.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);
const routes=[
    {path:'/',component:Home,props:true},
    {path:"/about",component:About,props:true},
    {path:"/contactus",component:ContactUs},
    {path:"/contactus/:msg",component:ContactUs,props:true},
    
];
const router=new VueRouter({routes});

new Vue({
  render: h => h(App),
    router
    
}).$mount('#app')
//const App=new Vue({router}).$mount("#app");
