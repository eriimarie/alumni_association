<template>
  <div>
    title: {{event.title}}
    <br>
    content: {{event.content}}
  </div>
</template>

<script>
export default {
  data() {
    return{
      event:[]
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      const newUrl = `/resources/news/detail/?id=${this.$route.query.id}`
      await this.$axios.get(newUrl).then(res=>[
          this.event = res.data
      ])
    }
  }

}
</script>

<style scoped>

</style>
