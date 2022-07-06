<template>
  <div class="block text-center w-auto mt-36">
        <h1 class="text-gray-900 text-5xl font-bold">Organize your</h1>
        <h1 class="text-gray-900 text-5xl font-bold">Work and life, finally.</h1>
        <span class="block text-gray-800 text-xl mt-5"> Become focused, organized, and calm with Todoist.</span>
        <span class="block text-gray-800 text-xl">The world’s #1 task manager and to-do list app.</span>
        <StartBtn/>
  </div>
</template>

<script>
import StartBtn from "./StartBtn.vue"
export default {
    name:"NavText",
    components:{StartBtn}
}
</script>

<style>

</style>