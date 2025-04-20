"use strict";
class KVDatabase {
    constructor() {
        this.db = new Map();
    }
    save(key, value) {
        this.db.set(key, value);
    }
}
class PersistentDB {
    savePersistent(data) {
        console.log(data);
    }
}
class PersistentDBAdapter extends KVDatabase {
    constructor(database) {
        super();
        this.database = database;
    }
    save(key, value) {
        this.database.savePersistent({ key, value });
    }
}
function run(base) {
    base.save("key", "myValue");
}
run(new PersistentDBAdapter(new PersistentDB));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sVUFBVTtJQUFoQjtRQUNZLE9BQUUsR0FBd0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUs5QyxDQUFDO0lBSEMsSUFBSSxDQUFDLEdBQVcsRUFBRSxLQUFhO1FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLFlBQVk7SUFDaEIsY0FBYyxDQUFDLElBQVk7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLG1CQUFvQixTQUFRLFVBQVU7SUFDMUMsWUFBbUIsUUFBc0I7UUFDdkMsS0FBSyxFQUFFLENBQUM7UUFEUyxhQUFRLEdBQVIsUUFBUSxDQUFjO0lBRXpDLENBQUM7SUFFUSxJQUFJLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0Y7QUFFRCxTQUFTLEdBQUcsQ0FBQyxJQUFnQjtJQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsR0FBRyxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFBIn0=