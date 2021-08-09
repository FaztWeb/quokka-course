const names = ["ryan", "joe", "john"]; // ? $.filter(n => n !== "ryan").map(n => `hello ${n}`)

const greetings = names.map((name) => `hello ${name}`); //?

const filtered = names.filter((name) => name !== "ryan");
