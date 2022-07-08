<template>
  <div>
    <TempHeaderText/>
    <TempFirstSec/>
  </div>
</template>

<script>
import TempHeaderText from '../templatesViews/TempHeaderText.vue';
import TempFirstSec from '../templatesViews/TempFirstSec.vue';
export default {
    name: "Templates",
    components: { TempHeaderText, TempFirstSec }
}
</script>

<style>

</style>