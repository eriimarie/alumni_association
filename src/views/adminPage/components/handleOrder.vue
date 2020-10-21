<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab no-body title="Pending">
          {{pendingData}}
          <li v-for="(pending, index) in pendingData" v-bind:key="index">
            {{pending.orderNumber}}
            <br>
            {{pending.email}}
            <button @click.prevent="trackingButton(index, pending.orderNumber)">add tracking</button>
            <button @click.prevent="deleteOrder(pending.orderNumber)">cancel</button>
            <b-form @submit.prevent="addTracking()" v-show="showPendingChange[index]">
              <b-form-group  label-cols="4" label-cols-lg="2" label="tracking:">
                <b-form-input v-model="addTrackingForm.tracking" type="text" required placeholder="Enter tracking number"></b-form-input>
              </b-form-group>
              <b-button type="submit">Add</b-button>
            </b-form>
          </li>
          <b-pagination
              v-model="currentPendingPage"
              :total-rows="pendingRows"
              :per-page="10"
              @click.native="changePendingPage(currentPendingPage)"
          ></b-pagination>
        </b-tab>

        <b-tab no-body title="Shipping">
          <li v-for="(shipping, index) in shippingData" v-bind:key="index">
            {{shipping.orderNumber}}
            <br>
            {{shipping.email}}
            <button @click.prevent="delivered(shipping.orderNumber)">delivered</button>
          </li>
          <b-pagination
              v-model="currentShippingPage"
              :total-rows="shippingRows"
              :per-page="10"
              @click.native="changeShippingPage(currentShippingPage)"
          ></b-pagination>
        </b-tab>

        <b-tab no-body title="Delivered">
          <li v-for="(delivered, index) in deliveredData" v-bind:key="index">
            {{delivered.orderNumber}}
            <br>
            {{delivered.email}}
          </li>

          <b-pagination
              v-model="currentDeliveredPage"
              :total-rows="deliveredRows"
              :per-page="10"
              @click.native="changeDeliveredPage(currentDeliveredPage)"
          ></b-pagination>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
/**
 * 排序：类别-状态，
 * 功能：添加tracking，修改状态，修改地址信息，根据tracking查找
 */
export default {
  data() {
    return{
      currentPendingPage: 1,
      currentShippingPage: 1,
      currentDeliveredPage: 1,
      currentFindPage: 1,
      findOrderEmail: '',
      showResult: false,

      showPendingChange: [false, false, false, false, false, false, false, false, false, false],
      showFindOrderChange: [false, false, false, false, false, false, false, false, false, false],

      pendingPageData: [],
      shippingPageData: [],
      deliveredPageData: [],
      findPageData: [],

      pendingData: [],
      shippingData: [],
      deliveredData: [],
      findData: [],

      addTrackingForm: {
        orderNumber: '',
        tracking: '',
      },

      addFoundTrackingForm: {
        orderNumber: '',
        tracking: '',
    }


    }
  },

  methods: {
    async delivered(orderNumber) {
      await this.$axios.post('/admin/delivered', {orderNumber: orderNumber}).then(res=>{
        console.log(res.data)
        this.$router.go(0)
      })
    },

    // async findOrder() {
    //   const url = `/admin/findOrder?email=${this.findOrderEmail}`
    //   await this.$axios.get(url).then(res=>{
    //     console.log(res.data)
    //     this.findPageData = res.data
    //     let arrayLength
    //     if(this.findPageData.length < 10){
    //       arrayLength = this.findPageData.length
    //     } else {
    //       arrayLength = 10
    //     }
    //     for (let i = 0; i < arrayLength; i++){
    //       this.findData[i] = this.findPageData[i]
    //     }
    //     this.showResult = true
    //   })
    // },

    async getPendingData() {
      await this.$axios.get('/admin/findPending').then(res=>{
        /**
         * add
         */
        this.pendingPageData[0] = res.data[0]

        // alert(this.pendingPageData[0].orderNumber)
        // alert(res.data[1].orderNumber)
        for (let i = 1; i < 7; i++){

          if (this.pendingPageData[i-1].orderNumber !== res.data[i].orderNumber){
            this.pendingPageData[i] = res.data[i]
          }
        }
        /**
         * ----
         */

        let arrayLength
        if(this.pendingPageData.length < 10){
          arrayLength = this.pendingPageData.length
        } else {
          arrayLength = 10
        }
        for (let i = 0; i < arrayLength; i++){
          this.pendingData[i] = this.pendingPageData[i]
        }
      })
    },

    async getShippingData() {
      await this.$axios.get('/admin/findShipping').then(res=>{
        this.shippingPageData = res.data
        let arrayLength
        if(this.shippingPageData.length < 10){
          arrayLength = this.shippingPageData.length
        } else {
          arrayLength = 10
        }
        for (let i = 0; i < arrayLength; i++){
          this.shippingData[i] = this.shippingPageData[i]
        }
      })
    },

    async getDeliveredData() {
      await this.$axios.get('/admin/findDelivered').then(res=>{
        this.deliveredPageData = res.data
        let arrayLength
        if(this.deliveredPageData.length < 10){
          arrayLength = this.deliveredPageData.length
        } else {
          arrayLength = 10
        }
        for (let i = 0; i < arrayLength; i++){
          this.deliveredData[i] = this.deliveredPageData[i]
        }
      })
    },

    async changePendingPage(currentPage) {
      const newUrl = `/admin/changePage?page=${currentPage}&status=pending`
      await this.$axios.get(newUrl).then(res=>{
        this.pendingData = res.data
        for (let i = 0; i < 10; i++){
          this.$set(this.showPendingChange, i, false)
        }
        this.addTrackingForm.orderNumber = ''
        this.addTrackingForm.tracking = ''
      })
    },

    // async changeFindPage(currentPage) {
    //   const newUrl = `/admin/changePage?page=${currentPage}&email=${this.findOrderEmail}`
    //   await this.$axios.get(newUrl).then(res=>{
    //     this.pendingData = res.data
    //     for (let i = 0; i < 10; i++){
    //       this.$set(this.showFindOrderChange, i, false)
    //     }
    //     this.addFoundTrackingForm.orderNumber = ''
    //     this.addFoundTrackingForm.tracking = ''
    //   })
    // },

    async changeShippingPage(currentPage) {
      const newUrl = `/admin/changePage?page=${currentPage}&status=shipped`
      await this.$axios.get(newUrl).then(res=>{
        this.shippingData = res.data
      })
    },

    async changeDeliveredPage(currentPage) {
      const newUrl = `/admin/changePage?page=${currentPage}&status=delivered`
      await this.$axios.get(newUrl).then(res=>{
        this.deliveredData = res.data
      })
    },



    async addTracking() {
      await this.$axios.post('/admin/addTracking', this.addTrackingForm).then(res=>{
        console.log(res.data)
        this.$router.go(0)
      })
    },

    // async addFoundTracking() {
    //   await this.$axios.post('/admin/addTracking', this.addFoundTrackingForm).then(res=>{
    //     alert(res.data)
    //     this.$router.go(0)
    //   })
    // },

    async deleteOrder(orderNumber) {
      let answer = window.confirm("Are you sure?")
      if (answer){
        await this.$axios.post('/admin/deleteOrder', {orderNumber: orderNumber}).then(res=>{
          console.log(res.data)
          this.$router.go(0)
        })
      }
    },


    trackingButton(index, orderNumber) {
      for (let i = 0; i < 10; i++){
        this.$set(this.showPendingChange, i, false)
      }
      this.$set(this.showPendingChange, index, !this.showPendingChange[index])
      this.addTrackingForm.orderNumber = orderNumber
      this.addTrackingForm.tracking = ''
    }
  },

  mounted() {
    this.getPendingData()
    this.getShippingData()
    this.getDeliveredData()
  },

  computed: {
    pendingRows() {
      return this.pendingPageData.length
    },

    shippingRows() {
      return this.shippingPageData.length
    },

    deliveredRows() {
      return this.deliveredPageData.length
    },

    // findRows() {
    //   return this.findData.length
    // }
  }


}
</script>

<style scoped>

</style>
