<template>
  <div id="box">
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          caption="Welcome to MAA"
          img-src="https://i.imgur.com/AnC4Lhs.jpg"
      ></b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>
  #box{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>