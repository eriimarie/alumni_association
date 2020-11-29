<template>
<div id="box">
  <p id="top">Officers</p>
  <b-card v-for="(officer, index) in officerData" v-bind:key="index" id="card">
    <b-img :src="'http://localhost:3000/'+officer.path" class="profile-img" @click="officerDetail(officer.path)" style="max-width: 200px"></b-img>
    <b-card-text>Name: {{officer.name}}</b-card-text>
    <b-card-text>Phone number: {{officer.phone}}</b-card-text>
    <b-card-text>Email Address: {{officer.email}}</b-card-text>
  </b-card>
  <b-pagination align="center"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="10"
      @click.native="changePage(currentPage)"
  ></b-pagination>

</div>
</template>

<script>

const url = '/officer';

export default {

  data(){
    return{
      officerData:[],
      currentPage:1,
      pageData:[],

    }
  },

  mounted() {
    this.getData()
  },

  methods:{
    officerDetail(path){
      this.$router.push({
        path:'/officer/:id',
        query:{
          id:path
        }
      })
    },
    async changePage(currentPage){
      const newUrl = `/officer/page?page=${currentPage}`
      await this.$axios.get(newUrl).then(res=>{
        this.officerData = res.data
      })
    },
    async getData() {
      await this.$axios.get(url).then(res=>{
        this.pageData = res.data
        let arrayLength
        if(this.pageData.length < 10){
          arrayLength = this.pageData.length
        } else {
          arrayLength = 10
        }
        for (let i = 0; i < arrayLength; i++){
          this.officerData[i] = this.pageData[i]
        }
      })
    }
  },
  computed:{
    rows(){
      return this.pageData.length
    }
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
  width: 1200px;
}
#card{
  background-color: #FFEAA7;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
}
#top{
  text-align: center;
  color: white;
  background-color: #800001;
  margin-bottom: 30px;
  font-size: 25px;
}

</style>