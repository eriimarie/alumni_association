<template>
  <div id="box">
    <div id="category"> Leadership Opportunity</div>
    <div class="ul" v-for="(leadership, index) in leadershipData" v-bind:key="index">
      <p id="title"><b>{{leadership.title}}</b></p>
      <p id="date">{{leadership.date}}</p>
      <p id="content">{{leadership.content}}</p>
      <!--      <p>{{charity.category}}</p>-->
      <hr>
    </div>
    <div>
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
      leadershipData:[],
      pageData:[],
    }
  },

  mounted() {
    this.getData()
  },

  methods:{
    async getData() {
      await this.$axios.get('/volunteer?category=leadership').then(res=>{
        this.pageData = res.data
        let arrayLength
        if (this.pageData.length < 10){
          arrayLength = this.pageData.length
        } else {
          arrayLength = 10
        }
        for (let i = 0; i < arrayLength; i++){
          this.leadershipData[i] = this.pageData[i]
        }
      })
    },

    async changePage(currentPage){
      const newUrl = `/volunteer/page?page=${currentPage}&category=leadership`
      await this.$axios.get(newUrl).then(res=>{
        console.log(res.data)
        this.leadershipData = res.data
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
