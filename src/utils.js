const generateNum = maxNum => Math.floor(Math.random() * maxNum);
const range = (first, n, step) => Array.from(new Array(n), (value, index) => first + step * index);

export { range };
export default generateNum;
