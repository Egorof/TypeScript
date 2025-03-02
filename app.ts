interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

setUsers(2) 
class UserService implements IUserService {
  users: number;
  getUsersInDatabase(): number {
    return this.users;
  }
}

function nullUsers(target: Function) {
  target.prototype.users = 0;
}

function threeUsersAdvanced<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    users = 3;
  };
}

function setUsers(users: number) {
  return (target: Function) => {
    target.prototype.users = users;
  }
}

function setUsersAdvanced(users: number) {
  return <T extends { new (...args: any[]): {} }>(
    constructor: T
  ) => {
    return class extends constructor {
      users = 3;
    };
  }
}

console.log(new UserService().getUsersInDatabase());
