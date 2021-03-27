<template>
  <div class="card shadow p-3">
    <div class="mb-3" style="text-align: left">
      <label for="name" class="form-label"><b>Item's Name:</b></label>
      <input type="text" class="form-control" id="name" v-model="name">
    </div>
    <div class="mb-3" style="text-align: left">
      <label for="category" class="form-label"><b>Item's Category</b></label>
      <select class="form-select" id="category" v-model="category">
        <option value="Book">Book</option>
        <option value="Food">Food</option>
        <option value="Medical">Medical</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div class="mb-3" style="text-align: left">
      <label for="quantity" class="form-label"><b>Quantity</b></label>
      <input type="number" class="form-control" id="quantity" v-model="quantity" min="0">
    </div>
    <div class="mb-3" style="text-align: left">
      <label for="price" class="form-label"><b>Price per Item</b></label>
      <input type="number" class="form-control" id="price" v-model="price" min="0" step="0.01">
    </div>
    <div class="mb-3 form-check" style="text-align: left">
      <input type="checkbox" class="form-check-input" id="imported" v-model="imported">
      <label class="form-check-label" for="imported"><b>Imported</b></label>
    </div>
    <button class="btn btn-success" :class="name?'':'disabled'" @click.prevent="Add">Add to Cart</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      category: 'Book',
      quantity: 0,
      price: 0,
      imported: false
    }
  },
  methods: {
    Add () {
      const category = this.category
      const quantity = Number(this.quantity)
      const price = Number(this.price)
      const imported = this.imported
      let tax = 0
      let taxImport = 0

      if (category === 'Other') {
        tax = (quantity * price) * 10 / 100
      }
      if (imported) {
        taxImport = (quantity * price) * 5 / 100
      }
      tax = Number(tax.toFixed(2))
      taxImport = Number(taxImport.toFixed(2))
      const totalTaxes = this.round_nearest(tax + taxImport)
      let total = (quantity * price) + totalTaxes
      total = Number(total.toFixed(2))
      console.log(total)
      this.$store.dispatch('addItem', {
        name: this.name,
        category,
        quantity,
        price,
        imported,
        tax,
        taxImport,
        totalTaxes,
        total
      })
    },
    round_nearest (num) {
      let result = Math.floor(num * 100) / 100
      const lastDigit = Math.abs(Math.floor(result * 100) - (Math.floor(result * 10) * 10)) / 100
      console.log(num, lastDigit, Math.floor(result * 100), (Math.floor(result * 10) * 10))
      if (lastDigit === 0.00) {} else if (lastDigit > 0.05) {
        result = result - lastDigit + 0.10
      } else if (lastDigit < 0.05) {
        result = result - lastDigit + 0.05
      }
      console.log(result.toFixed(2))
      return Number(result.toFixed(2))
    }
  }
}
</script>

<style>
</style>
