const mongoose = require('mongoose');

//creating the schema..!! and collection(Table) is automatice created inside the mongodb database

const employeeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    salary: Number
})

module.exports = mongoose.model('Employee', employeeSchema)
//exporting this schmea outsode this file