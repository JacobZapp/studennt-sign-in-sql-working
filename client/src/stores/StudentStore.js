// javascript is file type you want to use for stores for most of the time

// TODO Importing a function called define store
import { defineStore } from 'pinia'

// TODO Making sure I can use refs and computed properties from vue in this js file
import {ref, computed} from 'vue'

// TODO This making a variable that I can export and have a function within variable?
export const useStudentStore = defineStore('students', () => {

    const studentList = ref([
        {name: 'Jacob Zapp', starID: 'bn6335cf', present: false},
        {name: 'Maya Shay', starID: 'je5511xe', present: false}
    ])

    const mostRecentStudent = ref( {} ) // empty object

    // function addNewStudent, takes student as the argument.
    // studentList.value.push(student) is taking whatever the user types into the boxes for name and StarID, and "pushes" them or adds them to the list the user sees
    // Otherwise, it adds onto the studentList array as well
    function addNewStudent(student) {
        studentList.value.push(student)
    }

    // This function will delete a student by clicking the red delete button by there name in the webpage.
    // filter and return studentToDelete lines of code is searching through all the students on list, and when it finds the one that you selected, it will delete it and leave the rest
    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter( (student) => {
        return studentToDelete !== student

    })
        mostRecentStudent.value = []
    }

    // This function is keeping track which student was the last one to leave or come into the list, so we can generate the message
    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    // this is a computed property, it reads the number of students in the list array and then displays it in message in StudentTable.vue
    const studentCount = computed(() => {
        return studentList.value.length
    })

    // This computed property will sort the students on the list in alphabetical order!
    const sortedStudents = computed (() => {
        return studentList.value.toSorted(( s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })




    return {
        // reactive data
        studentList,
        mostRecentStudent,

        // functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        //computed properties
        studentCount,
        sortedStudents,


    }


})
