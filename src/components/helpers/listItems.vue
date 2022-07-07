<template>
    <ul>
        <li
        class="list-item p-1 hover:border-b border-b-black  "
         v-for="item in items" :key="item">
           <a href="#">{{item}}</a> 
        </li>
    </ul>
</template>

<script>
export default {
    name : "ListItems",
    props:{
        items:Array
    }

}
</script>

<style>

</style>