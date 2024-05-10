<script setup>

import { ref } from 'vue'


// This is making defining props and saving in const
  const props = defineProps( {
    student: Object
  })
const emit = defineEmits(['arrived-or-left', 'delete-student'])

const isStudentPresent = ref(props.student.present)

// function that is emitting arrivedorleft and isstudentpresent to parent
const notifyArrivedOrLeft = () => {
  emit('arrived-or-left', props.student, isStudentPresent.value)
}

// emitting the deleteStudent function so it can be used elsewhere
const confirmThenDeleteStudent = () => {
  emit('delete-student', props.student)
}

</script>


<template>

<tr v-bind:class="{ present: student.present, absent: !student.present }">

  <td> {{ student.name }} </td> <!-- .name is needed because otherwise all of the data in each place will be displayed -->
  <td> {{ student.starID }} </td>
  <td>
<!--    TODO v-model checkbox?-->
    <input type="checkbox" v-model="isStudentPresent" v-on:change="notifyArrivedOrLeft">
    <span v-if="student.present" class="mx-3">Here!</span>
    <span v-else class="mx-3">Not Present</span>
  </td>
  <td>
    <button v-on:click="confirmThenDeleteStudent" class="btn btn-danger">
      <i class="bi bi-trash-fill"></i> Delete
    </button>
  </td>
</tr>




</template>



<style scoped>

.present {
  color: gray;
  font-style: italic;
}

.absent {
  color: black;
  font-weight: bold;
}


</style>