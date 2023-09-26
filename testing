import { describe, expect, test } from "vitest";

import {
  len_str,
  is_palindrome,
  sort_arr,
  sqrt,
  sumArr,
  fetchUserData,
  Fibonacci,
} from "../src/Vitest";

describe("testing", () => {
  // 1
  test("length of string", () => {
    const someStr = "some bla bla";
    const result = len_str(someStr);
    expect(result).toBe(12);
  });

  //   2
  test("check palindrome", () => {
    const someStr = "aba";
    const result = is_palindrome(someStr);
    expect(result).toBeTruthy();
    // expect(result).toBeFalsy();
  });

  //   3
  test("sorted", () => {
    const someArr = [2, 4, 1, 5, 3];
    const result = sort_arr(someArr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  //   4
  test("sqrt_1", () => {
    const someNum = 9;
    const result = sqrt(someNum);
    expect(result).toBe(3);
    //   4.1
    expect(() => sqrt(-1)).toThrow();
  });

  //   5
  test("sumArr", () => {
    const someArr = [10, 20, 30];
    const result = sumArr(someArr);
    expect(result).toBe(60);
    // 5.1
    expect(result).toBeGreaterThan(10);
  });

  //   6
  test("getting_user", async () => {
    const userDemo = {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    };
    const result = await fetchUserData(2);
    expect(result).toEqual(userDemo);
    // 6.1
    expect(async () => await fetchUserData(20)).rejects.toThrow();
  });

  //   7
  test("Fibonacci", () => {
    const someArr = [1, 1, 2, 3, 5, 8];
    const result = Fibonacci(someArr);
    expect(result).toEqual([1, 1, 2, 3, 5, 8, 13]);
  });
});
