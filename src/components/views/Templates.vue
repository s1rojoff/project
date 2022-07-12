<template>
  <div>
    <TempHeaderText/>
    <TempFirstSec/>
    <category-sec/>
  </div>
</template>

<script>
import TempHeaderText from '../templatesViews/TempHeaderText.vue';
import TempFirstSec from '../templatesViews/TempFirstSec.vue';
import CategorySec from '../templatesViews/CategorySec.vue';
export default {
    name: "Templates",
    components: { TempHeaderText, TempFirstSec , CategorySec }
}
</script>

<style>

</style>