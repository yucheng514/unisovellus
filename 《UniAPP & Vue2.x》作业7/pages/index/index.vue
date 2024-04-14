<template>
  <div id="app">
    <h2>物品清单</h2>
    <ProductList/>
	<br />
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from '../../components/ProductList.vue'
import ShoppingCart from '../../components/ShoppingCart.vue'

export default {
  components: { ProductList, ShoppingCart }
}
</script>

<style>
	
</style>
