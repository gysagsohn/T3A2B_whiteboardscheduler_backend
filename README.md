# T3A2B-whiteboardscheduler


The plan for this repository is to create the backend of my application here.

I have added another file to this repository called T3A2A, that contains all of the Part A of this assignment and the planning for it. 

For this assignment I am using Kanaban Board with Story Points to manage the application. I will upload the screen shot of the trello board here, but it will contain both the backend and front end stuff.

Front End repository can be found:

(Insert link once done)


Plan:

## Database
Mongoose DB
- local Mongoose until it is finished
- after all of the functions are finished then it will be uplaoded to use MongoDB Atlas Database

## Models
- User
- company - need to see for data sterlization if I should make one or as this is a solution for my compnay at this stage do I need one
- Asset
- Operator
- Client
- Allocation

## Route
Each Model will have it own route
- User
- Asset
- Operator
- Client
- Allocation

## Repository Management
To ensure that all code is tested and functional three branches have been made:
- Main 
- Testing
- Coding

### Main
This is the finished product that can be released

### Testing
This is where the code will go once it is out of production and need to be tested before it is published. For testing I am planning on doing a combination of 2, manual testing and Github testing. For the end point of the API they will be done manual testing to make sure they are working 

## Coding
This is the production branch where I will be working on the code. It will only be pushed to the testing branch once I believe the code is ready to be published

## Packaged/Library
- npm (node package manager) 
- express
- mongoose
- nodemon (DEV)
- bcryptjs
- jsonwebtoken
- dotenv
- cors


## Future improvements
- Admin function - I don't believe I have the time for this at this stage. If I do I will come back to this
- Data access - I believe I need a middle wear for authorization on access to data based on which user made is and which company they belong to. This escaped me whilst planning, so I will make this a future improvement

## Development Testing 
As I have been developing this code, I have been testing the code. Please see below for all of the testing 

### Basic Backend files 

**checking server is working**
![T3A2/PartB/Development Testing/Basic Backend file set up/basic testing.png](<T3A2/PartB/Development Testing/Basic Backend file set up/basic testing.png>)

console.log message and checking that it is coming up on terminal log
T3A2/PartB/Development Testing/Basic Backend file set up/testing.png


### Seeding file - before route and hasing
After some of the models were made I did a seeded some data to check that it is working

![alt text](<T3A2/PartB/Development Testing/seeddata/Screenshot 2024-08-02 at 2.10.26 PM.png>)
![alt text](<T3A2/PartB/Development Testing/seeddata/Screenshot 2024-08-02 at 2.10.33 PM.png>)


### Hashing password
Since I had some seeded data I tried to hash the passwords 
![alt text](<T3A2/PartB/Development Testing/hashing password/frist test after code to check hasing is working.png>)

It looked like it worked but when I used jwt.it it failed

T3A2/PartB/Development Testing/hashing password/testing of hasing on seed data failure.png

After making some changes to the code and adding an internal logic to check that seeded data was being hashed, it passed the test

![alt text](<T3A2/PartB/Development Testing/hashing password/terminal line code.png>)

```JS
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
```

And used JWT.it to double check
![](<T3A2/PartB/Development Testing/hashing password/jwt.to for seeddata.png>)

Confirmed that it was working

### Route - local testing

Each of the route have been tested themselves to ensure that routes were working. I used Bruno to test the API locally.

#### Asset Router

Get all asset
![alt text](<T3A2/PartB/Development Testing/route/assetrouter/asset get all.png>) 

POST new asset
![alt text](<T3A2/PartB/Development Testing/route/assetrouter/create new asset.png>) 

Delete 1 aset
![alt text](<T3A2/PartB/Development Testing/route/assetrouter/delete asset.png>) 

Get asset by id
![alt text](<T3A2/PartB/Development Testing/route/assetrouter/Get asset by id.png>) 

PUT asset details
![alt text](<T3A2/PartB/Development Testing/route/assetrouter/update asset details by id.png>)

#### Client Router

POST new client
![alt text](<T3A2/PartB/Development Testing/route/client/create new client.png>) 

Delete client by id
![alt text](<T3A2/PartB/Development Testing/route/client/delete client.png>) 

PUT client detail
![alt text](<T3A2/PartB/Development Testing/route/client/edit client .png>) 

Get all Clients
![alt text](<T3A2/PartB/Development Testing/route/client/get all client.png>) 

Get client by id
![alt text](<T3A2/PartB/Development Testing/route/client/Get client by ID.png>)

#### Operator Route

Delete operator by id
![alt text](<T3A2/PartB/Development Testing/route/operators/Delete Operator.png>) 

Get all operators
![alt text](<T3A2/PartB/Development Testing/route/operators/Get all operators.png>) 

Get operator by id
[alt text](<T3A2/PartB/Development Testing/route/operators/get operator by id.png>) 

PUT new operator
![alt text](<T3A2/PartB/Development Testing/route/operators/new operator.png>) 

POST edit operator detail
![alt text](<T3A2/PartB/Development Testing/route/operators/update operator details.png>)

#### User Route

Get user by id
![alt text](<T3A2/PartB/Development Testing/route/user route/local testing/userroute/API get 1 uer by id.png>) 

Delete user by id
![alt text](<T3A2/PartB/Development Testing/route/user route/local testing/userroute/delete 1 user.png>) 

Get all user details
![alt text](<T3A2/PartB/Development Testing/route/user route/local testing/userroute/Get all useres.png>) 
![alt text](<T3A2/PartB/Development Testing/route/user route/local testing/userroute/Get all users.png>) 

PUT edit user
![alt text](<T3A2/PartB/Development Testing/route/user route/local testing/userroute/update user details.png>)

POST new user
![alt text](<T3A2/PartB/Development Testing/route/user route/local testing/userroute/Post new used.png>)


With the login router, there is also a login and authentication process
![alt text](<T3A2/PartB/Development Testing/route/user route/loginig in.png>)

#### Allocations route
New Route POST
![alt text](<T3A2/PartB/Development Testing/route/allocations/create new allocation.png>) 

Deleting 1 allocation
![alt text](<T3A2/PartB/Development Testing/route/allocations/delet Allocation.png>) 

PUT method to edit allocation
[alt text](<T3A2/PartB/Development Testing/route/allocations/edit allocation.png>) 

GET all allocation
![alt text](<T3A2/PartB/Development Testing/route/allocations/get all allocations.png>) 

Get allocation by id (1 allocation)
![alt text](<T3A2/PartB/Development Testing/route/allocations/get allocations by id.png>)

### Error handling route
I crated a middle wear for some basic error handling and specific error handling for each route. 

Wrong client id
![alt text](<T3A2/PartB/Development Testing/route/erro handling/errohandling wrong client details.png>) 

Updating operator filed and checking that all required fields are present
![alt text](<T3A2/PartB/Development Testing/route/erro handling/error handling for operator.png>) 

Error handling missing login details
![alt text](<T3A2/PartB/Development Testing/route/erro handling/error handling login.png>) 

Wrong route
![alt text](<T3A2/PartB/Development Testing/route/erro handling/error handling wrong route.png>) 
![alt text](<T3A2/PartB/Development Testing/route/erro handling/general error handling.png>)
