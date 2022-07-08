<template>
  <section class="flex">
    <div >
      <img
        src="./../../assets/img/features-hero-bg-w_1460.webp"
        class="w-full h-full"
        alt=""
      />
      
        <div class="w-3/6 absolute top-52 left-96">
          <h1 class="text-7xl font-bold text-center mb-4">
          From overwhelmed to on top of it
        </h1>
        <p class="text-center ml-16  font-normal text-xl w-5/6">
          Todoist gives you the confidence that everything’s organized and
          accounted for, so you can make progress on the things that are
          important to you.
        </p>
    
        
        <feat-overlay></feat-overlay>
      </div>
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
</style>