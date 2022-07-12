<template>
  <div v-show="isClicked" @click="isClicked=false" class="w-screen h-screen bg-black ml-14 z-20
   flex my-0 mx-auto  items-center
  relative top-0 left-0">
    <iframe
      class=""      
      width="1143"
      height="526"
      src="https://www.youtube.com/embed/8ZKq0r-g87M"
      title="What's Todoist?"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
    name:"overlayVideo",
    props:{
        isClicked : false ||Boolean
    }
};
</script>

<style>
</style>