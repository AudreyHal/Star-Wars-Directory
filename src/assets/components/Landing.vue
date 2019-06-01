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

    <!-- <div class="elevation-1">
     <div class="row">
       <div class="col-xs-12 col-12 image-container">
         <img src="../images/landing.jpeg" class="landing_image" alt="star-wars-logo" >
       </div> -->
       <!-- <div class="col-xs-12 col-sm-6 col-lg-7 data-container2">
         <div class="option_head"> Which would you like to view</div>
         <div class="option-container">
         <div class="options">People</div>
         <div class="options">Planets</div>
         <div class="options">Starships</div>
         </div>
       </div> -->
        
        <!-- <div>
         <div class="row"> 
          <div class="col-xs-12 col-sm-12 col-lg-6">
            <span class="tagline2">Height</span>
            <p class="selected_p2">77</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-lg-6">
            <span class="tagline2">Mass</span>
            <p class="selected_p2">171</p>
          </div>
         </div>
         <div class="row"> 
          <div class="col-xs-12 col-sm-12 col-lg-6">
            <span class="tagline2">Hair Color</span>
            <p class="selected_p2">Blond</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-lg-6">
            <span class="tagline2">Eye Color</span>
            <p class="selected_p2">Red</p>
          </div>
         </div>
        </div>  -->


      
    <!-- </div> -->
   <!-- </div>  -->
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
      console.log("display people: "+ this.display_people)

    },
    showPlanets: function(event){
      this.$store.commit('change_display_planets', true);
      console.log("display people: "+ this.display_planets)

    },
    showStarships: function(event){
      this.$store.commit('change_display_starships', true);
      console.log("display starships: "+ this.display_starships)

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
