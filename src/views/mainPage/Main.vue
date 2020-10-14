<template>
  <div id="box">
    <Carousel></Carousel>
    <Overview></Overview>
    <Contact></Contact>
    <Card></Card>
  </div>
</template>

<script>

import Carousel from './components/Carousel'
import Card from './components/Card'
import Contact from "./components/Contact"
import Overview from "./components/Overview"

export default {
  name: "Main",
  components: {
    Carousel: Carousel,
    Card: Card,
    Contact: Contact,
    Overview: Overview,
  }
}
</script>

<style scoped>
  #box{
    margin-bottom: 30px;
  }
</style>