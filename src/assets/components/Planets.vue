<template>
 
    <div>
      <div class="row">
       <div class="col-xs-12 col-sm-12 col-lg-12">
        <img src="../images/logo.png" class="logo" alt="star-wars-logo" width="130" height="100">
       </div>
      </div>
      <div class="row second_row">
       <div class="col-xs-12 col-sm-6 col-lg-5">
        <div class="back" v-on:click="goHome"><v-icon dark left>arrow_back</v-icon> Take me home</div>
       </div>
       <div class="col-xs-12 col-sm-6 col-lg-7">
       <v-text-field
        v-model="search"
        label="Search"
        placeholder="Search Planets..."
        single-line
        hide-details
        class="searchbox"
       ></v-text-field>
       </div>
      </div>
           
       <v-data-table
        :headers="headers"
        :items="planets"
        :search="search"
        hide-actions
       :pagination.sync="pagination"
        class="elevation-1"
       >
       
        <template v-slot:items="props">
         <tr @click="showAlert(props.item)">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.rotation_period}}</td>
          <td class="text-xs-left">{{ props.item.population }}</td>
         </tr>
        </template>
      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination> 
      </div>
     </div>
    
 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Planets',
  
 data () {
    return {
      search: '',
      pagination: { rowsPerPage: 7,},
      selected: [],
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Rotation Period', value: 'rotation_period' },
        { text: 'Population', value: 'population' }
            
      ],
        planets: [],

    }
  },
  methods: {   
    showAlert(a){
      if (event.target.classList.contains('btn__content')) return;
      var axios = require('axios');
      var search_data;
      axios({  method: 'get', url: 'https://swapi.co/api/planets/?search='+a.name   })
      .then(response => (this.search_data=response.data.results,   this.$store.commit('change_row_data', response.data.results), this.$store.commit('change_type', 'planets'), this.$store.commit('change_show_select', true), this.$store.commit('change_display_planets', false)))
      var e= this.planets.indexOf(a);
      },
    goHome: function(event){
      this.$store.commit('change_display_people', false);
      this.$store.commit('change_display_planets', false);
      this.$store.commit('change_display_starships', false);
      this.$store.commit('change_display_home', true);
    }
    },
  computed: {
     ...mapGetters([
      'employee_data',
      'clicked_employee',
      'index',
      'row_data',
      'type'
      
      
    ]),
   
    pages () {
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },

  created () {
    for (var i = 1; i < 8; i++) {
    var swapi_url='https://swapi.co/api/planets/?page=' + i;
    var axios = require('axios');
    axios({  method: 'get', url: swapi_url   })
    .then(response => (this.planets= this.planets.concat( response.data.results)) )
    } 
    this.pagination.totalItems=61;
    }
  }
</script>


<style >

</style>
