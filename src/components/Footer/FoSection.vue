<template>
  <footer :class="className" class="">
        <slot></slot>
  </footer>
</template>

<script>
export default {
    name: "FoSection",
    props:{
        bg : String
    },
    computed:{
        className(){
           return[
            this.bg ? this.bg : ""
           ]
        }
    }

}
</script>

<style>

</style>