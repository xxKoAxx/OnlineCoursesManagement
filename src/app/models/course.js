const slug = require('mongoose-slug-generator')     //plug-in for mongoose to auto generate slug
const mongoose = require('mongoose')
mongoose.plugin(slug)

const courseSchema = new mongoose.Schema({ 
    name: String, 
    description: String,
    image: String,
    slug: { type: String, slug: "name" },
    youtubeIntroId: String,
    level: String,
    createdAt: { type: Date },
    updatedAt: { type: Date, default: Date.now},
}, {
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model('course', courseSchema)
