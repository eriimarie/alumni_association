<template>
  <div>
    <b-form @submit="register">

      <b-form-group label-cols="4" label-cols-lg="1" label="First name (*):">
        <b-form-input id="firstName" v-model="form.firstName" type="text" placeholder="Enter first name"
                      required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="1" label="Last name (*):">
        <b-form-input id="lastName" v-model="form.lastName" type="text" placeholder="Enter last name"
                      required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="1" label="University Id (*):">
        <b-form-input id="universityId" v-model="form.universityID" type="number" placeholder="Enter university Id"
                      description="Please only enter numbers" required></b-form-input>
      </b-form-group>

      <hr>

      <b-form-group label-cols="4" label-cols-lg="1" label="Email (*):">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="1" :class="{'passwordError':isPassword1}" label="Password (*):">
        <b-form-input id="password" v-model="form.password" v-on:blur="checkPassword" type="password"
                      placeholder="Enter password" required></b-form-input>
        <div :class="isChangeBorder? 'passwordRequirementsError' : 'passwordRequirementsDefault'">
          <span>One lowercase letter required</span><br>
          <span>One uppercase letter required</span><br>
          <span>One number required</span><br>
          <span>One special character required</span><br>
          <span>8 characters minimum</span><br>
        </div>
      </b-form-group>



      <b-form-group label-cols="4" label-cols-lg="1" :class="{'passwordError':isPassword2}" label="Renter password (*):">
        <b-form-input id="rePassword" v-model="form.password2" v-on:blur="comparePassword" type="password" placeholder="Renter password"
                      required></b-form-input>
        <div v-show="isShow" id="passwordNotMatch">
          <span>Please enter the same password</span>
        </div>
      </b-form-group>

      <hr>

      <b-form-group label-cols="4" label-cols-lg="1" label="cellphone (*):">
        <b-form-input id="cellphone" v-model="form.cellphone" type="number" placeholder="Enter cellphone number"
                      required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="1" label="Street address (*):">
        <b-form-input id="streetAddress" v-model="form.streetAddress" type="text" placeholder="Enter street address"
                      required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="2" label="Street address 2 (optional):">
        <b-form-input id="streetAddress2" v-model="form.streetAddress2" type="text"
                      placeholder="optional"></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="1" label="City (*):">
        <b-form-input id="city" v-model="form.city" type="text" placeholder="Enter city" required></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="1" label="State (*):">
        <b-form-select id="state" v-model="form.states" type="text" :options="USAState" placeholder="Choose state"
                       required></b-form-select>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="1" label="Zip code (*):">
        <b-form-input id="zipCode" v-model="form.zipCode" type="number" placeholder="Enter Zip code"
                      required></b-form-input>
      </b-form-group>

      <hr>

      <b-button type="submit">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

export default {

  data() {
    return {

      isPassword1: false,
      isPassword2: false,
      isChangeBorder: false,
      isShow: false,

      form: {
        firstName: '',
        lastName: '',
        universityID: '',
        email: '',
        password: '',
        password2: '',
        cellphone: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        State: '',
        zipCode: '',
        USAState: '',
      },
      USAState: [{
        text: 'Select state',
        value: null
      }, 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU',
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM',
        'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'VI', 'WA', 'WV', 'WI', 'WY'],
    }
  },

  methods: {
    // onSubmit(evt) {
    //   evt.preventDefault()
    //   alert(JSON.stringify(this.form))
    // }

    checkPassword: function () {
      if (!(/\d/.test(this.form.password) && /[a-z]/.test(this.form.password) && /[A-Z]/.test(this.form.password) &&
          /[!@#$%^&*)(+=._-]/.test(this.form.password) && this.form.password.length >= 8)) {
        this.isPassword1 = true;
        this.isChangeBorder = true;
        return this.form.password = '';
      } else {
        this.isPassword1 = false;
      }
    },

    comparePassword: function() {
      console.log(this.form.password);
      console.log(this.form.password2);
      console.log(this.form.password2 === this.form.password);
      if (!(this.form.password2 === this.form.password)){
        this.isPassword2 = true;
        this.isShow = true;
        return this.form.password2 = '';
      } else {
        this.isPassword2 = false;
        this.isShow = false;
      }
    },

    register: function(){

    }
  }
}
</script>

<style scoped>
.passwordRequirementsDefault {
  width: fit-content;
  border-style: solid;
  padding: 5px;
  margin-top: 5px;
  border-radius: 20px;
  color: gray;
}

#passwordNotMatch{
  color: red;
}

.passwordError {
  color: red;
}
.passwordRequirementsError {
  width: fit-content;
  border-style: solid;
  padding: 5px;
  margin-top: 5px;
  border-radius: 20px;
  color: red;
}
</style>