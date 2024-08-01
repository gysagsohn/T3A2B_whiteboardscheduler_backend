const { UserModel } = require("../models/UserModel");
const { AssetModel } = require("../models/AssetModel");
const { ClientModel } = require("../models/ClientModel");
const { OperatorModel } = require("../models/OperatorModel");
const { AllocationModel } = require("../models/AllocationModel");
const { databaseConnect, databaseClose, databaseDrop } = require("./database");

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

    let result = await UserModel.insertMany(userData);
    console.log(result);
    return result;
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

    let result = await AssetModel.insertMany(assetData);
    console.log(result);
    return result;
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

    let result = await ClientModel.insertMany(clientData);
    console.log(result);
    return result;
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

    let result = await OperatorModel.insertMany(operatorData);
    console.log(result);
    return result;
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

    let result = await AllocationModel.insertMany(allocationData);
    console.log(result);
    return result;
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