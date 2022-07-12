<template>
  <section class="bg-accent-dark bg-cover bg-features w-full h-screen flex">
      <div class="w-3/6 my-12 mx-auto">
          <h1 class="text-7xl font-bold text-center mb-4">
          From overwhelmed to on top of it
        </h1>
        <p class="text-center ml-16  font-normal text-xl w-5/6">
          Todoist gives you the confidence that everything’s organized and
          accounted for, so you can make progress on the things that are
          important to you.
        </p>
    
        
        <feat-overlay class="ml-32 mt-20 flex justify-end"></feat-overlay>
      </div>
  </section>
</template>

<script>;
import featOverlay from './Overlay.vue';
export default {
  components:{featOverlay},
  name: "FeatFirstSec",
};
</script>

<style>
 .bg-features{
    background-image: url("./../../assets/img/features-hero-bg-w_1460.webp");
    background-size: cover;
    background-repeat: no-repeat;
 }
</style>