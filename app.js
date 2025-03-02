"use strict";
setUsers(2);
class UserService {
    getUsersInDatabase() {
        return this.users;
    }
}
function nullUsers(target) {
    target.prototype.users = 0;
}
function threeUsersAdvanced(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 3;
        }
    };
}
function setUsers(users) {
    return (target) => {
        target.prototype.users = users;
    };
}
function setUsersAdvanced(users) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = 3;
            }
        };
    };
}
console.log(new UserService().getUsersInDatabase());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDWCxNQUFNLFdBQVc7SUFFZixrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Q0FDRjtBQUVELFNBQVMsU0FBUyxDQUFDLE1BQWdCO0lBQ2pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FDekIsV0FBYztJQUVkLE9BQU8sS0FBTSxTQUFRLFdBQVc7UUFBekI7O1lBQ0wsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUM7S0FBQSxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEtBQWE7SUFDN0IsT0FBTyxDQUFDLE1BQWdCLEVBQUUsRUFBRTtRQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUMsS0FBYTtJQUNyQyxPQUFPLENBQ0wsV0FBYyxFQUNkLEVBQUU7UUFDRixPQUFPLEtBQU0sU0FBUSxXQUFXO1lBQXpCOztnQkFDTCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ1osQ0FBQztTQUFBLENBQUM7SUFDSixDQUFDLENBQUE7QUFDSCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyJ9