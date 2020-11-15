<template>
  <div id="box">
    <b-card>
      <b-img :src="require('../../assets/donate.png')" fluid></b-img>
      <b-card-text>Donations are important to us in order to maintain the website, provide resources to alumni,
        promote events, and allow for us to give back to the community. </b-card-text>
      <b-card-text>Please donate today!</b-card-text>

    </b-card>
    <b-form-group label="Donate options:">
      <b-form-radio v-model="selected" name="some-radios" value="5">$ 5</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="10">$ 10</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="20">$ 20</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="50">$ 50</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" :value="value">$ {{value}}
        <b-form-input @click="clicked" id="input-2" v-model="value" type="range" min="1" max="300" step="1" required placeholder="Enter the amount here."
        ></b-form-input>
      </b-form-radio>

    </b-form-group>
    <b-button href="/pay" variant="primary">Donate $ {{selected}}</b-button>


  </div>
</template>

<script>
export default {
  data() {
    return {
      selected:'',
      value: 1,

      show: true
    }
  },
  methods:{
    clicked(){
      this.selected = this.value
    },

    check() {
      if (this.selected < 0) {
        this.selected = ''
      }
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
