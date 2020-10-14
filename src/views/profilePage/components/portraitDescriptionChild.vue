<template>
  <div id="box">
    <b-container>
      <b-row>
        <b-col sm="6">
          <b-form @submit="changePhoto">
            <b-img :src="require(`@/assets/userPhotos/${userPhoto.photo}`)" height="100" width="100"></b-img>
            <button id="pick-avatar">Select an image</button>
            <avatar-cropper
                @uploaded="changePhoto"
                trigger="#set-avatar"
                upload-url="src/assets/userPhotos"
            />
            {{userPhoto}}
          </b-form>
        </b-col>
        <b-col sm="6">
          <b-form @submit.prevent="changeDescription">
            <h4>Change my description</h4>
            <hr>
            <b-form-textarea v-model="userDescription.description" rows="5"></b-form-textarea>
            <b-button type="submit">Change description</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import AvatarCropper from 'vue-avatar-cropper'

export default {
  components: { AvatarCropper },
  data() {
    return{
      userPhoto: {
        email: '',
        photo: '',
      },
      userDescription: {
        email: '',
        description: ''
      }
    }
  },
  mounted() {
  this.getData()
  },
  methods:{
    async getData(){
      await this.$axios.post('/profile/user', {email:this.$cookies.get('email')}).then(res=>{
        const data = res.data
        this.userPhoto.email = data.email
        this.userDescription.email = data.email
        this.userPhoto.photo = data.photo
        this.userDescription.description = data.description
      })
    },
    async changeDescription() {
      await this.$axios.post('/profile/changeDescription', this.userDescription).then(res=>{
        alert(res.data)
      })
    },
    changePhoto() {
      alert(this.userPhoto.photo)
    }
  }
}
</script>

<style scoped>

</style>
