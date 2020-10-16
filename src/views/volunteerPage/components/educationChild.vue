<template>
  <div>
    <li v-for="educational in educationalData" v-bind:key="educational">
      <p>{{educational.title}}</p>
      <p>{{educational.content}}</p>
      <p>{{educational.date}}</p>
      <p>{{educational.category}}</p>
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
      educationalData:[],
      pageData:[],
    }
  },

  mounted() {
    this.getData()
  },

  methods:{
    async getData() {
      await this.$axios.get('/volunteer?category=education').then(res=>{
        this.pageData = res.data
        let arrayLength
        if (this.pageData.length < 10){
          arrayLength = this.pageData.length
        } else {
          arrayLength = 10
        }
        for (let i = 0; i < arrayLength; i++){
          this.educationalData[i] = this.pageData[i]
        }
      })
    },

    async changePage(currentPage){
      const newUrl = `/volunteer/page?page=${currentPage}&category=education`
      await this.$axios.get(newUrl).then(res=>{
        console.log(res.data)
        this.educationalData = res.data
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
