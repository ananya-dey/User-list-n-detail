<template>
<div class="detail container">
  <router-link class="btn btn-lg btn-default pull-right" to="/users">Back to List</router-link>
  <h1 class="page-header">{{user.name}}</h1>
  <p><strong>Username : </strong>{{user.username}}</p>
  <p><strong>Email : </strong>{{user.email}}</p>
  <p><strong>Website : </strong>{{user.website}}</p>
  <p><strong>Company Name : </strong>{{user.company.name}}</p>
  <p><strong>City : </strong>{{user.address.city}}</p>
  <p><strong>Zipcode :</strong>{{user.address.zipcode}}</p>
</div>


</template>

<script>
  export default {
    name: 'detail',
    data () {
      return {
        user: '',
      }
    },
    created: function() {
      this.getUserDetail(this.$route.params.id);
    },
    methods: {
      getUserDetail(id){
        this.$http.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then(response => {
          this.user = response.data;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
