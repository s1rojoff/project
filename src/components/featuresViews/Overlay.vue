<template>
    <div    :class="className" class=" w-full justify-end">
        <button class="max-w-xl">
        <img @click="clicked = !clicked" src="../../assets/img/video-preview-features.webp" class=" w-full" alt="">
    </button>
        <overlay-video v-show="clicked"></overlay-video>   
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import overlayVideo from '../featuresViews/overlayVideo.vue'
export default {
    name:"featOverlay",
    components:{
        overlayVideo,
    },
    computed:{
        className(className){
            return{
                className
            }
        }
    },
    data() {
        return {
            clicked : this.$store.state.overlay
        }
    },
    mounted(){
        console.log(this.clicked)
    }
}
</script>

<style>

</style>