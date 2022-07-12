<template>
<div v-show="isClicked" @click="isClicked= !isClicked" 
      class="w-screen h-screen bg-black z-20 flex my-0 mx-auto opacity-90 items-center justify-center fixed top-0 left-0">
    <div >
      
    <iframe
      class=" opacity-100"      
      width="1143"
      height="526"
      src="https://www.youtube.com/embed/8ZKq0r-g87M"
      title="What's Todoist?"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</div>
  
</template>

<script>
export default {
    name:"overlayVideo",
    data() {
      return {
        isClicked : this.$store.state.overlay 
      }
    },
    mounted(){
      console.log(this.isClicked)
    }
};
</script>

<style>
</style>