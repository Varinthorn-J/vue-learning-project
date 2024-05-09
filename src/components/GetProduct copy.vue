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
              <button @click="editProduct(product.id)" class="btn-edit">Edit/Update</button>
              <button @click="deleteProduct(product.id)" class="btn-delete">Delete</button>
              <button @click="copyProductName(product.name)" class="btn-copy">Copy</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="button-container">
        <button @click="getProducts()" class="btn-get-pokemon">Get Products</button>
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
    };
  },
  computed: {
    displayedProductsList() {
      if (this.productsList) {
        return this.productsList;
      }
      return [];
    },
  },
  methods: {
    getProducts() {
      const apiKey = 'api-key-test';
      const requestId = 'test';
      const apiUrl = 'https://express-api-mslb.onrender.com/products';

      axios.get(apiUrl, {
        headers: {
          'x-api-key': apiKey,
          'x-request-id': requestId
        }
      })
      .then(response => {
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
    editProduct(productId) {
  const apiKey = 'api-key-test';
  const requestId = 'test';
  const apiUrl = `https://express-api-mslb.onrender.com/products/${productId}`;

  axios.get(apiUrl, {
    headers: {
      'x-api-key': apiKey,
      'x-request-id': requestId
    }
  })
  .then(response => {
    const productData = response.data;

    productData.name = 'New Product Name';
    productData.description = 'New Product Description';
    productData.price = 99.99;

    axios.put(apiUrl, productData, {
      headers: {
        'x-api-key': apiKey,
        'x-request-id': requestId,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Product updated successfully:', response.data);
      this.getProducts();
    })
    .catch(error => {
      console.error('Error updating product:', error);
    });
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
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
</style>
