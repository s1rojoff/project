<template>
  <div>
    <FirstSection/>
    <SecondSection/>
  </div>
</template>

<script>
import FirstSection from './FirstSection.vue';
import SecondSection from './SecondSection.vue';
export default {
    name: "VueMain",
    components: { 
        FirstSection, 
        SecondSection 
    }
}
</script>

<style>

</style>