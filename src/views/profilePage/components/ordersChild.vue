<template>
  <div id="box" v-show="dataReady">
    {{orderDetail}}
    <h3>Orders</h3>
    <hr>
    <li v-for="(order, index) in orderData" v-bind:key="index">
      {{order.orderNumber}}
      <br>
      {{order.status}}
      <b-button @click.prevent="showDetail(index, order.orderNumber)" >show more details</b-button>

      <ul v-for="(orders, index2) in orderDetail" v-bind:key="index2" v-show="showOrderChange[index]">
        {{orders.product}}
      </ul>
    </li>
    <b-pagination
        v-model="currentPage"
        :total-rows="this.orderPageData.length"
        :per-page="10"
        @click.native="changePage(currentPage)"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentPage: 1,
      dataReady: false,
      orderPageData: [],
      orderData: [],
      showOrderChange: [false, false, false, false, false, false, false, false, false, false],
      orderDetail: [],
    }
  },

  mounted () {
    this.getData()

  },

  methods: {
     async getData() {
       await this.$axios.post('/profile/orders', {email: this.$cookies.get('email')}).then(res=>{
        /**
         * 去掉相同orderNumber
         */

        if (res.data.length === 0){
          console.log('no data')
        } else {
          this.orderPageData[0] = res.data[0]
          let indexForPage = 1
          for (let i = 0; i < res.data.length; i++){
            if (this.orderPageData[indexForPage -1].orderNumber !== res.data[i].orderNumber){
              this.orderPageData[indexForPage] = res.data[i]
              indexForPage++
            }
          }
          console.log(typeof this.orderPageData)
        }
        /**
         * 赋值给orderData
         */
        let arrayLength
        if (this.orderPageData.length < 10){
          arrayLength = this.orderPageData.length
        } else {
          arrayLength = 10
        }
        for (let j = 0; j < arrayLength; j++){
          this.orderData[j] = this.orderPageData[j]
        }
         this.dataReady = true
      })
    },

    changePage(currentPage){
       this.showOrderChange = [false, false, false, false, false, false, false, false, false, false]
      let showNumber = this.orderPageData.length - (10 * (currentPage - 1))
      if (showNumber > 10){
        showNumber = 10
      }
      this.orderData = []
      for (let i = 0; i < showNumber; i++){
        this.orderData[i] = this.orderPageData[(10 * currentPage) - (10 - i)]
      }
    },

    async showDetail(index, orderNumber) {
      for (let i = 0; i < 10; i++){
        this.$set(this.showOrderChange, i, false)
      }
      await this.$axios.get(`/profile/orderNumber?orderNumber=${orderNumber}`).then(res=>{
        this.orderDetail = res.data
      })
      this.$set(this.showOrderChange, index, !this.showOrderChange[index])
      console.log(this.showOrderChange)
    }


  }


}
</script>

<style scoped>

</style>
