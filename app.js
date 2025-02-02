"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter((u) => u.name === name);
    }
    toString() {
        return this.map((u) => u.name).join(", ");
    }
}
const users = new Users();
users.push(new User("Вася"));
users.push(new User("Egor"));
console.log(users.toString());
class UserList {
    push(u) {
        this.users.push(u);
    }
}
let test = new UserList();
test.push(new User("Egor"));
test.push(new User("Egor1"));
test.push(new User("Egorka"));
console.log(test);
