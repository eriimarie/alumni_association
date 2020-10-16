<template>
  <div>
    {{charityData}}
    <li v-for="healthcare in healthcareData" v-bind:key="healthcare">
      <p>{{healthcare.title}}</p>
      <p>{{healthcare.content}}</p>
      <p>{{healthcare.date}}</p>
      <p>{{healthcare.category}}</p>
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
      healthcareData:[],
      pageData:[],
    }
  },

  mounted() {
    this.getData()
  },

  methods:{
    async getData() {
      await this.$axios.get('/volunteer?category=healthcare').then(res=>{
        this.pageData = res.data
        let arrayLength
        if (this.pageData.length < 10){
          arrayLength = this.pageData.length
        } else {
          arrayLength = 10
        }
        for (let i = 0; i < arrayLength; i++){
          this.healthcareData[i] = this.pageData[i]
        }
      })
    },

    async changePage(currentPage){
      const newUrl = `/volunteer/page?page=${currentPage}&category=healthcare`
      await this.$axios.get(newUrl).then(res=>{
        console.log(res.data)
        this.healthcareData = res.data
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
