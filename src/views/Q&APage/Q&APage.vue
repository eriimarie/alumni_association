<template>
  <div id="box">
    <p class="title"><b>FAQs</b></p>
    <div class="body">
      <p class="questions"><b>I forgot my password.</b></p>
      <p class="answers">To reset your password, click the Forgot Password follow the link instructions on the page.
        Please note, only users who have previously received MHAA-USNR have registration invitation may request a password reset.</p>
      <br>
      <p class="questions"><b>How do I find my Alumni MHAA-USNR?</b></p>
      <p class="answers">Your eight-digit alumni ID number begins with a zero (i.e., 01234567) and can be found on the following:
      your alumni membership card, OR the Email with all the information you receive. If you need help finding your alumni IF,
      please email alumni@mhassus.edu</p>
      <br>
      <p class="questions"><b>How do I view and edit fields in My Profile?</b></p>
      <p class="answers">Login to your account and navigate to My Profile to view your Bio Details, Contact Information,
       Communication Preferences, Involvements and Degree Information. To make changes, select the 'Edit' button on the
        top right corner of each page. When finished, click the 'Apply Changes' button to save.</p>
      <br>
      <p class="questions"><b>For more questions please email alumni@mhaaus.edu</b></p>
      <br>
    </div>
    <p class="title"><b>Resource</b></p>
    <div class="body">
      <p class="resource">For more information about scholarships and other type of help for school</p>
      <p class="resource">Please contact alumni@mhaaus.edu</p>
    </div>




<!--    <b-button v-b-toggle.my-collapse-1>Question 1</b-button>-->
<!--    <b-collapse id="my-collapse-1">-->
<!--      <p>Answer 1</p>-->
<!--    </b-collapse>-->
<!--    <br>-->
<!--    <b-button v-b-toggle.my-collapse-2>Question 2</b-button>-->
<!--    <b-collapse id="my-collapse-2">-->
<!--      <p>Answer 2</p>-->
<!--    </b-collapse>-->
<!--    <br>-->
<!--    <b-button v-b-toggle.my-collapse-3>Question 3</b-button>-->
<!--    <b-collapse id="my-collapse-3">-->
<!--      <p>Answer 3</p>-->
<!--    </b-collapse>-->
<!--    <br>-->
  </div>
</template>

<script>
export default {
name: "Q&APage"
}
</script>

<style scoped>
#box{
  max-width: 1200px;
  margin: 0 auto;
}
.title{
  background-color: #CEC094;
  font-size: 20px;
  padding: 5px;
  color: #800001;
}
p{
  margin: 0;
  padding: 0;
}

.body{
  padding: 10px;
  margin-left: 20px;
}
.questions{
  color: black;
}
.answers{
  color: gray;
}
.resource{
  font-size: 20px;
  color: gray;
}
</style>
