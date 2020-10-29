<template>
  <div>

    <b-card v-for="product in productData" v-bind:key="product">
      <!--      <b-img :src="require('../../../assets/shoppingImg/1.png')"></b-img>-->
      <b-img :src="'http://localhost:3000/'+product.path" class="profile-img"></b-img>
      <b-card-text>Product name: {{product.name}}</b-card-text>
      <b-card-text>Unit price: {{product.price}}</b-card-text>
      <b-card-text>Available amount: {{product.amount}}</b-card-text>
      <b-card-text>Available amount: {{product.path}}</b-card-text>
      <!--      <b-form-input id="input-4" v-model="form.amount" type = "number" required placeholder="Chose available amounts.">-->

      <!--      </b-form-input>-->

      <b-button href="#" variant="primary">Add to cart</b-button>
    </b-card>
    <b-pagination
        v-model="CurrentPage"
        :total-rows="rows"
        :per-page="10"
        @click.native="changePage(CurrentPage)"
    ></b-pagination>
    <!--    <b-form v-for="">-->
    <!--    <b-form-group label-cols="4"  id="input-group-1" label="ProductName:" label-for="input-1">-->
    <!--      <b-form-input id="input-1" v-model="form.name" type="text" required placeholder="Enter product's name here."-->
    <!--      ></b-form-input>-->
    <!--    </b-form-group>-->
    <!--    </b-form>-->
    <!--    <b-pagination -->
    <!--        v-model = "currentPage"-->
    <!--        :total-rows="rows"-->
    <!--        :per-page="10"-->
    <!--        @click.native = "changePage(currentPage)">-->

    <!--    </b-pagination>-->
    <!--      <div class="col-md-3 card" v-for="product in productInfo" v-bind:key="product" >-->
    <!--          <div class="card-content">-->
    <!--              <div class = "card-img" id="img" alt="not available yet"><img class="card-img-top" v-lazy="'src/assets/shoppingImg/${product.image}'"></div>-->
    <!--              <h4 class="card-title">{{product.name}}</h4>-->
    <!--              <p class="card-text">Price: <em>$</em><span>{{product.price}}</span></p>-->
    <!--              <p class="card-text">Availability:{{product.amount}}</p>-->
    <!--&lt;!&ndash;              <button class="btn btn-danger pay-btn" @click="addCart(product._id,product.name,product.price,product.image)">Buy now</button>&ndash;&gt;-->
    <!--          </div>-->
    <!--      </div>-->
    <!--  </div>-->
    <!--    {{productInfo}}-->
  </div>
</template>


<script>
// import {sortByUp} from "@/utils";
const url = '/admin/products';

export default {
  data(){
    return{
      productData:[],
      currentPage:1,
      pageData:[],
      // amount:'',

      // pageData:,
    }

  },
  mounted() {
    this.getData()
  },
  methods:{
    // async getData(){
    //   await this.$axios.get('/admin/products').then(res=>{
    //     this.productInfo = res.data
    //
    //   })
    //
    // },
    async changePage(currentPage) {
      const newUrl = `/shopping/page?page=${currentPage}`
      await this.$axios.get(newUrl).then(res=>{
        this.productData = res.data
      })
    },
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
          this.productData[i] = this.pageData[i]
        }
      })
    }
    // async changePage(currentPage){
    //   const
    // }
    //   // addCart(id,name,price,image){
    //   let cartList = JSON.parse(localStorage.getItem('cartList'));
    //   if (this.$store.state.userInfo.isLogin){
    //     if (cartList && cartList.length > 0){
    //         let newList;
    //         for (let i in cartList){
    //
    //           if (id === cartList[i].id) {
    //             newList = [...cartList, ...[{id, name, price, image, checked: cartList[i].checked}]];
    //           } else {
    //             newList = [...cartList,...[{id,name,price,image,checked:true}]];
    //           }
    //         }
    //         const sortedNewList = sortByUp(newList,'price');
    //         localStorage.setItem('cartList', JSON.stringify(sortedNewList));
    //         this.$store.dispatch('upDateActionCart',sortedNewList);
    //     } else {
    //         let list = [{id,name,price,image,checked:true}];
    //         this.$store.dispatch('UpdateActionCart',list);
    //         localStorage.setItem('cartList', JSON.stringify(list));
    //
    //     }
    //   } else {
    //     this.$router.push({path:'/signIn'});
    //   }
    // }
  },
  // computed:{
  //   rows(){
  //     return this.pageData.length
  //   }
  // }
  computed:{
    rows() {
      return this.pageData.length
    }
  }
}


</script>

<style scoped>

</style>