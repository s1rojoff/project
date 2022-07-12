<template>
  <section>
        <div>
            <aside>
                <form>
                    <div>
                        Search templates
                    </div>
                    <input-field>
                        <template #prepend>
                             <i class="el-icon-circle"></i>   
                        </template>
                    </input-field>
                </form>
            </aside>
        </div>
  </section>
</template>

<script>
import InputField  from '../helpers/InputField.vue'
export default {
    name : "CategorySec",
    components : {
        InputField,
    }
}
</script>

<style>

</style>