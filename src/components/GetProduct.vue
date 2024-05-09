<template>
  <div class="container">
    <div class="pokemon-section">
      <h3>Product List:</h3>
      <table class="table" v-if="productsList">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in displayedProductsList" :key="product.id" class="pokemon-item">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button @click="editProduct(product)" class="btn-edit">Edit/Update</button>
              <button @click="deleteProduct(product.id)" class="btn-delete">Delete</button>
              <button @click="copyProductName(product.name)" class="btn-copy">Copy</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="button-container">
        <button @click="getProducts()" class="btn-get-pokemon">Get Products</button>
      </div>
      <div class="form-container" v-if="editMode">
        <h3>Edit Product:</h3>
        <form @submit.prevent="updateProduct">
          <div class="form-group">
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" v-model="editedProduct.name" required>
          </div>
          <div class="form-group">
            <label for="productDescription">Product Description:</label>
            <textarea id="productDescription" v-model="editedProduct.description" required></textarea>
          </div>
          <div class="form-group">
            <label for="productPrice">Product Price:</label>
            <input type="number" id="productPrice" v-model="editedProduct.price" required>
          </div>
          <button type="submit">Update Product</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productsList: null,
      offset: 0,
      limit: 10,
      nextOffset: 0,
      editMode: false,
      editedProduct: {
        id: null,
        name: '',
        description: '',
        price: null
      }
    };
  },
  computed: {
    displayedProductsList() {
      if (this.productsList) {
        return this.productsList.map(product => ({
          id: product._id,
          name: product.prod_name || product.product_name, 
          description: product.prod_desc || product.product_desc, 
          price: product.prod_price || product.product_price 
        }));
      }
      return [];
    },
  },
  methods: {
    getProducts() {
      const apiKey = 'api-key-test';
      const apiUrl = 'https://express-api-mslb.onrender.com/products';

      axios.get(apiUrl, {
        headers: {
          'x-api-key': apiKey
        }
      })
        .then(response => {
          console.log('Response:', response.data);
          this.productsList = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    copyProductName(name) {
      navigator.clipboard.writeText(name)
        .then(() => {
          console.log('Copied to clipboard:', name);
        })
        .catch(error => {
          console.error('Failed to copy to clipboard:', error);
        });
    },
    editProduct(product) {
      this.editMode = true;
      this.editedProduct.id = product.id;
      this.editedProduct.name = product.name;
      this.editedProduct.description = product.description;
      this.editedProduct.price = product.price;
    },
    updateProduct() {
      const apiKey = 'api-key-test';
      const requestId = 'test';
      const apiUrl = `https://express-api-mslb.onrender.com/products/${this.editedProduct.id}`;

      axios.put(apiUrl, this.editedProduct, {
        headers: {
          'x-api-key': apiKey,
          'x-request-id': requestId,
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log('Product updated successfully:', response.data);
          this.getProducts();
          this.editMode = false;
          this.clearEditedProduct();
        })
        .catch(error => {
          console.error('Error updating product:', error);
        });
    },
    deleteProduct(productId) {
      const apiKey = 'api-key-test';
      const requestId = 'test';
      const apiUrl = `https://express-api-mslb.onrender.com/products/${productId}`;

      axios.delete(apiUrl, {
        headers: {
          'x-api-key': apiKey,
          'x-request-id': requestId
        }
      })
        .then(response => {
          console.log('Product deleted successfully:', response.data);

          this.getProducts();
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
    },
    clearEditedProduct() {
      this.editedProduct.id = null;
      this.editedProduct.name = '';
      this.editedProduct.description = '';
      this.editedProduct.price = null;
    }
  },
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.pokemon-section {
  margin-bottom: 2rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #dee2e6;
  background-color: #f8f9fa;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table th {
  font-weight: bold;
  background-color: #151616;
  color: #fff;
  text-align: left;
}

.table tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

.btn-get-pokemon {
  background-color: #151616;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.btn-get-pokemon:hover {
  background-color: #0056b3;
}

.btn-copy {
  background-color: #151616;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-left: 0.5rem;
}

.btn-copy:hover {
  background-color: #3b3b3b;
}

.btn-edit,
.btn-delete {
  background-color: #151616;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 0.5rem;
}

.btn-edit:hover,
.btn-delete:hover {
  background-color: #3b3b3b;
}

.form-container {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

form input[type="text"],
form textarea,
form input[type="number"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
}

form button[type="submit"] {
  background-color: #151616;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

form button[type="submit"]:hover {
  background-color: #3b3b3b;
}
</style>
