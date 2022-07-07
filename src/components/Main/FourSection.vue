<template>
<section class=" bg-orange-50 mt-2">
    <div class="grid grid-cols-2 gap-10 mt-10 ml-10 py-0 px-10">
        <div >
            <img src="./../../assets/img/peace@2x_158f4453627629ae1dd3ec115a559630.webp" alt=""
             class="w-4/5 h-full -top-7 relative">
              <hr class="bg-slate-400 w-4/5 -top-3">  
        </div>
         
        <div class=" items-center mt-32">
            <h1 class="text-5xl font-bold">
                Achieve peace of mind with Todoist
            </h1>
        <StartBtn/>
        
    </div>
   
    </div>
  </section>
</template>

<script>
import StartBtn from '../Navbar/StartBtn.vue'
export default {
    name: "FourSection",
    components:{StartBtn}
    
}
</script>

<style>

</style>