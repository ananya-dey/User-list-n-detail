<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">First Routing App</router-link>
      </div>
      <ul class="nav navbar-nav">
        <li>
            <router-link to="/" class="navbar-brand"> Home </router-link>
        </li>
        <li>
          <router-link to="/users" class="navbar-brand"> User List </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default{
    name: 'navbar',
  }
</script>

<style scoped>
  .navbar{
    color: #fff;
  }
  li{
    width: auto;
    padding: 0 20px;
    text-align: center;
  }
  li:hover{
    background-color: #a0a0a0;
    color: #fff;
  }
</style>
