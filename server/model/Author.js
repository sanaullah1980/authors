import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        minlength: [3, 'Name should be at least 3 char long']
    }
});

const Author = mongoose.model('Author', authorSchema);

export default Author;