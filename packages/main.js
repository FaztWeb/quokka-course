import axios from "axios";

(async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  // res
  // res.data //?
  const { data } = res; //? $.data
  const names = data.map(({ name, id, website, email }) => ({
    name,
    id,
    website,
    email,
  }));
  names;
  names.length //?
})();
