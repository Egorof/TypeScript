"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserBuildder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
let u = new UserBuildder();
class AdminBuilder extends UserBuildder {
}
const res2 = new AdminBuilder();
console.log(res2.setName("Egor"));
let user = new AdminBuilder();
console.log(user.isAdmin());
