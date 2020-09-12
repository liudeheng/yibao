<template>
  <div class="outerbox">
    <info-form-item
      v-for="item in results"
      :info-item="item"
      >
    </info-form-item>
  </div>
</template>

<script>
import infoFormItem from './infoFormItem'


export default {
  name:"infoForm",
  data(){
    return {
    }
  },
  props:{
    results:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components: {
    infoFormItem,
  }
}
</script>

<style scoped>
   .outerbox {    
     height: 70%;
     overflow: auto;
   }
</style>