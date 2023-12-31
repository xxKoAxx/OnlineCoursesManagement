const slug = require('mongoose-slug-generator')     //plug-in for mongoose to auto generate slug
const mongoose = require('mongoose')
mongoose.plugin(slug)
const mongooseDelete = require('mongoose-delete');

const courseSchema = new mongoose.Schema({ 
    name: String, 
    description: String,
    image: String,
    slug: { type: String, slug: "name" },
    youtubeIntroId: String,
    level: String,
    createdAt: { type: Date },
    updatedAt: { type: Date, default: Date.now},
    deleted: {type: Boolean, default: false}
}, {
    versionKey: false,
    timestamps: true,
// custom query helper
    query: { 
        sortByColumn(res) {
            if (res.locals.sort.sortType != 'default' && res.locals.sort.column) {
                return this.sort({
                    [res.locals.sort.column]: res.locals.sort.sortType
                })
            }
            return this
        }
    }
})

courseSchema.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt: true
})

module.exports = mongoose.model('course', courseSchema)
