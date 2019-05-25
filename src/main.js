// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
var axios = require('axios');
require('./assets/css/main.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      info: null,
      temp: null,
      mesage:"yhyy",
      date: null,
      hours: null,
      results:null,
      time:null,  
      day1temp:null,
      todayNumberInWeek :new Date().getDay(),
      days :['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
     

     
  
    }
  },
  mounted () {
    axios
      .get('http://api.openweathermap.org/data/2.5/forecast?q=London&appid=770fbbdbd0524198c582803866462505' )
      .then(
        
        response => (
  
        this.results=response.data.list,
      this.temp = response.data.list[0].dt,
      this.day1temp = response.data.list[0].main.temp,
      this.date = new Date(response.data.list[0].dt_txt).getDay()
    ))
  },
  computed:{
convert : function(){
this.time= this.results
return this.time},

day1 : function(){


    const date = new Date().getDay()

console.log(this.date - 1)
return(this.days[this.date-1])
},



day2 : function(){
  console.log(this.date + 1)
 return(this.days[this.date +1])
}

  }
})