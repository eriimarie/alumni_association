<template>
<div>
  <p>You have ordered:</p>
  <ul v-for="(order,index) in total" v-bind:key="index">
      <p>{{order.item}}</p>
  </ul>
  <p>Your total is: {{this.newTotal}}"</p>
  <b-button href="/payment">Confirm</b-button>
  <b-button href="/cart">Cancel</b-button>



</div>
</template>

<script>
export default {
  data(){
    return{

      total:[],
      email:'',
      price:[],
      amount:[],
      newTotal: 0,

      form:{
        email:'',
        item:'',
      }

    }
  },
  mounted() {
    // this.getData()
    this.countTotal()
  },
  methods:{
    // async getData(){
    //   this.email = this.$cookies.get('email')
    //   const url = `/cart?email=${this.email}`
    //   await this.$axios.get(url).then(res=>{
    //     console.log(res.data)
    //     this.cart = res.data
    //
    //   })
    // },
    async countTotal(){
      this.email = this.$cookies.get('email')
      const url = `/cart?email=${this.email}`
      await this.$axios.get(url).then(res=>{
        console.log(res.data)
        this.total = res.data
        console.log(this.total)
        this.price = res.data.price
        this.amount = res.data.amount

      for(let i = 0 ; i < this.total.length ; i++){
        this.newTotal += this.total[i].amount * this.total[i].price
        console.log(this.total)

      }


      })
    }
  }
}
</script>

<style scoped>

</style>
