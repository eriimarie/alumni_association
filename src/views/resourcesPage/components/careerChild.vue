<template>
  <div>
    <li v-for="career in careerData" v-bind:key="career">
      {{career.title}}
      <br>
      {{career.content}}
    </li>
<!--    <b-table-->
<!--        :items="careerData"-->
<!--        :per-page="10"-->
<!--        :current-page="currentPage"-->
<!--        small-->
<!--    ></b-table>-->
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="10"
        @click.native="changePage(currentPage)"
    ></b-pagination>

  </div>
</template>

<script>
const url = '/resources/career';
export default {

  data() {
    return{
      currentPage: 1,
      careerData:[],
      pageData:[],
    }
  },

  mounted() {
    this.getData()
  },

  methods:{

    async changePage(currentPage) {
      const newUrl = `/resources/career/page?page=${currentPage}`
      await this.$axios.get(newUrl).then(res=>{
        this.careerData = res.data
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
          this.careerData[i] = this.pageData[i]
        }
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
