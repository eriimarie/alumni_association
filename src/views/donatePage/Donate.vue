<template>
  <div id="box">
    {{this.form}}
    <b-card>
      <b-img :src="require('../../assets/donate.png')"></b-img>
      <b-card-text>Donations are important to us in order to maintain the website, provide resources to alumni,
        promote events, and allow for us to give back to the community. </b-card-text>
      <b-card-text>Please donate today!</b-card-text>

    </b-card>
    <b-form-group label="Donate options:">
      <b-form-radio v-model="selected"  name="some-radios" value="A">5$</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="B">10$</b-form-radio>
      <b-form-radio v-model="selected"  name="some-radios" value="C">20$</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="D" l="D">50$</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="E" >
        <b-form-input @click="clicked" id="input-2"  type = "number" min="1" max="1000" required placeholder="Enter the amount here."
        ></b-form-input>
      </b-form-radio>

    </b-form-group>
    <b-button href="/pay" variant="primary">Donate now!</b-button>


  </div>
</template>

<script>
export default {
  data() {
    return {

      selected:'',



      show: true
    }
  },
  methods:{
    clicked(){
      this.selected = 'E'


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
  display: table;
}


</style>