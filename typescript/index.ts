class User {
  constructor(
    private name: string,
    private surname: string,
    private age: number,
    id?: string
  ) {
    console.log("user created!");
  }

  greet() {
    return `Hello I'am ${this.name} and I'm ${this.age} years old`;
  }
}

const joe = new User("joe", "McMillan", 40);
const ryan = new User("Ryan", "Ray", 30);
joe;

joe.greet(); //?

const users: User[] = []

users.push(joe)
users.push(ryan)

users
typeof users //?
