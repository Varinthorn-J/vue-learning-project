<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">My learning Website</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li> -->

          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Add your custom CSS styles here */

/* Navbar styles */
.navbar {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.navbar-brand {
  color: #343a40;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-decoration: none;
}

.navbar-nav .nav-item .nav-link {
  color: #343a40;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-nav .nav-item .nav-link:hover {
  color: #007bff;
}

/* Container styles */
.container-fluid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Router view styles */
.router-view {
  padding: 1rem;
}

</style>
