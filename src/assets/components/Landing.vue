<template>
  <div class="selected">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-lg-12 ">
         <img src="../images/logo.png" class="logo" alt="star-wars-logo" width="130" height="100">
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-lg-6 large-col1">
        <h1 class="title_text">Explore</h1>
        <h1 class="title_text">the galaxy</h1>
        <p class="tag_text">...not so far away</p>
        <div class="row nav-container">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 nav-links"><span class="nav-link" v-on:click="showPeople">People</span></div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 nav-links"><span class="nav-link" v-on:click="showPlanets">Planets</span></div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 nav-links"><span class="nav-link" v-on:click="showStarships">Starships</span></div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-lg-6">
      </div>
    </div>
  </div> 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Landing',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    methods:{
    showPeople: function(event){
      this.$store.commit('change_display_people', true);
    },
    showPlanets: function(event){
      this.$store.commit('change_display_planets', true);
    },
    showStarships: function(event){
      this.$store.commit('change_display_starships', true);
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
  }
}
</script>


<style >

</style>
