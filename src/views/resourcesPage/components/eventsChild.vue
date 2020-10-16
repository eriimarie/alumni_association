<template>
  <div>
    <li v-for="event in eventsData" v-bind:key="event">
      <p @click="detailEvent(event.sortDate)">{{event.title}}</p>
      <p>{{event.content}}</p>
      <p>{{event.date}}</p>

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
const url = '/resources/events';
export default {

  data() {
    return{
      currentPage: 1,
      eventsData:[],
      pageData:[],
    }
  },

  mounted() {
    this.getData()
  },

  methods:{
    detailEvent(sortDate) {
      this.$router.push({
        path:'/resources/events/:id',
        query:{
          id: sortDate
        }
      })
    },

    async changePage(currentPage) {
      const newUrl = `/resources/events/page?page=${currentPage}`
      await this.$axios.get(newUrl).then(res=>{
        this.eventsData = res.data
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
          this.eventsData[i] = this.pageData[i]
        }
        console.log(this.eventsData)
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
