# REST API Documentation

## Overview

This REST API provides endpoints for managing users in a database. Below are the details for each endpoint and their operations.

## Endpoints

### 1. 🏠 Home: Display Home

- **Endpoint**: `GET: /`
- **Function**: `displayHome()`
- **Description**: Displays the home page of the API.

### 2. ✨ Create: Create New User

- **Endpoint**: `POST: /users`
- **Function**: `createUser()`
- **Description**: Adds a new user to the database.
- **Example**: [http://localhost:3000/users](http://localhost:3000/users)
- **Body**:
  ```json
  { "name": "John Doe", "email": "john@example.com" }

## 3. 🔄 Update: Update User

- **Endpoint**: `PUT: /users/:id`
- **Function**: `updateUser()`
- **Description**: Modifies an existing user by their ID.
- **Example**: [http://localhost:3000/users/1](http://localhost:3000/users/1)
- **Body**:
  ```json
  { "name": "Updated Name", "email": "updated@example.com" }

## 4. 🗑️ Delete: Delete User

- **Endpoint**: `DELETE: /users/:id`
- **Function**: `deleteUser()`
- **Description**: Deletes a user by their ID.
- **Example**: [http://localhost:3000/users/1](http://localhost:3000/users/1)

## 5. 🔄 Get All Users: Fetch All Users

- **Endpoint**: `GET: /users`
- **Function**: `getUsers()`
- **Description**: Fetches all users from the database.
- **Example**: [http://localhost:3000/users](http://localhost:3000/users)

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the server: `node index.js`.
