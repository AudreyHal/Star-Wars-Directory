<template>
  <div class="selected">
      <div class="row">
       <div class="col-xs-12 col-sm-6 col-lg-5">
         <img src="../images/logo.png" class="logo" alt="star-wars-logo" width="130" height="100">
       </div>
       <div class="col-xs-12 col-sm-6 col-lg-7">
        <h1></h1>
      </div>   
    </div>
    <div class="elevation-1">
     <div class="row">
       <div class="col-xs-12 col-sm-6 col-lg-5">
         <img src="../images/person.png" class="landing_image" alt="star-wars-logo" >
       </div>
       <div class="col-xs-12 col-sm-6 col-lg-7 data-container">
        <div v-if="type === 'people'">
          <h1 class="selected_name">LUKE SKYWALKER</h1>
          <div class="details">
            <span class="tagline">Gender</span>
            <p class="selected_p">Male</p>
          </div>
          <div class="details">
            <span class="tagline">Birth Year</span>
            <p class="selected_p">1BBY</p>
          </div>
          <div class="details">
            <span class="tagline">Skin Color</span>
            <p class="selected_p">Blond</p>
          </div>
            <div class="details">
            <span class="tagline">Gender</span>
            <p class="selected_p">Male</p>
          </div>
          <div class="details">
            <span class="tagline">Birth Year</span>
            <p class="selected_p">1BBY</p>
          </div>
          <div class="details">
            <span class="tagline">Skin Color</span>
            <p class="selected_p">Blond</p>
          </div>
         </div>
         <div v-if="type === 'planets'">
          <h1 class="selected_name">Alderaan</h1>
          <div class="details">
            <span class="tagline">Climate</span>
            <p class="selected_p">Male</p>
          </div>
          <div class="details">
            <span class="tagline">Gravity</span>
            <p class="selected_p">1BBY</p>
          </div>
          <div class="details">
            <span class="tagline">Terrain</span>
            <p class="selected_p">Blond</p>
          </div>
            <div class="details">
            <span class="tagline">Population</span>
            <p class="selected_p">Male</p>
          </div>
          <div class="details">
            <span class="tagline">Surface Water</span>
            <p class="selected_p">1BBY</p>
          </div>
          <div class="details">
            <span class="tagline">Rotation Period</span>
            <p class="selected_p">Blond</p>
          </div>
          <div class="details">
            <span class="tagline">Orbital Period</span>
            <p class="selected_p">Blond</p>
          </div>
         </div>
          <div v-if="type === 'starships'">
          <h1 class="selected_name">Executor</h1>
          <div class="details">
            <span class="tagline">Model</span>
            <p class="selected_p">Male</p>
          </div>
          <div class="details">
            <span class="tagline">Manufacturer</span>
            <p class="selected_p">1BBY</p>
          </div>
          <div class="details">
            <span class="tagline">Cost in Credits</span>
            <p class="selected_p">Blond</p>
          </div>
            <div class="details">
            <span class="tagline">Crew</Span>
            <p class="selected_p">Male</p>
          </div>
          <div class="details">
            <span class="tagline">Max Atmosphering Speed</span>
            <p class="selected_p">1BBY</p>
          </div>
          <div class="details">
            <span class="tagline">Passengers</span>
            <p class="selected_p">Blond</p>
          </div>
          <div class="details">
            <span class="tagline">Cargo_capacity</span>
            <p class="selected_p">Blond</p>
          </div>
         </div>
        
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


      </div>   
     </div> 
    </div>
  </div> 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Selected',
  data () {
    return {
      msg: ''
    }
  },
   computed: {

    ...mapGetters([
      'employee_data',
      'clicked_employee',
      'index',
      'row_data',
      'type'
      
      
    ])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
