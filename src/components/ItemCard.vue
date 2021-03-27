<template>
  <div class="card mb-2 p-2 m-2">
    <div class="d-flex justify-content-between bg-secondary p-1 text-light rounded">
      <b>Name: {{item.name}}</b><b>Category: {{item.category}}</b><b>{{item.imported? 'Imported' : 'Not imported'}}</b>
    </div>
    <div style="text-align:left;margin-left:10px">
      Cost: {{item.quantity}} x {{item.price}}$ = {{(item.quantity * item.price).toFixed(2)}}$ <br>
      <span style="font-size:15px">
      +tax: {{item.tax}}<br>
      +import: {{item.taxImport}}<br>
      </span>
      <b>Total: {{item.total}}$</b>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'item'
  ]
}
</script>

<style>

</style>
