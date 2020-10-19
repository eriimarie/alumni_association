<template>
  <div id="box">
    <div>
      <b-form>
        <h4>Add product</h4>
        <span>Please make sure the product is not listed</span>
        <hr>
        <b-form-group label-cols="4" label-cols-lg="2" label="Product name:">
          <b-form-input v-model="addProduct.name" type="text" required placeholder="Enter product name"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="Product price:">
          <b-form-input v-model="addProduct.price" type="number" required placeholder="Enter product price"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="Product size:">
          <b-form-input v-model="addProduct.size" type="number" required placeholder="Enter product size"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="Product amount:">
          <b-form-input v-model="addProduct.amount" type="number" required placeholder="Enter product amount"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="Product description:">
          <b-form-textarea rows="3" v-model="addProduct.description" type="text" required placeholder="Enter product description"></b-form-textarea>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="Product category:">
          <b-form-input v-model="addProduct.category" type="text" required placeholder="Enter product description"></b-form-input>
        </b-form-group>
        <b-button type="submit">Add</b-button>
      </b-form>
    </div>

    <div>
      <h4>Change product</h4>
      <hr>
      <b-form>
        <b-form-group label-cols="4" label-cols-lg="2" label="Product name:">
          <b-form-input v-model="searchProduct" type="text" required placeholder="Enter product name"></b-form-input>
        </b-form-group>
        <b-button type="submit">Search</b-button>
      </b-form>

      <div>
        <li>{{this.findProduct.name}}</li>
        <li>{{this.findProduct.price}}</li>
        <li>{{this.findProduct.size}}</li>
        <b-button>delete</b-button>
        <b-button>change</b-button>
        <b-form>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product name:">
            <b-form-input v-model="addProduct.name" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product price:">
            <b-form-input v-model="addProduct.price" type="number" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product size:">
            <b-form-input v-model="addProduct.size" type="number" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product amount:">
            <b-form-input v-model="addProduct.amount" type="number" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product description:">
            <b-form-textarea rows="3" v-model="addProduct.description" type="text" required></b-form-textarea>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product category:">
            <b-form-input v-model="addProduct.category" type="text" required></b-form-input>
          </b-form-group>
          <b-button type="submit">Add</b-button>
        </b-form>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return{
      searchProduct: '',

      addProduct: {
        name: '',
        price: '',
        size: '',
        amount: '',
        description: '',
        category: '',
      },

      findProduct: {
        name: '',
        price: '',
        size: '',
        amount: '',
        description: '',
        category: '',
      }
    }
  },

  methods: {

  },
}
</script>

<style scoped>

</style>
