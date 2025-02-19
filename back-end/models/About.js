const mongoose = requore('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
}
);

const About = mongoose.model("About", aboutSchema)