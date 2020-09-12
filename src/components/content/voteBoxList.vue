<template>
  <div class="outerbox">
    <vote-box-list-item
      v-for="item in results"
      :vote-item="item"
      >
    </vote-box-list-item>
  </div>
</template>

<script>
import voteBoxListItem from './voteBoxListItem'


export default {
  name:"voteBoxList",
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
    voteBoxListItem,
  }
}
</script>

<style scoped>
   .outerbox {
     
     height: 60%;
     overflow: auto;
   }
</style>