import "reflect-metadata";

interface IUSerService {
  getUsersInDataBase(): number;
}

class UserService implements IUSerService {
  private _users: number;

  getUsersInDataBase(): number {
    return this._users;
  }

  setUsersInDataBase(@Positive() num: number) {
    this._users = num;
  }
}

function Positive() {
  return (
    target: Object,
    propertyKey: string | symbol,
    _: number
  ) => {
    console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));
    console.log(Reflect.getOwnMetadata("design:paramtypes", target, propertyKey));
    console.log(Reflect.getOwnMetadata("design:returntype", target, propertyKey));
  };
}

const UserService1 = new UserService();
console.log(UserService1);
