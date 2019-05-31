// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Landing from '../components/Landing.vue'
import People from '../components/People.vue'
import Planets from '../components/Planets.vue'
import Starships from '../components/Starships.vue'
import Selected from '../components/Selected.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import  store  from './store/store'
import { mapGetters } from 'vuex'

Vue.use(Vuetify)

////import App from './App'
var axios = require('axios');
require('../css/main.css')
Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',store,
 components:{People, Selected, Planets, Starships, Landing},
  data () {
    return {
      

     
  
    }
  },


  computed: {

    ...mapGetters([
      'employee_data',
      'clicked_employee',
      'index',
      'show_select',
      'display_people',
      'display_planets',
      'display_starships',
      'display_home'
      
    ])
  },
  mounted(){
   // this.$store.commit('change_index', 'working');
    console.log(this.show_select)}
})