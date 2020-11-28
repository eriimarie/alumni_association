<template>
  <div id="box">
    <div id="category">Charity Events</div>
    <div class="ul" v-for="(charity, index) in charityData" v-bind:key="index">
      <p id="title"><b>{{charity.title}}</b></p>
      <p id="date">{{charity.date}}</p>
      <p id="content">{{charity.content}}</p>
<!--      <p>{{charity.category}}</p>-->
      <hr>
    </div>
    <div style="display: block; margin: 0 auto;">
      <b-pagination
          align="center"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="10"
          @click.native="changePage(currentPage)"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      currentPage: 1,
      charityData:[],
      pageData:[],
    }
  },

  mounted() {
    this.getData()
  },

  methods:{
    async getData() {
      await this.$axios.get('/volunteer?category=charity').then(res=>{
        this.pageData = res.data
        let arrayLength
        if (this.pageData.length < 10){
          arrayLength = this.pageData.length
        } else {
          arrayLength = 10
        }
        for (let i = 0; i < arrayLength; i++){
          this.charityData[i] = this.pageData[i]
        }
      })
    },

    async changePage(currentPage){
      const newUrl = `/volunteer/page?page=${currentPage}&category=charity`
      await this.$axios.get(newUrl).then(res=>{
        console.log(res.data)
        this.charityData = res.data
      })
    }
  },

  computed:{
    rows() {
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
  margin: 0 auto;
}
p{
  padding: 0;
  margin: 0;
}
.ul{
  list-style: none;
  text-align: center;
}
hr{
  height: 1px;
  background-color: #800001;
  color: #800001;
}
#title{
  font-size: 20px;
  color: #800001;
}
#category{
  font-size: 25px;
  color: white;
  text-align: center;
  background-color: #800001;
  margin-bottom: 10px;
}
</style>
