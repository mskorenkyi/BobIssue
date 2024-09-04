"use strict";

// Just dummy code that makes "react-native-builder-bob" generate something
// Don't waste time analyzing it

class UserService {
  users = [];

  // Method to add a user
  addUser(user) {
    this.users.push(user);
    console.log(`User ${user.name} added successfully.`);
  }

  // Method to get a user by ID
  getUserById(id) {
    return this.users.find(user => user.id === id);
  }

  // Method to get all users
  getAllUsers() {
    return this.users;
  }
}
const user1 = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};
const user2 = {
  id: 2,
  name: 'Bob',
  email: 'bob@example.com'
};
const userService = new UserService();
userService.addUser(user1);
userService.addUser(user2);
const retrievedUser = userService.getUserById(1);
console.log('Retrieved User:', retrievedUser);
const allUsers = userService.getAllUsers();
console.log('All Users:', allUsers);
//# sourceMappingURL=index.js.map