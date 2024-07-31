const mongoose = require("mongoose")

const mongoose = require("mongoose");

const clientSchema = moongoose.Scheme({
    clientname:{
        type:[string],
        required: true,
        unique: true
    }
    Projects:{
        type: String,
        required:true,
    }
})

const ClientModel = mongoose.model("Client", clientSchema);

module.exports = {
    ClientModel
}