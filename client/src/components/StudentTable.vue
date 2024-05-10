<!-- JavaScript Code will go into Script setup tag, this is the same for all vue components -->
<script setup>

// TODO this is importing the StudentStore function from StudentStore.js to use,
  import { useStudentStore } from "../stores/StudentStore.js";

  //  This is pinia function converts properties in store to refs
  import { storeToRefs } from 'pinia'

  import { computed } from 'vue'

  // This is importing Student row file
  import StudentRow from "./StudentRow.vue";


// We are making a call to this function or ref, so it can be used in this
const studentStore = useStudentStore()

// Converting things is store to refs in script, and getting the sortedStudents and studentCount that is being returned in StudentStore
const { sortedStudents, studentCount }  = storeToRefs(studentStore)

// This const function is taking the delete student that we returned from the store, and calling it when we use the delete button that is in the HTML below
const deleteStudent = (student) => {
    studentStore.deleteStudent(student)
}

// This function is making sure that we are only taking the data inside the arrived or left function from the store, and essentially relabelling it, so we can use it in StudentTable.vue
const arrivedOrLeft = (student, isStudentPresent) => {
    student.present = isStudentPresent
    studentStore.arrivedOrLeft(student)
}

// This computed property is locked to StudentTable, but it is just fixing a detail with the wording of the current student count display.
// It is saying that if there is one student in class, display the first message, otherwise, be it 0 or 100 students, display the else message
const pluralStudentMessage = computed(() => {
  if (studentCount.value === 1) {
    return 'There is 1 Student in class'
  } else {
    return `There are ${studentCount.value} students in class`
  }
})


</script>


<!-- HTML Code will go into template tag below-->
<template>

<div id="student-list-table" class="card m-2 p-2">

  <h4 class="card-title">Student List</h4>
  <h5 class="card-subtitle text-muted"> {{ pluralStudentMessage }}  </h5>

  <div id="student-table">

    <table class="table">

      <thead>
        <tr>
          <th>Name</th>
          <th>StarID</th>
          <th>Present?</th>
        </tr>
      </thead>

      <tbody>

        <StudentRow
            v-for="student in sortedStudents"
            v-bind:student="student"
            v-on:arrived-or-left="arrivedOrLeft"
            v-on:delete-student="deleteStudent"
        ></StudentRow>

      </tbody>

    </table>
  </div>
</div>

</template>


<!-- Styles (CSS) for the component will go here-->
<!-- SCOPED Means that the styles within this tag will be confined to this component -->
<!-- TODO (FACT CHECK THIS) However, if this component has children, it will apply to them too -->
<style scoped>

#student-table {
  max-height: 400px;
  overflow: scroll;
}

th, td {
  width: 25%;
  text-align: center;
}



</style>
