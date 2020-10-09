<template>
  <div>
    <Carousel></Carousel>
    <Card></Card>
  </div>
</template>

<script>

import Carousel from './components/Carousel'
import Card from './components/Card'

export default {
  name: "Main",
  components: {
    Carousel: Carousel,
    Card: Card,
  }
}
</script>

<style scoped>

</style>