<!-- TODO make sure this is correct -- App. vue is the container, so the parent?-->
<!-- JavaScript Code will go into Script setup tag, this is the same for all vue components -->
<script setup>

// These are making sure that all the code can talk to each other BELOW
import NewStudentForm from "./components/NewStudentForm.vue";
import StudentMessage from "./components/StudentMessage.vue";
import StudentTable from "./components/StudentTable.vue";

</script>


<!-- HTML Code will go into template tag below-->
<template>

  <student-message>

  </student-message>

  <student-table>

  </student-table>

  <new-student-form>

  </new-student-form>

</template>


<!-- Styles (CSS) for the component will go here-->
<!-- SCOPED Means that the styles within this tag will be confined to this component -->
<!-- TODO (FACT CHECK THIS) However, if this component has children, it will apply to them too -->
<style scoped>



</style>
