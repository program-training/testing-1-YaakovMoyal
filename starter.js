// 1
export const len_str = (str: string) => str.length;

// 2
export const is_palindrome = (str: string) => {
  const new_str = str.split("").reverse().join("");
  return str === new_str;
};

// 3
export const sort_arr = (arr: number[]) => arr.sort();

// 4
export const sqrt = (num: number) => {
  if (num < 0) throw new Error("error");
  return num ** 0.5;
};

// 5
export const sumArr = (arr: number[]) => {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return sum;
};

// 6
export const fetchUserData = async (_id: number) => {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${_id}`);
  if (!user.ok) throw new Error(`couldn't fetch data :${_id}`);
  return user.json();
};

// 7
export const Fibonacci = (arr: number[]) => {
  //   arr.forEach((num, i) => {
  //     if (i > 1) {
  //       if (arr[i] + arr[i + 1] !== arr[i + 2]) throw new Error("err");
  //     }
  //   });

  const next = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(next);
  return arr;
};

