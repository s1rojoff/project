<template>
  <div>
    <FirstSection/>
    <SecondSection/>
    <FourSection/>
  </div>
</template>

<script>
import FirstSection from './FirstSection.vue';
import SecondSection from './SecondSection.vue';
import FourSection from './FourSection.vue';
export default {
    name: "VueMain",
    components: {
    FirstSection,
    SecondSection,
    FourSection
}
}
</script>

<style>

</style>