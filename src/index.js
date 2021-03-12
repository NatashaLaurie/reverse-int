module.exports = function reverse (n) {
  let arr = String(Math.abs(n)).split("");
  arr.reverse();
  return Number(arr.join(""));
}
