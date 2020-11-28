<template>
  <div>
    <ul>
      <li v-for="news in newsData" v-bind:key="news">
        <p @click="detailEvent(news.sortDate)">{{news.title}}</p>
        <p>{{news.content}}</p>
        <p>{{news.date}}</p>
      </li>
    </ul>


    <b-pagination
        align="center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="10"
        @click.native="changePage(currentPage)"
    ></b-pagination>

  </div>
</template>

<script>
const url = '/resources/news';
export default {

  data() {
    return{
      currentPage: 1,
      newsData:[],
      pageData:[],
    }
  },

  mounted() {
    this.getData()
  },

  methods:{
    detailEvent(sortDate) {
      this.$router.push({
        path:'news/:id',
        query:{
          id: sortDate
        }
      })
    },

    async changePage(currentPage) {
      const newUrl = `/resources/news/page?page=${currentPage}`
      await this.$axios.get(newUrl).then(res=>{
        this.newsData = res.data
      })
    },

    async getData() {
      await this.$axios.get(url).then(res=>{
        this.pageData = res.data
        console.log(this.pageData)
        let arrayLength
        if(this.pageData.length < 10){
          arrayLength = this.pageData.length
        } else {
          arrayLength = 10
        }
        for (let i = 0; i < arrayLength; i++){
          this.newsData[i] = this.pageData[i]
        }
        console.log(this.newsData)
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

</style>
