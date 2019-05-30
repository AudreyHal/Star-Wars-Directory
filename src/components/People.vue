<template>
 
    <div>
      <div class="row">
       <div class="col-xs-12 col-sm-6 col-lg-5">
       <img src="../assets/images/logo.png" class="logo" alt="star-wars-logo" width="130" height="100">
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
        desserts: [],
        //search_data:{}

      //  [ {
      //     name: 'Frozen Yogurt',
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     iron: '1%'
      //   },
      //   {
      //     name: 'Ice cream sandwich',
      //     calories: 237,
      //     fat: 9.0,
      //     carbs: 37,
      //     protein: 4.3,
      //     iron: '1%'
      //   },
      //   {
      //     name: 'Eclair',
      //     calories: 262,
      //     fat: 16.0,
      //     carbs: 23,
      //     protein: 6.0,
      //     iron: '7%'
      //   },
      //   {
      //     name: 'Cupcake',
      //     calories: 305,
      //     fat: 3.7,
      //     carbs: 67,
      //     protein: 4.3,
      //     iron: '8%'
      //   },
      //   {
      //     name: 'Gingerbread',
      //     calories: 356,
      //     fat: 16.0,
      //     carbs: 49,
      //     protein: 3.9,
      //     iron: '16%'
      //   },
      //   {
      //     name: 'Jelly bean',
      //     calories: 375,
      //     fat: 0.0,
      //     carbs: 94,
      //     protein: 0.0,
      //     iron: '0%'
      //   },
      //   {
      //     name: 'Lollipop',
      //     calories: 392,
      //     fat: 0.2,
      //     carbs: 98,
      //     protein: 0,
      //     iron: '2%'
      //   },
      //   {
      //     name: 'Honeycomb',
      //     calories: 408,
      //     fat: 3.2,
      //     carbs: 87,
      //     protein: 6.5,
      //     iron: '45%'
      //   },
      //   {
      //     name: 'Donut',
      //     calories: 452,
      //     fat: 25.0,
      //     carbs: 51,
      //     protein: 4.9,
      //     iron: '22%'
      //   },
      //   {
      //     name: 'KitKat',
      //     calories: 518,
      //     fat: 26.0,
      //     carbs: 65,
      //     protein: 7,
      //     iron: '6%'
      //   }
      // ]
    }
  },
  methods: {   
     showAlert(a){
     if (event.target.classList.contains('btn__content')) return;
     alert('Alert! \n' + a);
     
     var axios = require('axios');
     var search_data;
     axios({  method: 'get', url: 'https://swapi.co/api/people/?search='+a.name   })
    .then(response => (this.search_data=response.data.results, console.log(this.search_data)))
     
     var e= this.desserts.indexOf(a);
    
    }
    },
  computed: {
  

    filteredItems(){
      if (this.gender !== "all"){
       return this.desserts.filter((i) => {
        if(this.gender == "robot"){ return !this.gender || (i.gender === "n/a"); }
         else return !this.gender || (i.gender === this.gender);})}
        else return this.desserts
       
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
 .then(response => (this.desserts= this.desserts.concat( response.data.results)) )
} 
this.pagination.totalItems=87;
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
