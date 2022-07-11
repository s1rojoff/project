<template>
  <div class="text-center">
    <div>
        <h1 class="text-6xl ml-80 font-bold w-3/6 text-center mt-14 text-gray-900">Organize your team with Todoist Business</h1>
     </div>
     <StartBtn class="w-52 mt-11 font-bold  ">Try free for 30 days</StartBtn>
    <p class="mt-4"> &rightarrow; <a class="text-cyan-600 hover:underline" href="#">See pricing</a></p>
  </div>
</template>

<script>
import StartBtn from "../Navbar/StartBtn.vue"
export default {
    name: "ForTeamsText",
    components: {StartBtn}
}
</script>

<style>

</style>