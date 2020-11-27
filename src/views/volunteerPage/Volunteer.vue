<template>
  <div id="box">
    <b-container>
      <b-row>
        <b-col sm="3">
          <div id="left">
            <span>Volunteer</span>
            <router-link class="routerLink" to="/volunteer/leadership" tag="li">Leadership opportunity</router-link>
            <router-link to="/volunteer/charity" tag="li">Charity events</router-link>
            <router-link to="/volunteer/educational" tag="li">Educational institution</router-link>
            <router-link to="/volunteer/healthcare" tag="li">Healthcare center</router-link>
          </div>

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
#left{
  border: 1px solid;
  list-style: none;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
span{
  font-size: 16px;
}
.routerLink{
  background-color: #fff;
}
</style>
