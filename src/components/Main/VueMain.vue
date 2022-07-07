<template>
  <div>
    <NavText/>
    <HeaderImgs/>
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
import NavText from '../Navbar/NavText.vue';
import HeaderImgs from '../Navbar/HeaderImgs.vue';

export default {
    name: "VueMain",
    components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourSection,
    NavText,
    HeaderImgs
}
}
</script>

<style>

</style>