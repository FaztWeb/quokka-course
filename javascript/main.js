// Functions
const add = (x, y) => x + y;
// add(3, 5) //?

// arrays
const nums = [10, 20, 33, 44, 50];
const total = nums.reduce((a, b) => a + b); //?

// live comments
const websites = ["youtube", "google", "tesla"];

websites.map((website) /*?*/ => website.toUpperCase() /*? */);

// filter
const names = ["ryan", "joe", "john"]; // ? $.filter(n => n !== "ryan").map(n => `hello ${n}`)

const greetings = names.map((name) => `hello ${name}`); //?

const filtered = names.filter((name) => name !== "ryan");

// live performing testing
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ message: "Hello World!!" });
  }, 4000);
});

await myPromise; //?.
