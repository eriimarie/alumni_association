<template>
  <div id="box">
    <b-container>
      <b-row>
        <b-col sm="3">
          <ul>
            <router-link to="/events/upcoming" tag="li">Up-Coming Events</router-link>
            <router-link to="/events/dance" tag="li">Annual Dinner Dance</router-link>
            <router-link to="/events/fundraiser" tag="li">Previous FundRaiser</router-link>
            <router-link to="/events/family" tag="li">Family Fun Day</router-link>
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
name: "Events"
}
</script>

<style scoped>

</style>
