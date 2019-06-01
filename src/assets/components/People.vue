<template>
 
    <div>
      <div class="row">
       <div class="col-xs-12 col-sm-12 col-lg-12">
        <img src="../images/logo.png" class="logo" alt="star-wars-logo" width="130" height="100">
       </div>
      </div>
      <div class="row second_row">
       <div class="col-xs-12 col-sm-6 col-lg-5">
       <div class="back"  v-on:click="goHome"><v-icon dark left>arrow_back</v-icon> Take me home</div>
       </div>
       <div class="col-xs-12 col-sm-6 col-lg-7">
       <v-text-field
        v-model="search"
        label="Search"
        placeholder="Search People..."
        single-line
        hide-details
        class="searchbox"
       ></v-text-field>
       </div>
      </div>
       <v-select 
        label="Gender" 
        :items="['male', 'female', 'robot']"
        placeholder="Filter by Gender..."
        v-model="gender"
        class="genderbox"
       ></v-select> 
       
       <v-data-table
        :headers="headers"
        :items="filteredItems"
        :search="search"
        hide-actions
       :pagination.sync="pagination"
        class="elevation-1"
       >
     
        <template v-slot:items="props">
         <tr @click="showAlert(props.item)">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.birth_year }}</td>
          <td class="text-xs-left">{{ props.item.gender }}</td>
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
  name: 'People',
 
  data () {
    return {
      gender:'all',
      search: '',
      pagination: { rowsPerPage: 10,},
      selected: [],
      headers: [
        {
          text: 'Full Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Birth Year', value: 'birth_year' },
        { text: 'Gender', value: 'gender' }
            
      ],
        people: [],
    }
  },
  methods: {   
    showAlert(a){
     if (event.target.classList.contains('btn__content')) return;
     var axios = require('axios');
     var search_data;
     axios({  method: 'get', url: 'https://swapi.co/api/people/?search='+a.name   })
    .then(response => (this.search_data=response.data.results,   this.$store.commit('change_row_data', response.data.results), this.$store.commit('change_type', 'people'), this.$store.commit('change_show_select', true), this.$store.commit('change_display_people', false)))
     
    
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
      'show_select',
      'type'
        
    ]),

    filteredItems(){
      if (this.gender !== "all"){ return this.people.filter((i) => {
        if(this.gender == "robot"){ return !this.gender || (i.gender === "n/a"); }
        else return !this.gender || (i.gender === this.gender);})}
      else return this.people
       
    },
    pages () {
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },
    created () {
      for (var i = 1; i < 10; i++) {
      var swapi_url='https://swapi.co/api/people/?page=' + i;
      var axios = require('axios');
      axios({  method: 'get', url: swapi_url   })
      .then(response => (this.people= this.people.concat( response.data.results)) )
      } 
      this.pagination.totalItems=87;
      }
    }
</script>


<style >

</style>
