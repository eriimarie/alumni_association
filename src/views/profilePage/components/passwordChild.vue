<template>
  <div id="box">
    <div id="login" v-show="isShowLogin">
      <h5>Please enter your password</h5>
      <hr>
      <b-form @submit.prevent="submitLogin">
        <b-form-group label-cols="3" label="Password:">
          <b-form-input v-model="loginForm.password" type="password" required placeholder="Enter password"></b-form-input>
        </b-form-group>
        <b-button type="submit">Login</b-button>
      </b-form>
    </div>

    <div id="change" v-show="isShowChange">
      <h5>Please enter your new password</h5>
      {{passwordForm}}
      <hr>
      <b-form @submit="submitChange">
        <b-form-group label-cols="3" :class="{'passwordError':isPassword1}" label="Password (*):">
          <b-form-input id="password" v-model="passwordForm.password" v-on:blur="checkPassword" type="password"
                        placeholder="Enter password" required></b-form-input>
          <div :class="isChangeBorder? 'passwordRequirementsError' : 'passwordRequirementsDefault'">
            <span>One lowercase letter required</span><br>
            <span>One uppercase letter required</span><br>
            <span>One number required</span><br>
            <span>One special character required</span><br>
            <span>8 characters minimum</span><br>
          </div>
        </b-form-group>

        <b-form-group label-cols="3" :class="{'passwordError':isPassword2}"
                      label="Renter password (*):">
          <b-form-input id="rePassword" v-model="passwordForm.password2" v-on:blur="comparePassword" type="password"
                        placeholder="Renter password" required></b-form-input>
          <div v-show="isShow" id="passwordNotMatch">
            <span>Please enter the same password</span>
          </div>
        </b-form-group>
        <b-button type="submit">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      isShow: false,
      isShowLogin: true,
      isShowChange: false,
      isChangeBorder: false,
      isPassword1: false,
      isPassword2: false,

      loginForm: {
        email: '',
        password: '',
      },
      passwordForm: {
        email: '',
        password: '',
        password2: '',
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods:{
    /**
     *页面总是跳转回来
     * 安全问题：
     *    密码从cookies中提取
     *    login页面将账号密码保存到cookie里（未加密）
     *    submitLogin方法不走后端，直接对比
     **/
    async getData(){
      await this.$axios.post('/profile/user', {email:this.$cookies.get('email')}).then(res=>{
        const data = res.data
        this.loginForm.email = data.email
        this.passwordForm.email = data.email
      })
    },

    checkPassword: function () {
      if (!(/\d/.test(this.passwordForm.password) && /[a-z]/.test(this.passwordForm.password) && /[A-Z]/.test(this.passwordForm.password) &&
          /[!@#$%^&*)(+=._-]/.test(this.passwordForm.password) && this.passwordForm.password.length >= 8)) {
        this.isPassword1 = true;
        this.isChangeBorder = true;
        return this.passwordForm.password = '';
      } else {
        this.isPassword1 = false;
        this.isChangeBorder = false;
      }
    },

    comparePassword: function () {
      console.log(this.passwordForm.password);
      console.log(this.passwordForm.password2);
      console.log(this.passwordForm.password2 === this.passwordForm.password);
      if (!(this.passwordForm.password2 === this.passwordForm.password)) {
        this.isPassword2 = true;
        this.isShow = true;
        return this.passwordForm.password2 = '';
      } else {
        this.isPassword2 = false;
        this.isShow = false;
      }
    },

    submitLogin(){
      this.$axios.post('/login',this.loginForm).then(res=>{
        if(res.data === 'valid password, login successfully'){
          this.isShowLogin = false
          this.isShowChange = true
        } else{
          alert("Wrong password")
        }
      }).catch(function (err){
        alert(err)})
    },

    submitChange(){
      this.$axios.post('/profile/changePassword', this.passwordForm).then(res=>{
        console.log(res)
      })
    }

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
.passwordRequirementsDefault {
  width: fit-content;
  border-style: solid;
  padding: 5px;
  margin-top: 5px;
  border-radius: 20px;
  color: gray;
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