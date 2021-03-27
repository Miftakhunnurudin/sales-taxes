<template>
  <div class="container">
    <div class="row">
      <div class="col p-3 form-input">
        <Form/>
      </div>
      <div class="col ml-3 mr-3 shadow card p-3">
        <ListItem style="height:100%"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '../components/Form'
import ListItem from '../components/ListItem'

export default {
  name: 'Home',
  components: {
    Form,
    ListItem
  }
}
</script>
<style>
  .form-input {
    padding: 0 50px!important;
  }
</style>
