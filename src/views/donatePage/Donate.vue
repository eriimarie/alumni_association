<template>
  <div id="box">
    <b-card id="card" >
      <b-img :src="require('../../assets/donate.png')" fluid></b-img>
      <b-card-text>Donations are important to us in order to maintain the website, provide resources to alumni,
        promote events, and allow for us to give back to the community. </b-card-text>
      <b-card-text>Please donate today!</b-card-text>

    </b-card>
    <b-form-group label="Donate options:" id="from-group">
      <b-form-radio v-model="selected"  name="some-radios" value="5" > $ 5</b-form-radio>
      <b-form-radio v-model="selected"  name="some-radios" value="10">$ 10</b-form-radio>
      <b-form-radio v-model="selected"  name="some-radios" value="20">$ 20</b-form-radio>
      <b-form-radio v-model="selected"  name="some-radios" value="50">$ 50</b-form-radio>
      <b-form-radio v-model="selected"  name="some-radios" :value="value">$ {{value}}
        <b-form-input @click="clicked" id="input-2" v-model="value" type="range" min="1" max="300" step="1" required
        ></b-form-input>
      </b-form-radio>

    </b-form-group>
    <b-button href="/pay" variant="primary" id="button">Donate $ {{selected}}</b-button>


  </div>
</template>

<script>
/**
 * required
 *
 * 工具
 * print3D -- 截图
 * https://pixlr.com/cn/x/
 */


export default {
  data() {
    return {
      selected:'5',
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
  margin: 20px auto;
  display: table;
  width: 1200px;


}
#card{
  background-color: #FFEAA7;
  border: #FFEAA7;
  text-align: center;
}
#from-group{
  margin-left: 45%;
}
#input-2{
  position: center;
}
#button{
  margin-left: 46%;
  background-color: #800001;
}


</style>
