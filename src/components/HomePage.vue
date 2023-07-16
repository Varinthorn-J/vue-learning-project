<template>
  <div class="home">
    <h3>menu</h3>
    <div class="nav-container">
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" to="/pokemon">Pokemons</router-link>
        </li>
      </ul>
      <!-- <ul>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
      </ul>
      <ul>

        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
      </ul> -->
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" to="/weather ">Weather</router-link>
        </li>
      </ul>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" to="/getcustomer ">Get Customer</router-link>
        </li>
      </ul>


    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.nav-container {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.nav-item {
  margin: 0 10px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 5px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #007bff;
}
</style>
