<template>
  <div>
    <li v-for="charity in charityData" v-bind:key="charity">
      <p>{{charity.title}}</p>
      <p>{{charity.content}}</p>
      <p>{{charity.date}}</p>
      <p>{{charity.category}}</p>
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

</style>
