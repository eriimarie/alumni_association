<template>
  <div id="box">
    {{addProduct}}
    <div>
      <b-form @submit.prevent="addProductFunction">
        <h4>Add product</h4>
        <span>Please make sure the product is not listed</span>
        <hr>
        <div v-show="isShowAdd">
          <b-form-group label-cols="4" label-cols-lg="2" label="Product name:">
            <b-form-input v-model="addProduct.name" type="text" required placeholder="Enter product name"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product price:">
            <b-form-input v-model="addProduct.price" type="number" required placeholder="Enter product price"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product size:">
            <b-form-input v-model="addProduct.size" type="text" required placeholder="Enter product size"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product amount:">
            <b-form-input v-model="addProduct.amount" type="number" required placeholder="Enter product amount"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product description:">
            <b-form-textarea rows="3" v-model="addProduct.description" type="text" required placeholder="Enter product description"></b-form-textarea>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product category:">
            <b-form-input v-model="addProduct.category" type="text" required placeholder="Enter product description"></b-form-input>
          </b-form-group>
          <b-button type="submit">Next</b-button>
        </div>
      </b-form>
    </div>

    <div v-show="isShowCrop">
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
    </div>

    <div>
      <h4>Change product</h4>
      <hr>
      <b-form @submit.prevent="findProductFunction">
        <b-form-group label-cols="4" label-cols-lg="2" label="Product name:">
          <b-form-input v-model="searchProduct" type="text" required placeholder="Enter product name"></b-form-input>
        </b-form-group>
        <b-button type="submit">Search</b-button>
      </b-form>

      <div v-show="isShowFind">
        <li>{{this.findProduct.name}}</li>
        <li>{{this.findProduct.price}}</li>
        <li>{{this.findProduct.amount}}</li>
        <b-button @click.prevent="deleteProductFunction(findProduct.name)">delete</b-button>
        <b-button>change</b-button>

        <b-form v-show="isShowResult">
          <b-form-group label-cols="4" label-cols-lg="2" label="Product name:">
            <b-form-input v-model="addProduct.name" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product price:">
            <b-form-input v-model="addProduct.price" type="number" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product size:">
            <b-form-input v-model="addProduct.size" type="number" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product amount:">
            <b-form-input v-model="addProduct.amount" type="number" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product description:">
            <b-form-textarea rows="3" v-model="addProduct.description" type="text" required></b-form-textarea>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="2" label="Product category:">
            <b-form-input v-model="addProduct.category" type="text" required></b-form-input>
          </b-form-group>
          <b-button type="submit">Next</b-button>
        </b-form>
      </div>

      <div>
        <h4>Career list</h4>
        <hr>
        <li v-for="(product, index) in productData" :key="index">
          {{product.name}}
          <br>
          {{product.price}}
          <br>
          {{product.amount}}
          <button @click.prevent="deleteProductFunction(product.name)">delete</button>
          <button @click.prevent="clickChangeProduct(index, product.name, product.price, product.size, product.amount, product.description, product.category)">change</button>
          <b-form @submit.prevent="submitChange" v-show="showChange[index]">
            <b-form-group label-cols="4" label-cols-lg="2" label="link:">
              <b-form-input v-model="changeForm.title" type="text" required></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="2" label="content:">
              <b-form-input v-model="changeForm.content" type="text" required></b-form-input>
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

      isShowAdd: true,
      isShowCrop: false,
      isShowCrop2: false,
      isShowFind: false,
      isShowResult: false,
      showFindChange: false,

      showChange: [false, false, false, false, false, false, false, false, false, false, false],
      searchProduct: '',
      productData:[],
      pageData:[],

      addProduct: {
        name: '',
        price: '',
        size: '',
        amount: '',
        description: '',
        category: '',
      },

      findProduct: {
        name: '',
        price: '',
        size: '',
        amount: '',
        description: '',
        category: '',
      }
    }
  },

  methods: {
    saveImage() {
      this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL()
      this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
        const formData = new FormData()
        formData.append('product_photo', blob, 'name.jpeg')
        formData.append('name', this.addProduct.name)
        this.$axios.post('/admin/addPhoto', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res=>{
          this.addProduct.path = "http://localhost:3000/" + res.data
        })
      }, this.mime_type)
      this.$router.go(0)
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

    async addProductFunction() {
      let result = false
      await this.$axios.get(`/admin/findProduct?name=${this.addProduct.name}`).then(res=>{
        if (res.data === 'not found') {
          result = true
        }
      })
      if (result) {
        await this.$axios.post('/admin/addProduct', this.addProduct).then(res=>{
          console.log(res.data)
          this.isShowAdd = false
          this.isShowCrop = true
        })
      } else {
        alert('product already exist')
        this.addProduct.description = ''
        this.addProduct.name = ''
        this.addProduct.amount = ''
        this.addProduct.category = ''
        this.addProduct.price = ''
        this.addProduct.size = ''
      }
    },

    async findProductFunction(){
      const url = `/admin/findProduct?name=${this.searchProduct}`
      await this.$axios.get(url).then(res=>{
        if (res.data === 'not found'){
          alert("product not exist")
        } else {
          this.findProduct.name = res.data.name
          this.findProduct.price = res.data.price
          this.findProduct.size = res.data.size
          this.findProduct.amount = res.data.amount
          this.findProduct.description = res.data.description
          this.findProduct.category = res.data.category
          this.isShowFind = true
        }
      })
    },
    async deleteProductFunction(name) {
      let answer = window.confirm("Are you sure?")
      if (answer){
        await this.$axios.post('/admin/deleteProduct', {name: name}).then(res=>{
          console.log(res.data)
          this.$router.go(0)
        })
      }
    },

    async getData() {
      await this.$axios.get('/admin/products').then(res=>{
        this.pageData = res.data
        let arrayLength
        if(this.pageData.length < 10){
          arrayLength = this.pageData.length
        } else {
          arrayLength = 10
        }
        for (let i = 0; i < arrayLength; i++){
          this.productData[i] = this.pageData[i]
        }
      })
    },
    clickChangeProduct(index, name, price, size, amount, description, category) {
      for (let i = 0; i < 11; i++){
        this.$set(this.showChange, i, false)
      }
      this.$set(this.showChange, index, !this.showChange[index])
      this.findProduct.name = name
      this.findProduct.price = price
      this.findProduct.size = size
      this.findProduct.amount = amount
      this.findProduct.description = description
      this.findProduct.category = category
      this.showFindChange = false
    },

    async changePage(currentPage) {
      const newUrl = `/resources/career/page?page=${currentPage}`
      await this.$axios.get(newUrl).then(res=>{
        this.productData = res.data
        for (let i = 0; i < 11; i++){
          this.$set(this.showChange, i, false)
        }
        this.showFindChange = false
        this.findProduct.name = res.data.name
        this.findProduct.price = res.data.price
        this.findProduct.size = res.data.size
        this.findProduct.amount = res.data.amount
        this.findProduct.description = res.data.description
        this.findProduct.category = res.data.category

      })
    },

    async submitChange() {
      await this.$axios.post('/admin/changeProduct', this.findProduct).then(res=>{
        console.log(res.data)
        this.$router.go(0)
      })
    }


  },

  mounted() {
    this.getData()
  },

  computed:{
    rows() {
      return this.pageData.length
    }
  },
}
</script>

<style scoped>
.profile-img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

</style>
