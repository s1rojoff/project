<template>
  <div>
    <Navbar/>
    <VueMain/>
  </div>
</template>
<script>
import Navbar from "./components/Navbar/Navbar.vue"
import VueMain from "./components/Main/VueMain.vue"
export default {
    components:{
      Navbar,
      VueMain
    }
}
</script>

<style>

</style>