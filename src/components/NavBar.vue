<template>
  <div id="box">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/index">image</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/news">News</b-nav-item>
          <b-nav-item href="/events">Events</b-nav-item>
          <b-nav-item href="/shopping">Market</b-nav-item>
          <b-nav-item href="/donate"><b-button size="sm" class="my-2 my-sm-0" type="submit">Donate</b-button></b-nav-item>


          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>


          <!-- js, if not logged in, go to log in page, otherwise do next-->
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #box{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>