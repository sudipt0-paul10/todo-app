const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:password@cluster0.cwhsjty.mongodb.net/?appName=Cluster0")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}