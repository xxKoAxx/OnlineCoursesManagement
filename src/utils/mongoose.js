function mongooseArray_toObjects(mongoose){
    return mongoose.map(mongoose => mongoose.toObject())
} 

function mongooseObject_toObject(mongoose){
    return mongoose ? mongoose.toObject() : mongoose
}


module.exports = {
    mongooseArray_toObjects,
    mongooseObject_toObject,
}