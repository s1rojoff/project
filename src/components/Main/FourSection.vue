<template>
  <section class="bg-orange-50 h-4/5 mt-10">
    <div class="grid grid-cols-2 gap-10 mt-10 ml-10 py-0 px-10">
      <div class="h-auto ">
        <img
          src="./../../assets/img/peace@2x_158f4453627629ae1dd3ec115a559630.webp"
          alt=""
          class="w-2/3 h-full -top-11 relative ml-10"
        />
      </div>

      <div class="flex items-center justify-center flex-col">
        <div>
          <h1 class="text-4xl font-bold">Achieve peace of mind with Todoist</h1>
          <StartBtn />
        </div>
      </div>
    </div>
    <hr class="bg-slate-400 w-4/5 my-0 mx-auto" />
  </section>
</template>

<script>
import StartBtn from "../Navbar/StartBtn.vue";
export default {
  name: "FourSection",
  components: { StartBtn },
};
</script>

<style>
</style>