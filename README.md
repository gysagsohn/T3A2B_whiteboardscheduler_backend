# T3A2B - Whiteboard Scheduler Backend

This is my final assignment from Corder Academy. This repository contains the backend of the Whiteboard Scheduler application. The backend is built with Node.js, Express, and MongoDB using Mongoose for data modeling.

## Table of Contents

- [Frontend Repository](#frontend-repository)
- [Plan](#plan)
- [Database](#database)
- [Models](#models)
- [Routes](#routes)
- [Repository Management](#repository-management)
- [Packages/Libraries](#packageslibraries)
- [Future Improvements](#future-improvements)
- [Project Management](#project-management)
- [Development Testing](#development-testing)
  - [Basic Backend Files](#basic-backend-files)
  - [Seeding Data](#seeding-data)
  - [Hashing Passwords](#hashing-passwords)
  - [Route Testing](#route-testing)
    - [Asset Router](#asset-router)
    - [Client Router](#client-router)
    - [Operator Router](#operator-router)
    - [User Router](#user-router)
    - [Allocation Router](#allocation-router)
  - [Error Handling Routes](#error-handling-routes)
  - [Backend Server Testing](#backend-server-testing)
  - [Protected Routes](#protected-routes)

## Frontend Repository

The frontend of this application can be found here:
[Frontend Repository](https://github.com/gysagsohn/T3A2B_whiteboardscheduler_frontend)
[Frontend Link](https://whiteboardscheduler.com/)

## Plan

### Database

- **MongoDB**: The backend is initially tested on a local MongoDB instance and then deployed using MongoDB Atlas.
- **Deployment**: The application is deployed using Render. The backend is tested on a coding branch before being deployed to the main branch.

### Models

The following models are implemented in the backend:

- User
- Asset
- Operator
- Client
- Allocation

### Routes

Each model has its own route:

- User
- Asset
- Operator
- Client
- Allocation

### Repository Management

The repository is managed using three branches:

- **Main**: The final product ready for release.
- **Testing**: The branch for testing code after it exits production. Testing includes both manual and GitHub testing.
- **Coding**: The development branch where code is written and tested before being pushed to the testing branch.

### Packages/Libraries

The following packages/libraries are used:

- npm (Node Package Manager)
- express
- mongoose
- nodemon (DEV)
- bcryptjs
- jsonwebtoken
- dotenv
- cors

### Future Improvements

- **Admin Function**: Potentially adding an admin feature to manage users and data.
- **Data Access Control**: Implementing middleware for data authorization based on user roles and the company they belong to.

## Project Management

To ensure the development process was organized and efficient, I used **Trello** for task management and assigned **story points** to estimate the effort required for each task. I also followed the **Conventional Commits** standard for commit messages.

### Trello Kanban Board

- **Trello**: T3A2/PartB/trello baord

### Story Points

- **Story Points**: Each task on the Trello board was assigned story points, which represented the estimated difficulty and time required to complete the task. This helped prioritize tasks and allocate time more effectively throughout the project.

### Conventional Commits

- **Conventional Commits 1.0.0**: I adhered to the Conventional Commits standard for my Git commit messages, making it easier to understand the changes made in each commit. This practice improved the clarity and organization of the commit history.

## Development Testing - Manual Testing

### Basic Backend Files

**Server Testing**

The server was tested to ensure it was working properly:

![Basic Testing](T3A2/PartB/Development%20Testing/Basic%20Backend%20file%20set%20up/basic%20testing.png)

- Method: Start the app and go to the local link to see if the message is up.
- Passed: Server is working as expected.

### Seeding Data

After creating some models, data was seeded to the database:

![Seeding Data](T3A2/PartB/Development%20Testing/seeddata/Screenshot%202024-08-02%20at%202.10.26%20PM.png)
![Seeding Data](T3A2/PartB/Development%20Testing/seeddata/Screenshot%202024-08-02%20at%202.10.33%20PM.png)

- Method: Check the terminal line to ensure the seeded data is coming up.
- Passed: Data is successfully seeded into the database.

### Hashing Passwords

Testing the hashing of passwords:

![Hashed Data](T3A2/PartB/Development%20Testing/hashing%20password/frist%20test%20after%20code%20to%20check%20hasing%20is%20working.png)

- Method: Go to the terminal to see logged data of hashed passwords.
- Passed: Passwords are hashed.

Validated hashed passwords using JWT:

![JWT Validation First Attempt](T3A2/PartB/Development%20Testing/hashing%20password/testing%20of%20hashing%20on%20seed%20data%20failure.png)

- Method: Use [JWT.io](https://jwt.io) and the key to decode the data.
- Failed: JWT validation did not work.

Second Attempt:

![Hashed Data](T3A2/PartB/Development%20Testing/hashing%20password/terminal%20line%20code.png)
![JWT Validation](T3A2/PartB/Development%20Testing/hashing%20password/jwt.to%20for%20seeddata.png)

- Method: Check the terminal line for hashed data, and use JWT.io to validate.
- Passed: JWT validation worked.

### Route Testing

Each route was tested locally using the Bruno API testing tool:

#### Asset Router

- **GET all assets**: Passed
  - Method: Use Bruno to test the route and verify that information comes up.
  ![Get All Assets](T3A2/PartB/Development%20Testing/route/assetrouter/asset%20get%20all.png)
  
- **POST new asset**: Passed
  - Method: Use Bruno to test the route and create a new asset.
  ![Post New Asset](T3A2/PartB/Development%20Testing/route/assetrouter/create%20new%20asset.png)
  
- **DELETE asset**: Passed
  - Method: Use Bruno to test the route and delete an asset.
  ![Delete Asset](T3A2/PartB/Development%20Testing/route/assetrouter/delete%20asset.png)
  
- **GET asset by ID**: Passed
  - Method: Use Bruno to test the route and get one asset by ID.
  ![Get Asset By ID](T3A2/PartB/Development%20Testing/route/assetrouter/Get%20asset%20by%20id.png)
  
- **PUT update asset**: Passed
  - Method: Use Bruno to test the route and update one asset's information.
  ![Update Asset](T3A2/PartB/Development%20Testing/route/assetrouter/update%20asset%20details%20by%20id.png)

#### Client Router

- **POST new client**: Passed
  - Method: Use Bruno to test the route and create a new client.
  ![Post New Client](T3A2/PartB/Development%20Testing/route/client/create%20new%20client.png)
  
- **DELETE client**: Passed
  - Method: Use Bruno to test the route and delete one client.
  ![Delete Client](T3A2/PartB/Development%20Testing/route/client/delete%20client.png)
  
- **PUT update client**: Passed
  - Method: Use Bruno to test the route and update one client's information.
  ![Update Client](T3A2/PartB/Development%20Testing/route/client/edit%20client%20.png)
  
- **GET all clients**: Passed
  - Method: Use Bruno to test the route and retrieve all clients' information.
  ![Get All Clients](T3A2/PartB/Development%20Testing/route/client/get%20all%20client.png)
  
- **GET client by ID**: Passed
  - Method: Use Bruno to test the route and retrieve one client's information by ID.
  ![Get Client By ID](T3A2/PartB/Development%20Testing/route/client/Get%20client%20by%20ID.png)

#### Operator Router

- **DELETE operator**: Passed
  - Method: Use Bruno to test the route and delete one operator's information.
  ![Delete Operator](T3A2/PartB/Development%20Testing/route/operators/Delete%20Operator.png)
  
- **GET all operators**: Passed
  - Method: Use Bruno to test the route and retrieve all operators' information.
  ![Get All Operators](T3A2/PartB/Development%20Testing/route/operators/Get%20all%20operators.png)
  
- **GET operator by ID**: Passed
  - Method: Use Bruno to test the route and retrieve one operator's information by ID.
  ![Get Operator By ID](T3A2/PartB/Development%20Testing/route/operators/get%20operator%20by%20id.png)
  
- **PUT new operator**: Passed
  - Method: Use Bruno to test the route and create a new operator.
  ![Post New Operator](T3A2/PartB/Development%20Testing/route/operators/new%20operator.png)
  
- **POST edit operator**: Passed
  - Method: Use Bruno to test the route and edit one operator's information.
  ![Update Operator](T3A2/PartB/Development%20Testing/route/operators/update%20operator%20details.png)

#### User Router

- **GET user by ID**: Passed
  - Method: Use Bruno to test the route and retrieve one user's information by ID.
  ![Get User By ID](T3A2/PartB/Development%20Testing/route/user%20route/local%20testing/userroute/API%20get%201%20user%20by%20id.png)
  
- **DELETE user**: Passed
  - Method: Use Bruno to test the route and delete one user's information.
  ![Delete User](T3A2/PartB/Development%20Testing/route/user%20route/local%20testing/userroute/delete%201%20user.png)
  
- **GET all users**: Passed
  - Method: Use Bruno to test the route and retrieve all users' information.
  ![Get All Users](T3A2/PartB/Development%20Testing/route/user%20route/local%20testing/userroute/Get%20all%20useres.png)
  
- **PUT edit user**: Passed
  - Method: Use Bruno to test the route and update one user's information.
  ![Update User](T3A2/PartB/Development%20Testing/route/user%20route/local%20testing/userroute/update%20user%20details.png)
  
- **POST new user**: Passed
  - Method: Use Bruno to test the route and create a new user.
  ![Post New User](T3A2/PartB/Development%20Testing/route/user%20route/local%20testing/userroute/Post%20new%20used.png)
  
- **Login and Authentication**: Passed
  - Method: Use Bruno to test the login route and verify JWT token is provided.
  ![Login and Auth](T3A2/PartB/Development%20Testing/route/user%20route/loginig%20in.png)

#### Allocation Router

- **POST new allocation**: Passed
  - Method: Use Bruno to test the route and create a new allocation.
  ![Post New Allocation](T3A2/PartB/Development%20Testing/route/allocations/create%20new%20allocation.png)
  
- **DELETE allocation**: Passed
  - Method: Use Bruno to test the route and delete one allocation's information.
  ![Delete Allocation](T3A2/PartB/Development%20Testing/route/allocations/delet%20Allocation.png)
  
- **PUT update allocation**: Passed
  - Method: Use Bruno to test the route and update one allocation's information.
  ![Update Allocation](T3A2/PartB/Development%20Testing/route/allocations/edit%20allocation.png)
  
- **GET all allocations**: Passed
  - Method: Use Bruno to test the route and retrieve all allocations' information.
  ![Get All Allocations](T3A2/PartB/Development%20Testing/route/allocations/get%20all%20allocations.png)
  
- **GET allocation by ID**: Passed
  - Method: Use Bruno to test the route and retrieve one allocation's information by ID.
  ![Get Allocation By ID](T3A2/PartB/Development%20Testing/route/allocations/get%20allocations%20by%20id.png)

### Error Handling Routes

Error handling was tested to ensure correct behavior:

- **Wrong client ID**: Passed
  - Method: Use Bruno to test the route with an incorrect ID and verify the correct error message is delivered.
  ![Wrong Client ID](T3A2/PartB/Development%20Testing/route/erro%20handling/errohandling%20wrong%20client%20details.png)
  
- **Missing login details**: Passed
  - Method: Use Bruno to test the route with missing login information and verify the correct error message is delivered.
  ![Missing Login Details](T3A2/PartB/Development%20Testing/route/erro%20handling/error%20handling%20login.png)
  
- **Wrong route**: Passed
  - Method: Use Bruno to test a non-existent route and verify the correct error message is delivered.
  ![Wrong Route](T3A2/PartB/Development%20Testing/route/erro%20handling/error%20handling%20wrong%20route.png)
  ![General Error Handling](T3A2/PartB/Development%20Testing/route/erro%20handling/general%20error%20handling.png)

### Backend Server Testing

Backend routes were tested after deployment to Render:

- **Backend deployed on Render**: Passed
  - Method: Deploy the backend and check the terminal log on Render to see the server message.
  ![Backend Render](T3A2/PartB/Development%20Testing/backend%20server%20testing/backend%20server%20live%20render.png)
  - Method: Go to the Render site and verify the server message is displayed.
  ![Backend Live](T3A2/PartB/Development%20Testing/backend%20server%20testing/backend%20serverlive.png)
  
- **Route to allocations**: Passed
  - Method: Test the deployed route by going to the allocations route.
  ![Route to Allocations](T3A2/PartB/Development%20Testing/backend%20server%20testing/backend%20allocations.png)
  
- **Route to assets**: Passed
  - Method: Test the deployed route by going to the assets route.
  ![Route to Assets](T3A2/PartB/Development%20Testing/backend%20server%20testing/backend%20assets.png)
  
- **Route to operators**: Passed
  - Method: Test the deployed route by going to the operators route.
  ![Route to Operators](T3A2/PartB/Development%20Testing/backend%20server%20testing/backend%20operators.png)
  
- **Route to users**: Passed
  - Method: Test the deployed route by going to the users route.
  ![Route to Users](T3A2/PartB/Development%20Testing/backend%20server%20testing/backend%20users.png)
  
- **Route to clients**: Passed
  - Method: Test the deployed route by going to the clients route.
  ![Route to Clients](T3A2/PartB/Development%20Testing/backend%20server%20testing/backend%20route%20to%20clients.png)
  
- **Error route**: Passed
  - Method: Test the deployed route by going to a non-existent route and verify the correct error message is delivered.
  ![Error Route](T3A2/PartB/Development%20Testing/backend%20server%20testing/backend%20error%20test%20wrong%20route.png)

### Protected Routes

The JWT token authentication was tested for protected routes:

- **New user creation**: Passed
  - Method: Test the user creation route and verify a JWT token is provided.
  ![New User Creation](T3A2-whitebaord-developmenttesting/protected%20route/New%20User.png)
  
- **New user login**: Passed
  - Method: Test the user login route and verify a JWT token is provided.
  ![New User Login](T3A2-whitebaord-developmenttesting/protected%20route/new%20user%20to%20get%20JWT%20Token.png)
  
- **Correct token check**: Passed
  - Method: Use the JWT token to access protected routes.
  ![Correct Token Check](T3A2-whitebaord-developmenttesting/protected%20route/corret%20toeken%20to%20get%20all%20asset.png)
  
- **Wrong token check**: Passed
  - Method: Use an incorrect JWT token to access protected routes and verify the access is denied.
  ![Wrong Token Check](T3A2-whitebaord-developmenttesting/protected%20route/wrong%20token%20check%20error%20message.png)
  
- **Get all allocations**: Passed
  - Method: Use a valid JWT token to access the allocations route.
  ![Get All Allocations](T3A2-whitebaord-developmenttesting/protected%20route/get%20all%20allocations.png)
  
- **Get all clients**: Passed
  - Method: Use a valid JWT token to access the clients route.
  ![Get All Clients](T3A2-whitebaord-developmenttesting/protected%20route/get%20all%20clients.png)
  
- **Get all operators**: Passed
  - Method: Use a valid JWT token to access the operators route.
  ![Get All Operators](T3A2-whitebaord-developmenttesting/protected%20route/get%20all%20operators.png)
  
- **Get all assets**: Passed
  - Method: Use a valid JWT token to access the assets route.
  ![Get All Assets](T3A2-whitebaord-developmenttesting/protected%20route/corret%20toeken%20to%20get%20all%20asset.png)
