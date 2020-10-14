<template>
  <div id="box">
    <b-form @submit="onSubmit">
      <h3>Edit Shipping</h3>
      <hr>
      <div id="personalInfo">
        <b>Personal information</b>
        <b-form-group label-cols="4" label-cols-lg="2" label="First name (*):">
          <b-form-input id="firstName" v-model="form.firstName" type="text" :placeholder="this.userData.firstName"
                        required></b-form-input>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="Last name (*):">
          <b-form-input id="lastName" v-model="form.lastName" type="text" :placeholder="this.userData.lastName"
                        required></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="cellphone (*):">
          <b-form-input id="cellphone" v-model="form.cellphone" type="number" :placeholder="this.userData.cellphone"
                        required></b-form-input>
        </b-form-group>
      </div>
      <hr>

      <div id="shippingInfo">
        <b>Shipping address</b>
        <b-form-group label-cols="4" label-cols-lg="2" label="Street address (*):">
          <b-form-input id="streetAddress" v-model="form.streetAddress" type="text" :placeholder="this.userData.streetAddress"
                        required></b-form-input>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="Street address 2 (optional):">
          <b-form-input id="streetAddress2" v-model="form.streetAddress2" type="text"
                        :placeholder="this.userData.streetAddress2"></b-form-input>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="City (*):">
          <b-form-input id="city" v-model="form.city" type="text" :placeholder="this.userData.city" required></b-form-input>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="State (*):">
          <b-form-select id="state" v-model="form.state" type="text" :options="this.USAState"
                         required></b-form-select>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="Zip code (*):">
          <b-form-input id="zipCode" v-model="form.zipCode" type="number" :placeholder="this.userData.zipCode"
                        required></b-form-input>
        </b-form-group>
      </div>
      <b-button type="submit">Submit</b-button>
    </b-form>

  </div>
</template>

<script>
export default {
  name: "userChild",

  data(){
    return{
      isShow: false,

      form: {
        email: '',
        firstName: '',
        lastName: '',
        cellphone: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
      },
      userData: {
        firstName: '',
        lastName: '',
        cellphone: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
      },
      USAState: ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
        'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP',
        'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'VI', 'WA', 'WV', 'WI', 'WY'],
    }
  },
  mounted() {
    this.getData()
  },
  methods:{
    async getData(){
      await this.$axios.post('/profile/user', {email:this.$cookies.get('email')}).then(res=>{
        const data = res.data
        this.form.email = data.email
        this.userData.firstName = data.firstName
        this.userData.lastName = data.lastName
        this.userData.cellphone = data.cellphone
        this.userData.streetAddress = data.streetAddress
        this.userData.streetAddress2 = data.streetAddress2
        this.userData.city = data.city
        this.userData.state = data.state
        this.userData.zipCode = data.zipCode
      })
    },
    onSubmit() {
      this.$axios.post('/profile/shipping', this.form).then(res=>{
        alert(res.data)
        this.$router.push('/profile')
      }).catch(function (err){
        alert(err)
      })
    },
  }
}
</script>

<style scoped>
#box{
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px #eee;
  margin: 10px auto;
}
</style>