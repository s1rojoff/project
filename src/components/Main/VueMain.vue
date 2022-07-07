<template>
  <div>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <four-section/>
  </div>
</template>

<script>
import FirstSection from './FirstSection.vue';
import FourSection from './FourSection.vue';
import SecondSection from './SecondSection.vue';
import ThirdSection from './ThirdSection.vue';
export default {
    name: "VueMain",
    components: {
      FirstSection,
      SecondSection,
      ThirdSection,
        FourSection
}
}
</script>

<style>

</style>