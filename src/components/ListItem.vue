<template>
  <div style="height:80%">
    <h4><b>List Item</b></h4>
    <div class="list-item p-2 card">
      <ItemCard v-for="(item, idx) in cart" :key="idx" :item="item"/>
    </div>
    <div class="d-flex justify-content-between m-2">
      <h5><b>Total All: {{totalAll.toFixed(2)}}$</b></h5>
      <router-link to="/receipt" class="btn btn-primary" :class="((!cart.length)&&'disabled')">Check Out</router-link>
    </div>
  </div>
</template>

<script>
import ItemCard from './ItemCard'
import { mapState } from 'vuex'
export default {
  components: {
    ItemCard
  },
  computed: {
    ...mapState([
      'cart',
      'totalAll'
    ])
  },
  watch: {
    totalAll: function (val) {
      console.log(val)
    }
  }
}
</script>

<style>
  .list-item {
    overflow-y: auto;
    max-height: 58vh;
    min-height: 57vh;
  }
</style>
