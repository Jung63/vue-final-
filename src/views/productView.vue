<template>
  <div class="container">
    <div
      style="
        min-height: 400px;
        background-size: cover;
        background-position: center center;
      "
      :style="{ backgroundImage: `url(${product.imageUrl})` }"
    ></div>
    <div class="row justify-content-between mt-4 mb-7">
      <div class="col-md-7">
        <h2 class="mb-0">{{ product.title }}</h2>
        <p class="fw-bold">NT$ {{ product.price }}</p>
        <p>
          {{ product.description }}
        </p>
        <div class="my-4">
          <img
            v-for="image in product.imagesUrl"
            :key="image"
            :src="image"
            :alt="product.title"
            class="img-fluid mt-4"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="input-group mb-3 border mt-3">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-dark rounded-0 border-0 py-3"
              type="button"
              id="button-addon1"
            >
              <i class="fas fa-minus"></i>
            </button>
          </div>
          <input
            type="text"
            class="form-control border-0 text-center my-auto shadow-none"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            value="1"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-dark rounded-0 border-0 py-3"
              type="button"
              id="button-addon2"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          @click="addToCart(product.id)"
        >
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/utils/emitter'

export default {
  data () {
    return {
      product: []
    }
  },
  // 取得單一特定產品資訊
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(url).then((res) => {
        this.product = res.data.product
      })
    },
    addToCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        product_id: this.id,
        qty: 1
      }
      this.$http.post(url, { data }).then((res) => {
        console.log(res)
        emitter.emit('get-cart')
      })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getProduct()
  }
}
</script>
