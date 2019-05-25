// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import People from './components/People.vue'
////import App from './App'
var axios = require('axios');
require('./assets/css/main.css')

Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
 components:{People},
  data () {
    return {
      

     
  
    }
  },

  computed:{

  }
})