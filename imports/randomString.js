/**
 * generate a random string
 * @param {string} length the length of the string
 * @returns {string} a random string
 */
export const randomString = (length = 10) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  result; //?

  return result;
};
