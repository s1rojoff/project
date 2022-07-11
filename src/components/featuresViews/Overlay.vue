<template>
    <div    :class="className" class=" w-full justify-end">
        <button class="max-w-xl">
        <img @click="Clicked=true" src="../../assets/img/video-preview-features.webp" class=" w-full" alt="">
    </button>
        <overlay-video :isClicked="Clicked"></overlay-video>   
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
            Clicked : false
        }
    },
    methods : {
        Debugger(){
            console.log(Clicked);
        }
    }
}
</script>

<style>

</style>