<!-- JavaScript Code will go into Script setup tag, this is the same for all vue components -->
<script setup>

import { useStudentStore} from "../stores/StudentStore.js";
import { storeToRefs } from "pinia";

const studentStore = useStudentStore()
// const below is taking the mostRecentStudent function and putting that data in something I can use
const { mostRecentStudent } = storeToRefs(studentStore)


</script>


<!-- HTML Code will go into template tag below-->
<template>

<div id="welcome-or-goodbye-message" class="m-2">

  <!-- TODO show a message when student arrives or leaves  -->
  <div v-if="mostRecentStudent.name">

    <div v-if="mostRecentStudent.present" class="alert alert-success">
      Welcome, {{ mostRecentStudent.name }}!
    </div>
    <div v-else class="alert alert-info">
      Goodbye {{ mostRecentStudent.name }}, see you later!
    </div>

  </div>

</div>




</template>


<!-- Styles (CSS) for the component will go here-->
<!-- SCOPED Means that the styles within this tag will be confined to this component -->
<!-- TODO (FACT CHECK THIS) However, if this component has children, it will apply to them too -->
<style scoped>



</style>
