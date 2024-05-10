<!-- JavaScript Code will go into Script setup tag, this is the same for all vue components -->
<script setup>

// This is importing the ability to use ref in the code. importing from Vue.
import { ref } from 'vue'

// importing useStudentStore from StudentStore.js Store
import { useStudentStore }  from "../stores/StudentStore.js";

// This is taking the imported useStudentStore, and essentially renaming it and making it a const, something we can call and use in other places in this file of Vue code
const studentStore = useStudentStore()




// create reactive data
const newStudentName = ref('')
const newStarID = ref('')

// Variable const for the displayed message if stuff is not entered
const formErrors = ref([])

//  TODO find answer --  the syntax makes this a const while also using it as a function? I think?
const addStudent = () => {

  // resets the form errors
  formErrors.value = []

  //checking to see if there is a name or not, if not it is displaying a message
  if (!newStudentName.value) {
    formErrors.value.push('Student Name must be entered')
  }

  // This is giving user a message if no Star ID is entered.
  if (!newStarID.value) {
    formErrors.value.push('StarID must be entered')
  }

  // no errors if the form correct, this is saying if the formErrors array is empty, as in 0 errors, then we can proceed
  if (formErrors.value.length === 0) {
    let student = {
      name: newStudentName.value, //do not forget .value because newStudentName is reactive data.
      starID: newStarID.value,
      present: false
    }
    // TODO - how to add student? ------ DONE
      studentStore.addNewStudent(student)

    newStudentName.value = ''
    newStarID.value = ''
  }
}


</script>


<!-- HTML Code will go into template tag below-->
<template>

<div id="new-student-form-errors" class="m-2">
  <div v-if="formErrors.length > 0" class="alert alert-danger">
    <li v-for="error in formErrors">
      {{ error }}
    </li>
  </div>
</div>

<div id="new-student-form" class="card add-student m-2 p-2">
  <h4 class="card-title">Add new student</h4>

  <div class="form-group mb-3">
    <label for="name">Name</label>
    <input v-model.trim="newStudentName" id="name" class="form-control">
  </div>

  <div class="form-group mb-3">
    <label for="starID">Star ID</label>
    <input v-model.trim="newStarID" id="starID" class="form-control"> <!--v-model is what is allowing us to get the real time update from both the name slot and Star ID slot -->
  </div>

  <button v-on:click="addStudent" class="btn btn-primary">Add</button>

</div>




</template>


<!-- Styles (CSS) for the component will go here -->
<!-- SCOPED Means that the styles within this tag will be confined to this component -->
<!-- TODO (FACT CHECK THIS) However, if this component has children, it will apply to them too -->
<style scoped>



</style>
