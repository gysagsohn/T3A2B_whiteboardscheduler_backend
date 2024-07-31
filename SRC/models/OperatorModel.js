const mongoose = require("mongoose")


const operatorSchema = moongoose.Scheme({
    operatorName:{
        type:[string],
        required: true,
        unique: true
    },
    licenceClass:{
        assettype:{
            // as this is the same in asset Model, I might make this into its own model  
            type:[string],
            enum:["c", "HR", "HC"],
            required: true
        }
    }
})

const OperatorModel = mongoose.model("Operator", operatorSchema);

module.exports = {
    OperatorModel
}