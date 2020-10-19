<template>
  <div id="box">
<!--    <div>-->
<!--      {{addProduct}}-->
<!--      <b-form @submit.prevent="addProductFunction">-->
<!--        <h4>Add product</h4>-->
<!--        <span>Please make sure the product is not listed</span>-->
<!--        <hr>-->
<!--        <b-form-group label-cols="4" label-cols-lg="2" label="Product name:">-->
<!--          <b-form-input v-model="addProduct.name" type="text" required placeholder="Enter product name"></b-form-input>-->
<!--        </b-form-group>-->
<!--        <b-form-group label-cols="4" label-cols-lg="2" label="Product price:">-->
<!--          <b-form-input v-model="addProduct.price" type="number" required placeholder="Enter product price"></b-form-input>-->
<!--        </b-form-group>-->
<!--        <b-form-group label-cols="4" label-cols-lg="2" label="Product size:">-->
<!--          <b-form-input v-model="addProduct.size" type="text" required placeholder="Enter product size"></b-form-input>-->
<!--        </b-form-group>-->
<!--        <b-form-group label-cols="4" label-cols-lg="2" label="Product amount:">-->
<!--          <b-form-input v-model="addProduct.amount" type="number" required placeholder="Enter product amount"></b-form-input>-->
<!--        </b-form-group>-->
<!--        <b-form-group label-cols="4" label-cols-lg="2" label="Product picture:">-->


          <div size="120" class="user" style="margin: 0 auto">
            <b-button @click="$refs.FileInput.click()">add picture</b-button>
            <input ref="FileInput" type="file" style="display: none;" @change="onFileSelect" />
          </div>
          <b-container v-model="dialog" width="500">
            <b-card>
              <b-card-text>
                <VueCropper v-show="selectedFile" ref="cropper" :src="selectedFile" alt="Source Image"></VueCropper>
              </b-card-text>
              <b-card>
                <b-btn class="primary" @click="saveImage() (dialog = false)">Crop</b-btn>
              </b-card>
            </b-card>
          </b-container>



<!--        </b-form-group>-->
<!--        <b-form-group label-cols="4" label-cols-lg="2" label="Product description:">-->
<!--          <b-form-textarea rows="3" v-model="addProduct.description" type="text" required placeholder="Enter product description"></b-form-textarea>-->
<!--        </b-form-group>-->
<!--        <b-form-group label-cols="4" label-cols-lg="2" label="Product category:">-->
<!--          <b-form-input v-model="addProduct.category" type="text" required placeholder="Enter product description"></b-form-input>-->
<!--        </b-form-group>-->
<!--        <b-button type="submit">Add</b-button>-->
<!--      </b-form>-->
<!--    </div>-->

<!--    <div>-->
<!--      <h4>Change product</h4>-->
<!--      <hr>-->
<!--      <b-form>-->
<!--        <b-form-group label-cols="4" label-cols-lg="2" label="Product name:">-->
<!--          <b-form-input v-model="searchProduct" type="text" required placeholder="Enter product name"></b-form-input>-->
<!--        </b-form-group>-->
<!--        <b-button type="submit">Search</b-button>-->
<!--      </b-form>-->

<!--      <div>-->
<!--        <li>{{this.findProduct.name}}</li>-->
<!--        <li>{{this.findProduct.price}}</li>-->
<!--        <li>{{this.findProduct.size}}</li>-->
<!--        <b-button>delete</b-button>-->
<!--        <b-button>change</b-button>-->
<!--        <b-form>-->
<!--          <b-form-group label-cols="4" label-cols-lg="2" label="Product name:">-->
<!--            <b-form-input v-model="addProduct.name" type="text" required></b-form-input>-->
<!--          </b-form-group>-->
<!--          <b-form-group label-cols="4" label-cols-lg="2" label="Product price:">-->
<!--            <b-form-input v-model="addProduct.price" type="number" required></b-form-input>-->
<!--          </b-form-group>-->
<!--          <b-form-group label-cols="4" label-cols-lg="2" label="Product size:">-->
<!--            <b-form-input v-model="addProduct.size" type="number" required></b-form-input>-->
<!--          </b-form-group>-->
<!--          <b-form-group label-cols="4" label-cols-lg="2" label="Product amount:">-->
<!--            <b-form-input v-model="addProduct.amount" type="number" required></b-form-input>-->
<!--          </b-form-group>-->
<!--          <b-form-group label-cols="4" label-cols-lg="2" label="Product description:">-->
<!--            <b-form-textarea rows="3" v-model="addProduct.description" type="text" required></b-form-textarea>-->
<!--          </b-form-group>-->
<!--          <b-form-group label-cols="4" label-cols-lg="2" label="Product category:">-->
<!--            <b-form-input v-model="addProduct.category" type="text" required></b-form-input>-->
<!--          </b-form-group>-->
<!--          <b-button type="submit">Add</b-button>-->
<!--        </b-form>-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import VueCropper from "vue-cropperjs";

export default {
  components: { VueCropper },
  props: ['image_name'],
  data() {
    return{
      mime_type: '',
      cropedImage: '',
      autoCrop: false,
      selectedFile: '',
      image: '',
      dialog: false,
      files: '',

      //
      // searchProduct: '',
      //
      // addProduct: {
      //   name: '',
      //   price: '',
      //   size: '',
      //   amount: '',
      //   description: '',
      //   category: '',
      //   picture: '',
      // },
      //
      // findProduct: {
      //   name: '',
      //   price: '',
      //   size: '',
      //   amount: '',
      //   description: '',
      //   category: '',
      // }
    }
  },

  methods: {
    saveImage() {
      this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL()
      this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
        const formData = new FormData()
        formData.append('profile_photo', blob, 'name.jpeg')
        formData.append('email', this.userPhoto.email)
        this.$axios.post('profile/changePhoto', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res=>{
          this.userPhoto.path = "http://localhost:3000/" + res.data
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
  }
}
</script>

<style scoped>
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
