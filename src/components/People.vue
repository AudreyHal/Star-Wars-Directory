<template>
<div>

 <h1>{{info}}</h1>
 </div>
</template>

<script>
export default {
  name: 'People',
  data () {
    return {
     info:[]
    }
  },
    mounted () {
    var axios = require('axios');
    axios({  method: 'get', url: 'https://swapi.co/api/people',   })
      .then(response => (this.info = response.data.results[1])  )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
