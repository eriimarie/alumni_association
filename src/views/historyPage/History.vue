<template>
  <div style="margin: 20px">
    <h3>The Organization's history</h3>
    <div id="box">
      <p>Founded on a strong belief in accessible education, Maggotty High School is proud to bring academia to all corners
        of the country through our newly online program. Each year our student community grows and strengthens, and our
        alumni graduate as passionate and curious learners.</p>
      <p>Regardless of where they are located, our students receive customized, high quality education from licensed
        teachers who are always available through online channels. We’re here to provide the flexible learning experience
        you need.</p>
      <p>Maggotty High School is a co-educational facility located in North-Western St. Elizabeth. The school began its
        impact on the community of Maggotty since its inception in 1971.
        The institution has undergone many changes, moving from a Junior Secondary School in 1971 to new Secondary in 1974.
        The school has now achieved High School status since 1988.
        The institution presently has in its employ approximately ninety-two (92) academic staff members, inclusive of one
        (1) Principal, two (2) Vice-Principals, three (3) Guidance Counsellors, and one (1) Dean of Discipline.</p>
      <p>Maggotty High School boasts a population of approximately two thousand students. In the year 2017, the shift
        system on which the school operated since its inception was discontinued and now the whole-day school system sees
        school commencing at 8:00am to 3:00pm with the exception of operations ending at 2:00pm on a Friday. Maggotty High
        School strives to attain excellence in all aspects of its activities and endeavours.</p>
    </div>
  </div>

</template>

<script>
export default {
name: "Histroy"
}
</script>

<style scoped>
#box{
  max-width: 900px;
  padding: 20px;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  margin: 20px auto;
  background-image: url("../../assets/history.png");
  background-size: cover;

}
h3, p{
  color: #800001;
  text-align: center;
}

</style>
