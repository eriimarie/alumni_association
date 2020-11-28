<template>
  <div id="box">
    <b-form @submit.prevent="onSubmit">
      <h3>Register</h3>
      <hr>

      <div id="personalInfo">
        <b>Personal information</b>
        <b-form-group label-cols="4" label-cols-lg="2" label="First name (*):">
          <b-form-input id="firstName" v-model="form.firstName" type="text" placeholder="Enter first name"
                        required></b-form-input>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="Last name (*):">
          <b-form-input id="lastName" v-model="form.lastName" type="text" placeholder="Enter last name"
                        required></b-form-input>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="University Id (*):">
          <b-form-input id="universityId" v-model="form.universityId" type="number" placeholder="Enter university Id"
                        description="Please only enter numbers" required></b-form-input>
        </b-form-group>
      </div>
      <hr>

      <div id="accountInfo">
        <b>Account information</b>
        <b-form-group :class="{'emailError':emailError}" label-cols="4" label-cols-lg="2" label="Email (*):">
          <b-form-input id="email" v-model="form.email" type="email" v-on:blur="checkEmail" placeholder="Enter email" required></b-form-input>
          <span v-show="emailError">email already exist</span>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" :class="{'passwordError':isPassword1}" label="Password (*):">
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

        <b-form-group label-cols="4" label-cols-lg="2" :class="{'passwordError':isPassword2}"
                      label="Re-enter password (*):">
          <b-form-input id="rePassword" v-model="form.password2" v-on:blur="comparePassword" type="password"
                        placeholder="Re-enter password" required></b-form-input>
          <div v-show="isShow" id="passwordNotMatch">
            <span>Please enter the same password</span>
          </div>
        </b-form-group>
      </div>
      <hr>

      <div id="shippingInfo">
        <b>Shipping address</b>
        <b-form-group label-cols="4" label-cols-lg="2" label="cellphone (*):">
          <b-form-input id="cellphone" v-model="form.cellphone" type="number" placeholder="Enter cellphone number"
                        required></b-form-input>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="Street address (*):">
          <b-form-input id="streetAddress" v-model="form.streetAddress" type="text" placeholder="Enter street address"
                        required></b-form-input>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="Street address 2 (optional):">
          <b-form-input id="streetAddress2" v-model="form.streetAddress2" type="text"
                        placeholder="optional"></b-form-input>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="City (*):">
          <b-form-input id="city" v-model="form.city" type="text" placeholder="Enter city" required></b-form-input>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="State (*):">
          <b-form-select id="state" v-model="form.state" type="text" :options="USAState"
                         required></b-form-select>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="Zip code (*):">
          <b-form-input id="zipCode" v-model="form.zipCode" type="number" placeholder="Enter Zip code"
                        required></b-form-input>
        </b-form-group>

      </div>
      <hr>

      <div id="securityInfo">
        <b>Security problem</b>
        <b-form-group label-cols="4" label-cols-lg="2" label="Question 1 (*):">
          <b-form-select id="question1" v-model="form.question1" type="text" :options="securityQuestions1"
                         required></b-form-select>
          <b-form-input id="answer1" v-model="form.answer1" type="text" placeholder="Enter the answer here"
                        required></b-form-input>
        </b-form-group>

        <b-form-group label-cols="4" label-cols-lg="2" label="Question 2 (*):">
          <b-form-select id="question1" v-model="form.question2" type="text" :options="securityQuestion2"
                         required></b-form-select>
          <b-form-input id="answer1" v-model="form.answer2" type="text" placeholder="Enter the answer here"
                        required></b-form-input>
        </b-form-group>

      </div>
      <b-button class="button" type="submit">Submit</b-button>
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
      emailError: false,

      form: {
        firstName: '',
        lastName: '',
        universityId: '',
        email: '',
        password: '',
        password2: '',
        cellphone: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
        question1: '',
        answer1: '',
        question2: '',
        answer2: '',
        aboutMe: '',
      },

      USAState: ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
        'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP',
        'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'VI', 'WA', 'WV', 'WI', 'WY'],

      securityQuestions1: ["What was the house number and street name you lived in as a child?", "What were the last four digits of your childhood telephone number?",
        "What primary school did you attend?", "In what town or city was your first full time job?",
        "In what town or city did you meet your spouse or partner?"],

      securityQuestion2: ["What is the middle name of your oldest child?", "What are the last five digits of your driver's license number?",
        "What is your grandmother's (on your mother's side) maiden name?", "What is your spouse or partner's mother's maiden name?",
        "In what town or city did your parents meet?"],
    }
  },

  methods: {
    onSubmit() {
      this.$axios.post('/register', this.form).then(res=>{
        alert(res.data)
        this.$router.push('/login')
      }).catch(function (err){
        alert(err)
      })
    },

    async checkEmail() {
      await this.$axios.get(`/register/check?email=${this.form.email}`).then(res=>{
        if (res.data === 'user exist'){
          this.form.email = ''
          this.emailError = true
        } else {
          this.emailError = false
        }
      })
    },

    checkPassword: function () {
      if (!(/\d/.test(this.form.password) && /[a-z]/.test(this.form.password) && /[A-Z]/.test(this.form.password) &&
          /[!@#$%^&*)(+=._-]/.test(this.form.password) && this.form.password.length >= 8)) {
        this.isPassword1 = true;
        this.isChangeBorder = true;
        return this.form.password = '';
      } else {
        this.isPassword1 = false;
        this.isChangeBorder = false;
      }
    },

    comparePassword: function () {
      console.log(this.form.password);
      console.log(this.form.password2);
      console.log(this.form.password2 === this.form.password);
      if (!(this.form.password2 === this.form.password)) {
        this.isPassword2 = true;
        this.isShow = true;
        return this.form.password2 = '';
      } else {
        this.isPassword2 = false;
        this.isShow = false;
      }
    },
  }
}
</script>

<style scoped>
#box{
  padding: 20px;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  margin: 20px auto;
  display: table;
}
h3, b {
  color: #800001;
}
.button{
  background-color: #800001;
}
.passwordRequirementsDefault {
  width: fit-content;
  border-style: solid;
  padding: 5px;
  margin-top: 5px;
  border-radius: 20px;
  color: gray;
}

.emailError{
  color: red
}

#passwordNotMatch {
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
