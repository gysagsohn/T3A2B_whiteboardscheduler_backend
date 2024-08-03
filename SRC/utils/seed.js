const { UserModel } = require("../models/UserModel");
const { AssetModel } = require("../models/AssetModel");
const { ClientModel } = require("../models/ClientModel");
const { OperatorModel } = require("../models/OperatorModel");
const { AllocationModel } = require("../models/AllocationModel");
const { databaseConnect, databaseClose, databaseDrop } = require("./database");
const bcrypt = require("bcryptjs");
const { createJwt, validateJwt } = require("./auth");

// Seed Users
async function seedUsers() {
    let userData = [
        {
            useremail: "alex@example.com",
            password: "password123",
            username: "alex",
            usercompany: "Company A"
        },
        {
            useremail: "pikachu@example.com",
            password: "password123",
            username: "pikachu",
            usercompany: "Company B"
        }
    ];

    // Initialise an empty array to store results
    let results = [];
    // Loop through each user data entry in the userData array
    for (let data of userData) {
        // Create a new UserModel instance with the current user data
        let user = new UserModel(data);
        // Save the user instance to the database and store the result
        let result = await user.save();
        // Generate a JWT for the newly created user using their ID
        let token = createJwt(result._id);
        console.log("Generated JWT:", token); // Print the generated JWT
        // Validate the generated JWT to ensure it's correct
        let isValid = validateJwt(token);
        console.log("Is JWT valid?", isValid); // Print whether the JWT is valid or not
        // Add the saved user result to the results array
        results.push(result);
    }
    // Return the array of results
    return results;
}

// Seed Assets
async function seedAssets() {
    let assetData = [
        {
            assetnumber: 1,
            assetType: ["Vac Truck 6000L"],
            rego: "ABC123",
            licenceClass: { assettype: ["HR"] }
        },
        {
            assetnumber: 2,
            assetType: ["Tipper 4T"],
            rego: "DEF456",
            licenceClass: { assettype: ["C"] }
        }
    ];

    let results = [];
    for (let data of assetData) {
        let asset = new AssetModel(data);
        let result = await asset.save();
        results.push(result);
        console.log(result);
    }
    return results;
}

// Seed Clients
async function seedClients() {
    let clientData = [
        {
            clientname: ["Client A"],
            Projects: "Project X"
        },
        {
            clientname: ["Client B"],
            Projects: "Project Y"
        }
    ];

    let results = [];
    for (let data of clientData) {
        let client = new ClientModel(data);
        let result = await client.save();
        results.push(result);
        console.log(result);
    }
    return results;
}

// Seed Operators
async function seedOperators() {
    let operatorData = [
        {
            operatorName: ["Operator A"],
            licenceClass: ["HR"],
            availableDays: ["Monday", "Wednesday", "Friday"]
        },
        {
            operatorName: ["Operator B"],
            licenceClass: ["C"],
            availableDays: ["Tuesday", "Thursday", "Saturday"]
        }
    ];

    let results = [];
    for (let data of operatorData) {
        let operator = new OperatorModel(data);
        let result = await operator.save();
        results.push(result);
        console.log(result);
    }
    return results;
}

// Seed Allocations
async function seedAllocations(assets, clients, operators) {
    let allocationData = [
        {
            asset: assets[0]._id,
            operator: operators[0]._id,
            client: clients[0]._id,
            date: new Date(),
            shiftType: "Day",
            description: "Job for Client A"
        },
        {
            asset: assets[1]._id,
            operator: operators[1]._id,
            client: clients[1]._id,
            date: new Date(),
            shiftType: "Night",
            description: "Job for Client B"
        }
    ];

    let results = [];
    for (let data of allocationData) {
        let allocation = new AllocationModel(data);
        let result = await allocation.save();
        results.push(result);
        console.log(result);
    }
    return results;
}

// Seed function
async function seed() {
    await databaseConnect();
    await databaseDrop();

    let newUsers = await seedUsers();
    let newAssets = await seedAssets();
    let newClients = await seedClients();
    let newOperators = await seedOperators();
    await seedAllocations(newAssets, newClients, newOperators);

    console.log("Seeded data!");
    await databaseClose();
}

seed();
