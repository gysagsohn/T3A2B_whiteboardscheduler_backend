const mongoose = require("mongoose");

const assetSchema = moongoose.Scheme({
    assetnumber:{
        type: Integer,
        required: true,
        unique: true
    assettype:{
        // THis might change as reather then being a pre-fixed class option, I might want to give the user the option to make the type
        type:[string],
        enum:["Vac Truck 6000L", "Vac Truck 8000L", "Vac Truck Comboo", "Tipper 2t", "Tipper 4T"],
        required: true
    }
    Rego:{
        type: String,
        required:true,
        unique: true
    }
    licenceclass:{
        assettype:{
            // THis might change as reather then being a pre-fixed class option, I might want to give the user the option to make the type
            type:[string],
            enum:["c", "HR", "HC"],
            required: true
        }
    }

})