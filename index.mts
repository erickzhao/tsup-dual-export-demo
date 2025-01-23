import path from "node:path";
// `cat-names` v4 is an ESM-only package
import { randomCatName } from "cat-names";
// `dog-names` v2 is a CommonJS package
import dog from "dog-names";

export interface MyInterface {
  foo: string;
  bar: number;
}

export function myFunction(): void {
  console.log(path.join("foo", "bar"));
  console.log("I have a cat named", randomCatName());
  console.log("I have a dog named", dog.allRandom());
}

myFunction();
