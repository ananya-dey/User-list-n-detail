<template>
  <div class="container text-center home">
    <h1>User List</h1>
    <hr/>
    <div class="list">
      <table class="table table-striped">
      <thead>
        <tr>
          <td>ID</td>
          <td>Avatar</td>
          <td>Username</td>
          <td>JobTitle</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{user.id}}</td>
          <td><img :src="user.avatar"></td>
          <td>{{user.userName}}</td>
          <td>{{user.jobTitle}}</td>
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
        this.$http.get('/static/data.json')
          .then(response => {
            this.users = response.data;
            console.log(this.users);
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
