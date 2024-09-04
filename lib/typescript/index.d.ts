interface User {
    id: number;
    name: string;
    email: string;
}
declare class UserService {
    private users;
    addUser(user: User): void;
    getUserById(id: number): User | undefined;
    getAllUsers(): User[];
}
declare const user1: User;
declare const user2: User;
declare const userService: UserService;
declare const retrievedUser: User | undefined;
declare const allUsers: User[];
//# sourceMappingURL=index.d.ts.map