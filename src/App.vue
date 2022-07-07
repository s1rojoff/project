<template>
  <div>
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
  
</template>
<script>
import Navbar from "./components/Navbar/Navbar.vue"
import VueMain from "./components/Main/VueMain.vue"
import Footer from "./components/Footer/Footer.vue"
export default {
    components:{
    Navbar,
    VueMain,
    Footer
}
}
</script>

<style>

</style>