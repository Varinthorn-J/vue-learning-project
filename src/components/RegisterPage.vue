<template>
  <div class="register-form">
    <h2>Register</h2>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" class="form-input">
      </div>
      <div class="form-group">
        <label for="surname">Surname:</label>
        <input type="text" id="surname" v-model="form.surname" class="form-input">
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="form.address" class="form-input">
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="form.phone" class="form-input">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" class="form-input">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="form.password" class="form-input">
      </div>
      <button type="submit" @click.prevent="submitForm" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        surname: '',
        address: '',
        phone: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      // ทำการ Submit ข้อมูลไปยัง Backend หรือเก็บข้อมูลไว้ใน Local Storage ตามต้องการ
      console.log(this.form)
    }
  }
}
</script>

<style>
.register-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

.form-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  background-color: #151616;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #4d4e50;
}
</style>
