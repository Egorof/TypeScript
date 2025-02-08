class UserBuildder {
  name: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

let u = new UserBuildder();
class AdminBuilder extends UserBuildder {
  
}

let user: UserBuildder | AdminBuilder = new AdminBuilder();


if(user.isAdmin()) {
  console.log(user);
} else {
  console.log(user);
}