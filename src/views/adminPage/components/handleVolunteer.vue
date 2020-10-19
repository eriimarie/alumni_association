<template>
  <div id="box">
    <div>
      <b-form @submit.prevent="submitVolunteer">
        <h4>Add volunteer opportunity</h4>
        <hr>
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
        <b-button type="submit">Add Volunteer Opportunity</b-button>
      </b-form>
    </div>

    <div>
      <b-form>
        <h4>Find volunteer opportunity</h4>
        <hr>
        <b-form-group label-cols="4" label-cols-lg="2" label="title:">
          <b-form-input v-model="findTitle" type="text" required placeholder="Enter title"></b-form-input>
        </b-form-group>
        <b-button @click.prevent="submitFind(findTitle)">Find title</b-button>
      </b-form>
      <div v-show="showChange[10]">
        <li>{{changeForm.title}}</li>
        <li style="white-space: pre-line">{{changeForm.content}}</li>
        <li>{{changeForm.date}}</li>
        <li>{{changeForm.category}}</li>
        <button @click.prevent="deleteVolunteer(changeForm.sortDate)">delete</button>
        <button @click="showFindChange = !showFindChange">change</button>
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
        <b-button type="submit" >Submit change</b-button>
      </b-form>
    </div>

    <div>
      <h4>Career list</h4>
      <hr>
      <li v-for="(volunteer, index) in volunteerData" v-bind:key="index">
        {{volunteer.title}}
        <p style="white-space: pre-line">{{volunteer.content}}</p>

        <br>
        {{volunteer.date}}
        <br>
        {{volunteer.category}}
        <button @click.prevent="deleteVolunteer(volunteer.sortDate)">delete</button>
        <button @click.prevent="clickChangeVolunteer(index, volunteer.title, volunteer.content, volunteer.date, volunteer.category, volunteer.sortDate, volunteer.oldSortDate)">change</button>
        <b-form @submit.prevent="submitChange" v-show="showChange[index]">
          {{volunteer}}
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
          <b-button type="submit" >Submit change</b-button>
        </b-form>
        <hr>
      </li>
      <b-pagination
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
        alert(res.data)
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

</style>
