<template>
  <div>
    <div v-show="emptyPage">
      <ul>
        <li>Your cart is empty now. Let's go shopping.</li>

      </ul>
    </div>
<!--    {{cart}}-->
    <b-card v-for="(items,index) in cart" v-bind:key="index">
      <b-img :src="'http://localhost:3000/'+items.path" class="profile-img" style="max-width: 500px"></b-img>
      <b-card-text>Your item:{{items.item}}</b-card-text>
      <b-card-text>Unit price:{{items.price}}</b-card-text>
      <b-form-group label-cols="4" label-cols-lg="2" label="Choose amount:">
          <b-form-input id="input-4" v-model=items.amount min="1" type = "number" :max=items.maxAmount v-on:blur = "changeAmount(index)" required placeholder="Chose amounts.">

          </b-form-input>
      </b-form-group>
      <b-button @click.prevent="deleteItems(index)">Delete item</b-button>

    </b-card>
    <b-button href="/order">Check out!</b-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
        emptyPage: false,
        cart:[],
        pageData:[],
        email:'',
        form:{
          amount:'',
          email: '',
          path: '',
        }

    }

  },
  mounted() {
    this.getData()
  },
  methods:{
    async getData() {
      this.email = this.$cookies.get('email')
      const url = `/cart?email=${this.email}`
      await this.$axios.get(url).then(res=>{
        console.log(res.data)
        this.cart = res.data
        if(this.cart.length===0){
          this.emptyPage = true

        }

      })
    },


    async changeAmount(index){
      this.form.email = this.$cookies.get('email')
      this.form.amount = this.cart[index].amount
      this.form.path = this.cart[index].path
      alert(this.form.path)

      /**
       * 给form赋值
       * email => cookie
       * amount => cart[index].amount
       * path => cart[index].path
       * 上传后端
       */




      await this.$axios.post('/cart/changeAmount',this.form).then(res=>{
        this.cart = res.data
        console.log(this.cart)
      })
    },

    async deleteItems(index){
      this.form.email = this.$cookies.get('email')
      this.form.path = this.cart[index].path
      let answer = window.confirm("Do you want to remove this item from your shopping cart?")
      if (answer){
        await this.$axios.post('/cart/deleteItems',this.form).then(res=>{
          console.log(res.data)
          this.$router.go(0)
        })
      }

    }


  },




}
</script>

<style scoped>

</style>
