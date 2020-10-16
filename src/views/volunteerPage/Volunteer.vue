<template>
  <div id="box">
    <b-container>
      <b-row>
        <b-col sm="3">
          <ul>
            <router-link to="/volunteer/leadership" tag="li">Leadership opportunity</router-link>
            <router-link to="/volunteer/charity" tag="li">Charity events</router-link>
            <router-link to="/volunteer/educational" tag="li">Educational institution</router-link>
            <router-link to="/volunteer/healthcare" tag="li">Healthcare center</router-link>
          </ul>
        </b-col>
        <b-col sm="9">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style scoped>
#box{
  max-width: 1200px;
  margin: 0 auto;
}
</style>
