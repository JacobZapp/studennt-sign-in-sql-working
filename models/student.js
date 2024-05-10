
// information about datatypes
module.exports = (sequelize, DataTypes) => {
    // Defines the model
    const Student = sequelize.define('Student', {
    //     columns in database being defined - give a name and a type always
        name: {
            type: DataTypes.STRING
        },
        starID: {
            type: DataTypes.STRING
        },
        present: {
            type: DataTypes.BOOLEAN
        }
    })

    // create table for the student in database
    Student.sync( { force: true} ).then( () => {
        console.log('Synced Student Table')
    })

return Student

}

