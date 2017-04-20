<template>
  <div class="container text-center home">
    <h1>User List</h1>
    <hr/>
    <div class="list">
      <table class="table table-striped">
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>City</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{user.id}}</td>
          <td>{{user.username}}</td>
          <td>{{user.address.city}}</td>
          <td><router-link class="btn btn-lg btn-success" :to="'/user/' + user.id">View Details</router-link></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'list',
    data(){
      return {
        users: [],
        user: '',
      };
    },
    created: function() {
      this.getUserList();
    },
    methods: {
      getUserList(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.users = response.data;
        });
      }
    }
  }
</script>

<style scoped>
  thead td{
    font-weight: bold;
  }
</style>
