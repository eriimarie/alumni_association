<template>
  <div>
    <b-card>
      <b-img :src="'http://localhost:3000/'+product.path" class="profile-img" style="max-width: 500px"></b-img>
      <b-card-text>Product name: {{product.name}}</b-card-text>
      <b-card-text>Description:{{product.description}}</b-card-text>
      <b-card-text>Unit price: {{product.price}}</b-card-text>
      <b-card-text>Available amount: {{product.amount}}</b-card-text>
    </b-card>
    <b-form @submit.prevent="onSubmit">
    <b-form-group label-cols="4" label-cols-lg="2" label="Choose amount:">
      <b-form-input id="amount" v-model="form.amount" type="number" min="1" :max="this.form.maxAmount" placeholder="Enter how many do you want?"
                    required></b-form-input>
    </b-form-group>
    <b-button variant="primary" type="submit">Add to cart</b-button>
    </b-form>
  </div>

</template>

<script>

export default {
  data(){
    return{
      product:[],
      form:{
        amount:'',
        item:'',
        path:'',
        email:'',
        price:'',
        maxAmount:''
      }
    }
  },

  mounted() {
    this.getData()
  },

  methods:{
    async getData() {
      const newUrl = `/shopping/detail?id=${this.$route.query.id}`
      console.log(this.$route.query.id)
      console.log(newUrl)
      await this.$axios.get(newUrl).then(res=> {
        this.product = res.data
        this.form.item = res.data.name
        this.form.path = res.data.path
        this.form.email = this.$cookies.get('email')
        this.form.price = res.data.price
        this.form.maxAmount = res.data.amount
      })
    },
    async onSubmit() {
      console.log(this.form)
      await this.$axios.post('/cart/addToCart', this.form).then(res=>{
        alert(res.data)
      }).catch(function (err){
        alert(err)
      })
    },
  }

}
</script>

<style scoped>

</style>
