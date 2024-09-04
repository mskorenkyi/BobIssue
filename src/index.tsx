// Just dummy code that makes "react-native-builder-bob" generate something
// Don't waste time analyzing it

interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];

  // Method to add a user
  addUser(user: User): void {
    this.users.push(user);
    console.log(`User ${user.name} added successfully.`);
  }

  // Method to get a user by ID
  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Method to get all users
  getAllUsers(): User[] {
    return this.users;
  }
}

const user1: User = { id: 1, name: 'Alice', email: 'alice@example.com' };
const user2: User = { id: 2, name: 'Bob', email: 'bob@example.com' };

const userService = new UserService();

userService.addUser(user1);
userService.addUser(user2);

const retrievedUser = userService.getUserById(1);
console.log('Retrieved User:', retrievedUser);

const allUsers = userService.getAllUsers();
console.log('All Users:', allUsers);
