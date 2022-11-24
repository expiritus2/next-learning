import mongoose from 'mongoose';

const Todo = new mongoose.Schema({
    item: String,
    completed: Boolean,
});

export default mongoose.model('todo', Todo);
