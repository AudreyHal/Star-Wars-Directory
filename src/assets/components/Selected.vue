<template>
  <div class="selected">
      <div class="row">
       <div class="col-xs-12 col-sm-6 col-lg-5">
         <img src="../images/logo.png" class="logo" alt="star-wars-logo" width="130" height="100">
       </div>
       <div class="col-xs-12 col-sm-6 col-lg-7">
        <h1>llllllllllll</h1>
      </div>   
    </div>
    <div class="elevation-1">
     <div class="row">
       <div class="col-xs-12 col-sm-6 col-lg-5">
         <img src="../images/logo.png" class="logo" alt="star-wars-logo" width="130" height="100">
       </div>
       <div class="col-xs-12 col-sm-6 col-lg-7 data-container">
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
      'row_data'
      
      
    ])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
