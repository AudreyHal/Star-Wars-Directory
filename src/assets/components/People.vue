<template>
 
    <div>
      <div class="row">
       <div class="col-xs-12 col-sm-6 col-lg-5">
       <img src="../images/logo.png" class="logo" alt="star-wars-logo" width="130" height="100">
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
      <!-- <v-select 
        label="Gender" 
        :items="['male', 'female', 'robot']"
        v-model="gender"
       ></v-select> -->
       
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
          <td class="text-xs-center">{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.birth_year }}</td>
          <td class="text-xs-center">{{ props.item.gender }}</td>
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
  // data () {
  //   return {
  //    info:[]
  //   }
  // },
  //   

data () {
    return {
      gender:'all',
      search: '',
      pagination: { rowsPerPage: 11,},
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
     alert('Alert! \n' + a);
     
     var axios = require('axios');
     var search_data;
     axios({  method: 'get', url: 'https://swapi.co/api/people/?search='+a.name   })
    .then(response => (this.search_data=response.data.results,   this.$store.commit('row_data', response.data.results),this.$store.commit('show_select', true),this.$store.commit('type', planets)  ,console.log(this.search_data)))
     
     var e= this.people.indexOf(a);
    
    }
    },
  computed: {
     ...mapGetters([
      'employee_data',
      'clicked_employee',
      'index',
      'row_data',
      'show_select'
      
      
    ]),

    filteredItems(){
      if (this.gender !== "all"){
       return this.people.filter((i) => {
        if(this.gender == "robot"){ return !this.gender || (i.gender === "n/a"); }
         else return !this.gender || (i.gender === this.gender);})}
        else return this.people
       
    },
    pages () {
      // if (this.pagination.rowsPerPage == null ||
      //   this.pagination.totalItems == null
      // ) return 0

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
