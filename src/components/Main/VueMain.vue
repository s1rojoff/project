<template>
  <div>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
  </div>
</template>

<script>
import FirstSection from './FirstSection.vue';
import SecondSection from './SecondSection.vue';
import ThirdSection from './ThirdSection.vue';
export default {
    name: "VueMain",
    components: {
      FirstSection,
      SecondSection,
      ThirdSection
}
}
</script>

<style>

</style>