<template>
  <div id="box">
    <div>
      <b-form @submit.prevent="submitVolunteer">
        <h4>Add volunteer opportunity</h4>
        <b-form-group label-cols="4" label-cols-lg="2" label="title:">
          <b-form-input v-model="addForm.title" type="text" required placeholder="Enter title"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="content:">
          <b-form-textarea v-model="addForm.content" required placeholder="Enter content" rows="5"></b-form-textarea>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="date:">
          <b-form-input v-model="addForm.date" type="date" required placeholder="Enter link"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="category:">
          <b-form-select v-model="addForm.category" :options="categoryOptions" type="text" required placeholder="Enter link"></b-form-select>
        </b-form-group>
        <b-button class="button" type="submit">Add Volunteer Opportunity</b-button>
      </b-form>
      <hr>
    </div>

    <div>
      <b-form>
        <h4>Find volunteer opportunity</h4>
        <b-form-group label-cols="4" label-cols-lg="2" label="title:">
          <b-form-input v-model="findTitle" type="text" required placeholder="Enter title"></b-form-input>
        </b-form-group>
        <b-button class="button" @click.prevent="submitFind(findTitle)">Find title</b-button>
      </b-form>
      <div v-show="showChange[10]">
        <ul>
          <li>Title: <b>{{changeForm.title}}</b></li>
          <li>Category: <b>{{changeForm.category}}</b></li>
          <button class="deleteButton" @click.prevent="deleteVolunteer(changeForm.sortDate)">delete</button>
          <button class="changeButton" @click="showFindChange = !showFindChange">change</button>
        </ul>



      </div>
      <b-form @submit.prevent="submitChange" v-show="showFindChange">
        <b-form-group label-cols="4" label-cols-lg="2" label="title:">
          <b-form-input v-model="changeForm.title" type="text" required placeholder="Enter title"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="content:">
          <b-form-textarea v-model="changeForm.content" required placeholder="Enter content" rows="5"></b-form-textarea>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="date:">
          <b-form-input v-model="changeForm.date" type="date" required placeholder="Enter link"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="2" label="category:">
          <b-form-select v-model="changeForm.category" :options="categoryOptions" type="text" required placeholder="Enter link"></b-form-select>
        </b-form-group>
        <b-form-checkbox v-model="changeForm.checkbox" value="checked" unchecked-value="unchecked">Move to the front</b-form-checkbox>
        <b-button class="button" type="submit" >Submit change</b-button>
      </b-form>
    </div>
    <hr>

    <div>
      <h4>Volunteer list</h4>
      <ul>
        <li v-for="(volunteer, index) in volunteerData" v-bind:key="index">
          <p>Title: <b>{{volunteer.title}}</b></p>
          <p>Category: <b>{{volunteer.category}}</b></p>
          <button class="deleteButton" @click.prevent="deleteVolunteer(volunteer.sortDate)">delete</button>
          <button class="changeButton" @click.prevent="clickChangeVolunteer(index, volunteer.title, volunteer.content, volunteer.date, volunteer.category, volunteer.sortDate, volunteer.oldSortDate)">change</button>
          <b-form @submit.prevent="submitChange" v-show="showChange[index]">
            <b-form-group label-cols="4" label-cols-lg="2" label="title:">
              <b-form-input v-model="changeForm.title" type="text" required placeholder="Enter title"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="2" label="content:">
              <b-form-textarea v-model="changeForm.content" required placeholder="Enter content" rows="5"></b-form-textarea>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="2" label="date:">
              <b-form-input v-model="changeForm.date" type="date" required placeholder="Enter link"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="2" label="category:">
              <b-form-select v-model="changeForm.category" :options="categoryOptions" type="text" required placeholder="Enter link"></b-form-select>
            </b-form-group>
            <b-form-checkbox v-model="changeForm.checkbox" value="checked" unchecked-value="unchecked">Move to the front</b-form-checkbox>
            <b-button class="button" type="submit" >Submit change</b-button>
          </b-form>
          <hr>
        </li>
      </ul>
      <b-pagination
          align="center"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="10"
          @click.native="changePage(currentPage)"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
/**
 * 数据库：增删改查
 */
const url = '/admin/volunteer'
export default {
  data() {
    return{
      showChange: [false, false, false, false, false, false, false, false, false, false, false],
      currentPage: 1,
      volunteerData: [],
      pageData: [],
      showFindChange: false,
      findTitle: '',

      changeForm: {
        title: '',
        content: '',
        date: '',
        category: '',
        oldSortDate: '',
        sortDate: '',
        checkbox: 'unchecked',
      },

      addForm: {
        title: '',
        content: '',
        date: '',
        category: '',
        sortDate: '',
      },

      categoryOptions: [
        {value: 'leadership', text: 'leadership'},
        {value: 'charity', text: 'charity'},
        {value: 'education', text: 'education'},
        {value: 'healthcare', text: 'healthcare'},
      ],
    }
  },

  methods: {
    async getData() {
      await this.$axios.get(url).then(res=>{
        this.pageData = res.data
        let arrayLength
        if(this.pageData.length < 10){
          arrayLength = this.pageData.length
        } else {
          arrayLength = 10
        }
        for (let i = 0; i < arrayLength; i++){
          this.volunteerData[i] = this.pageData[i]
        }
      })
    },

    async submitFind() {
      const url = `/admin/findVolunteer?title=${this.findTitle}`
      await this.$axios.get(url).then(res=>{
        if (res.data === 'not found') {
          alert("Can not find")
        } else {
          this.changeForm.title = res.data.title
          this.changeForm.content = res.data.content
          this.changeForm.date = res.data.date
          this.changeForm.category = res.data.category
          this.changeForm.sortDate = res.data.sortDate
          this.changeForm.oldSortDate = res.data.sortDate
          for (let i = 0; i < 11; i++){
            this.$set(this.showChange, i, false)
          }
          this.$set(this.showChange, 10, true)
          this.showFindChange = false
        }
      })
    },

    async changePage(currentPage) {
      const newUrl = `/resources/career/page?page=${currentPage}`
      await this.$axios.get(newUrl).then(res=>{
        this.careerData = res.data
        for (let i = 0; i < 11; i++){
          this.$set(this.showChange, i, false)
        }
        this.showFindChange = false
        this.changeForm.title = ''
        this.changeForm.content = ''
        this.changeForm.sortDate = ''
        this.changeForm.oldSortDate = ''
        this.changeForm.checkbox = 'unchecked'
      })
    },

    submitVolunteer() {
      this.addForm.sortDate = Date.now()
      this.$axios.post('/admin/addVolunteer', this.addForm).then(res=>{
        console.log(res.data)
        this.$router.go(0)
      })
    },

    async submitChange(){
      if (this.changeForm.checkbox === 'checked'){
        this.changeForm.sortDate = Date.now()
      }
      await this.$axios.post('/admin/changeVolunteer', this.changeForm).then(res=>{
        console.log(res.data)
        this.$router.go(0)
      })
    },

    async deleteVolunteer(sortDate) {
      let answer = window.confirm("You you sure?")
      if (answer){
        await this.$axios.post('/admin/deleteVolunteer', {sortDate: sortDate}).then(res=>{
          console.log(res.data)
          this.$router.go(0)
        })
      }
    },

    clickChangeVolunteer(index, title, content, date,category, sortDate){
      for (let i = 0; i < 11; i++){
        this.$set(this.showChange, i, false)
      }
      this.$set(this.showChange, index, !this.showChange[index])
      this.changeForm.title = title
      this.changeForm.content = content
      this.changeForm.date = date
      this.changeForm.category = category
      this.changeForm.sortDate = sortDate
      this.changeForm.oldSortDate = sortDate
      this.changeForm.checkbox = 'unchecked'
      this.showFindChange = false
    },
  },



  mounted() {
    this.getData()
  },

  computed:{
    rows() {
      return this.pageData.length
    }
  }

}
</script>

<style scoped>
#box{
  padding: 20px;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  margin: 20px auto;
}
h4{
  color: #800001;
}
hr{
  height: 1px;
  background-color: #800001;
  color: #800001;
}
.button{
  background-color: #800001;
}
.deleteButton{
  background-color: #CEC094;
  color: #800001;
}
.changeButton{
  background-color: #CEC094;
  color: #800001;
  margin-left: 10px;
}
ul{
  list-style: none;
}
</style>
