<template>
  <div>
    <div size="120" class="user">
      <b-img :src="image_name" class="profile-img"></b-img>
      <b-icon class="icon primary white--text" @click="$refs.FileInput.click()">mdi-upload</b-icon>
      <input ref="FileInput" type="file" style="display: none;" @change="onFileSelect" />
    </div>
    <b-dialog v-model="dialog" width="500">
      <b-card>
        <b-card-text>
          <VueCropper v-show="selectedFile" ref="cropper" :src="selectedFile" alt="Source Image"></VueCropper>
        </b-card-text>
        <b-card-actions>
          <b-btn class="primary" @click="saveImage(), (dialog = false)">Crop</b-btn>
          <b-btn color="primary" text @click="dialog = false">Cancel</b-btn>
        </b-card-actions>
      </b-card>
    </b-dialog>
  </div>
</template>


<script>
import VueCropper from "vue-cropperjs";
import 'cropperjs/dist/cropper.css'

export default {
  components: { VueCropper },
  props: ['image_name'],
  data() {
    return {
      mime_type: '',
      cropedImage: '',
      autoCrop: false,
      selectedFile: '',
      image: '',
      dialog: false,
      files: '',
    }
  },
  methods: {
    saveImage() {
      this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL()
      this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
        const formData = new FormData()
        formData.append('profile_photo', blob, 'name.jpeg')
        this.$axios.post('profile/changePhoto', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res=>{
          alert(res.data)
        })
      }, this.mime_type)
    },
    onFileSelect(e) {
      const file = e.target.files[0]
      this.mime_type = file.type
      console.log(this.mime_type)
      if (typeof FileReader === 'function') {
        this.dialog = true
        const reader = new FileReader()
        reader.onload = (event) => {
          this.selectedFile = event.target.result
          this.$refs.cropper.replace(this.selectedFile)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
  },
}
</script>
<style scoped>
.user {
  width: 140px;
  height: 140px;
  border-radius: 100%;
  border: 3px solid #2e7d32;
  position: relative;
}
.profile-img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.icon {
  position: absolute;
  top: 10px;
  right: 0;
  background: #e2e2e2;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  color: #0000ff;
  font-size: 14px;
  cursor: pointer;
}
</style>


















































<!--<template>-->
<!--  <div id="box">-->
<!--    <b-container>-->
<!--      <b-row>-->
<!--        <b-col sm="6">-->
<!--          <b-form @submit="changePhoto">-->
<!--            <b-img :src="require(`@/assets/userPhotos/${userPhoto.photo}`)" height="100" width="100"></b-img>-->
<!--            <button id="pick-avatar">Select an image</button>-->
<!--            <avatar-cropper-->
<!--                @uploaded="changePhoto"-->
<!--                trigger="#set-avatar"-->
<!--                upload-url="src/assets/userPhotos"-->
<!--            />-->
<!--            {{userPhoto}}-->
<!--          </b-form>-->
<!--        </b-col>-->
<!--        <b-col sm="6">-->
<!--          <b-form @submit.prevent="changeDescription">-->
<!--            <h4>Change my description</h4>-->
<!--            <hr>-->
<!--            <b-form-textarea v-model="userDescription.description" rows="5"></b-form-textarea>-->
<!--            <b-button type="submit">Change description</b-button>-->
<!--          </b-form>-->
<!--        </b-col>-->
<!--      </b-row>-->
<!--    </b-container>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import AvatarCropper from 'vue-avatar-cropper'-->

<!--export default {-->
<!--  components: { AvatarCropper },-->
<!--  data() {-->
<!--    return{-->
<!--      userPhoto: {-->
<!--        email: '',-->
<!--        photo: '',-->
<!--      },-->
<!--      userDescription: {-->
<!--        email: '',-->
<!--        description: ''-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--  this.getData()-->
<!--  },-->
<!--  methods:{-->
<!--    async getData(){-->
<!--      await this.$axios.post('/profile/user', {email:this.$cookies.get('email')}).then(res=>{-->
<!--        const data = res.data-->
<!--        this.userPhoto.email = data.email-->
<!--        this.userDescription.email = data.email-->
<!--        this.userPhoto.photo = data.photo-->
<!--        this.userDescription.description = data.description-->
<!--      })-->
<!--    },-->
<!--    async changeDescription() {-->
<!--      await this.$axios.post('/profile/changeDescription', this.userDescription).then(res=>{-->
<!--        alert(res.data)-->
<!--      })-->
<!--    },-->
<!--    changePhoto() {-->
<!--      alert(this.userPhoto.photo)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
