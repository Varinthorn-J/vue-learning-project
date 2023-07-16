<template>
  <div class="container">
    <div class="weather-section">
      <h3>Current weather data</h3>
      <div class="weather-data" v-if="weatherData !== null">
        <!-- <h1>{{ weatherData.zip }}</h1> -->
        <h1>{{ weatherData.name }}</h1>
        <img :src="getWeatherIconUrl(weatherData.weather[0].icon)" :alt="weatherData.weather[0].description"
          class="weather-image">
        <p>{{ convertToCelsius(weatherData.main.temp) }} °C</p>
        <p>{{ weatherData.weather[0].description }}</p>
      </div>
      <div class="weather-data-error" v-else>
        <p>{{ weatherDataError }}</p>
      </div>
    </div>
    <form @submit.prevent="submitForm" class="weather-form">
      <div class="form-group">
        <label for="zip">zip code thailand</label>
        <input type="text" id="zip" v-model="form.zip" required class="form-input" placeholder="Enter zip code">
      </div>
      <button type="submit" class="btn-submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        zip: '',
      },
      weatherData: null,
      weatherDataError: '',
    };
  },
  methods: {
    submitForm() {
      const zip = this.form.zip;
      const apiKey = '833ee0a65be05fe4d5475435c4869744';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},th&appid=${apiKey}`;

      axios.get(apiUrl)
        .then(response => {
          this.weatherData = response.data;
        })
        .catch(error => {
          console.error(error);
          this.weatherDataError = 'city not found';
        });
    },
    getWeatherIconUrl(iconCode) {
      return `https://openweathermap.org/img/wn/${iconCode}.png`;
    },
    convertToCelsius(tempInKelvin) {
      return (tempInKelvin - 273.15).toFixed(1);
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
