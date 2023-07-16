<template>
  <div class="container">
    <div class="weather-section">
      <h3>Customer Data</h3>
      <div v-if="customerData !== null">
        <p>Customer ID: {{ customerData.mobileNumber }}</p>
        <p>Name: {{ customerData.name }}</p>
        <p>Email: {{ customerData.email }}</p>
      </div>
      <div v-else>
        <p>No customer data available</p>
      </div>
      <div v-if="userData !== null">
        <p>Name: {{ userData }}</p>
      </div>
    </div>
    <form @submit.prevent="submitForm" class="weather-form">
      <div class="form-group">
        <label for="mobileNumber">Mobile Number</label>
        <input type="text" id="mobileNumber" v-model="form.mobileNumber" required class="form-input" placeholder="Enter mobile Number">
      </div>
      <button type="submit" class="btn-submit">Submit</button>
    </form>
    <button @click="getUser" class="btn-submit">Get</button>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        mobileNumber: '',
      },
      customerData: null,
      userData: null
    };
  },
  methods: {
    submitForm() {
      const headers = {
        "Content-Type": "application/json"
      };
      const reqOptions = {
        url: `http://localhost:3000/api/users/${this.form.mobileNumber}`,
        method: "GET",
        headers: headers,
      };
      axios.request(reqOptions)
        .then(response => {
          this.customerData = response.data;
        })
        .catch(error => {
          console.error(error);
          this.customerData = null;
        });
    },
    getUser() {
      const headers = {
        "Content-Type": "application/json"
      };
      const reqOptions = {
        url: `http://localhost:3000/api/users`,
        method: "GET",
        headers: headers,
      };
      axios.request(reqOptions)
        .then(response => {
          this.userData = response.data;
        })
        .catch(error => {
          console.error(error);
          this.userData = null;
        });
    },
  },
};
</script>
<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.weather-section {
  margin-bottom: 2rem;
}
.weather-data {
  text-align: center;
}
.weather-image {
  max-width: 600px;
  margin-top: 1rem;
}
.weather-data-error {
  text-align: center;
  color: rgb(0, 0, 0);
}
.weather-form {
  margin-bottom: 2rem;
}
.form-group {
  margin-bottom: 1rem;
}
.form-input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}
.btn-submit {
  background-color: #212a9c;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.btn-submit:hover {
  background-color: #4e56be;
}
</style>