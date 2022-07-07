<template>
    <button class="bg-red-600 text-white rounded-lg w-32 ml-3 font-bold outline-0 mt-3 h-11 hover:bg-red-500">Start for free</button>
</template>

<script>
export default {
    name: "StartBtn",
    props:{
        bg : String,
        textcolor: String,
        Bradius : String,
        weight: String,
        outline: String,
        hover: String
    },
}
</script>

<style>

</style>