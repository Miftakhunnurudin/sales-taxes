<template>
  <div class="container">
    <h1>Receipt</h1>
    <div v-if="cart.length">
      <ItemCard v-for="(item, idx) in cart" :key="idx" :item="item"/>
    </div>
    <h3>Total Taxes : {{totalTaxes.toFixed(2)}}</h3>
    <h1>Total All : {{totalAll.toFixed(2)}}</h1>
  </div>
</template>

<script>
import ItemCard from '../components/ItemCard'
import { mapState } from 'vuex'
export default {
  components: {
    ItemCard
  },
  computed: {
    ...mapState([
      'cart',
      'totalAll',
      'totalTaxes'
    ])
  }
}
</script>
