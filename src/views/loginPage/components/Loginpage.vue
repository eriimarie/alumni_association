<template>
  <div id="box">
    <b-form @submit.prevent="onSubmit" v-if="show">
      <b-form-group label-cols="4"  id="input-group-1" label="Email:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email here."
        ></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" type = "password" required placeholder="Enter password here."
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-3" >
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-3">
          <b-form-checkbox id="checkbox" value="me" >Remember me</b-form-checkbox>
          <b-link href="*******">Forget password</b-link>
        </b-form-checkbox-group>
      </b-form-group >

      <b-row align-h="around">
        <b-button type="submit" variant="primary" >Login</b-button>
        <b-button type="submit" variant="danger" >Sign in</b-button>
      </b-row>


    </b-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        checked: []
      },
      show: true
    }
  },
  methods: {
    onSubmit(){
      this.$axios.post('/login',this.form).then(res=>{
        alert(res.data)
        this.$cookies.set('email', this.form.email)
        this.$cookies.set('password', this.form.password)
      }).catch(function (err){
        alert(err)})
    }
  },

}



</script>


<style scoped>

#box{
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px #eee;
  margin: 10px auto;
  display: table;
}


</style>