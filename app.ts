interface User {
  name: string;
  age: number;
  email: string;
}


type P = Partial<User>