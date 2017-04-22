<template>
<div class="detail container">
  <router-link class="btn btn-lg btn-default pull-right" to="/">Back to List</router-link>
  <h1 class="page-header">{{user.userName}}</h1>
  <p><strong>Avatar : </strong><img :src="user.avatar"></p>
  <p><strong>Email : </strong>{{user.email}}</p>
  <p><strong>Gender : </strong>{{user.gender}}</p>
  <p><strong>Address : </strong>{{user.address}}</p>
  <p><strong>Company : </strong>{{user.company}}</p>
  <p><strong>Phone :</strong>{{user.phone}}</p>
  <p><strong>Job Title :</strong>{{user.jobTitle}}</p>
  <p><strong>Country :</strong>{{user.country}}</p>
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
        this.$http.get('/static/data.json/'+id)
          .then(response => {
            this.user = response.data;
            console.log(this.user);
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
