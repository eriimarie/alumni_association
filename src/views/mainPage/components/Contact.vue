<template>
  <div id="box">
    <b-img :src="require('@/assets/mian_contact.jpg')" fluid alt="contact image"></b-img>
    <b-container class="row align-items-end">
      <b-col sm="3"><h3 class="purple">Contact<br>Information<br></h3><p>How to get in touch with us.</p></b-col>
      <b-col sm="3" class="marginBottom"><p><b class="purple">PHONE NUMBER</b><br><span>(123)456-7890</span></p></b-col>
      <b-col sm="3" class="marginBottom"><p><b class="purple">EMAIL ADDRESS</b><br><span>hello@reallygreatsite.com</span></p></b-col>
      <b-col sm="3" class="marginBottom"><p><b class="purple">MAILING ADDRESS</b><br><span>123 Anywhere St. Any City, ST 12345</span></p></b-col>
    </b-container>
  </div>
</template>

<script>
export default {
name: "Contact"
}
</script>

<style scoped>
  #box {
    max-width: 1200px;
    margin: 0 auto;
  }
  .purple{
    color: #453EAE;
  }
  span{
    font-size: 15px;
  }

</style>