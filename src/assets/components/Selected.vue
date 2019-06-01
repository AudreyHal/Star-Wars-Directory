<template>
  <div class="selected">
      <div class="row">
       <div class="col-xs-12 col-sm-12 col-lg-12">
         <img src="../images/logo.png" class="logo" alt="star-wars-logo" width="130" height="100">
       </div>
        
    </div>
    <div class="elevation-2">
     <div class="row">
       <div class="col-xs-12 col-sm-12 col-lg-12 data-container">
        <div v-if="type === 'people'">
          <h1 class="selected_name sh1">{{row_data[0].name}}</h1>
          <div class="details">
            <span class="tagline">Gender</span>
            <p class="selected_p">{{row_data[0].gender}}</p>
          </div>
          <div class="details">
            <span class="tagline">Birth Year</span>
            <p class="selected_p">{{row_data[0].birth_year}}</p>
          </div>
          <div class="details">
            <span class="tagline">Skin Color</span>
            <p class="selected_p">{{row_data[0].skin_color}}</p>
          </div>
            <div class="details">
            <span class="tagline">Gender</span>
            <p class="selected_p">{{row_data[0].gender}}</p>
          </div>
          <div class="details">
            <span class="tagline">Hair Color</span>
            <p class="selected_p">{{row_data[0].hair_color}}</p>
          </div>
          <div class="details">
            <span class="tagline">Eye Color</span>
            <p class="selected_p">{{row_data[0].eye_color}}</p>
          </div>
         </div>
         <div v-if="type === 'planets'">
          <h1 class="selected_name">{{row_data[0].name}}</h1>
          <div class="details">
            <span class="tagline">Climate</span>
            <p class="selected_p">{{row_data[0].climate}}</p>
          </div>
          <div class="details">
            <span class="tagline">Gravity</span>
            <p class="selected_p">{{row_data[0].gravity}}</p>
          </div>
          <div class="details">
            <span class="tagline">Terrain</span>
            <p class="selected_p">{{row_data[0].terrain}}</p>
          </div>
            <div class="details">
            <span class="tagline">Population</span>
            <p class="selected_p">{{row_data[0].population}}</p>
          </div>
          <div class="details">
            <span class="tagline">Surface Water</span>
            <p class="selected_p">{{row_data[0].surface_water}}</p>
          </div>
          <div class="details">
            <span class="tagline">Rotation Period</span>
            <p class="selected_p">{{row_data[0].rotation_period}}</p>
          </div>
          <div class="details">
            <span class="tagline">Orbital Period</span>
            <p class="selected_p">{{row_data[0].orbital_period}}</p>
          </div>
         </div>
          <div v-if="type === 'starships'">
          <h1 class="selected_name">{{row_data[0].name}}</h1>
          <div class="details">
            <span class="tagline">Model</span>
            <p class="selected_p">{{row_data[0].model}}</p>
          </div>
          <div class="details">
            <span class="tagline">Manufacturer</span>
            <p class="selected_p">{{row_data[0].manufacturer}}</p>
          </div>
          <div class="details">
            <span class="tagline">Cost in Credits</span>
            <p class="selected_p">{{row_data[0].cost_in_credits}}</p>
          </div>
            <div class="details">
            <span class="tagline">Crew</Span>
            <p class="selected_p">{{row_data[0].crew}}</p>
          </div>
          <div class="details">
            <span class="tagline">Max Atmosphering Speed</span>
            <p class="selected_p">{{row_data[0].max_atmosphering_speed}}</p>
          </div>
          <div class="details">
            <span class="tagline">Passengers</span>
            <p class="selected_p">{{row_data[0].passengers}}</p>
          </div>
          <div class="details">
            <span class="tagline">Cargo Capacity</span>
            <p class="selected_p">{{row_data[0].cargo_capacity}}</p>
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
  mounted(){
    console.log(this.row_data[0].name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
