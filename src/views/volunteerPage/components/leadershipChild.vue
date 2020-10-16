<template>
  <div>
    {{charityData}}
    <li v-for="leadership in leadershipData" v-bind:key="leadership">
      <p>{{leadership.title}}</p>
      <p>{{leadership.content}}</p>
      <p>{{leadership.date}}</p>
      <p>{{leadership.category}}</p>
    </li>

    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="10"
        @click.native="changePage(currentPage)"
    ></b-pagination>

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

</style>
