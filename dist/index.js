import path from "node:path";
import { randomCatName } from "cat-names";
import dog from "dog-names";
import { mySecondFunction } from "./utils.mjs";
function myFunction() {
  console.log(path.join("foo", "bar"));
  console.log("I have a cat named", randomCatName());
  console.log("I have a dog named", dog.allRandom());
  mySecondFunction();
}
myFunction();
export {
  myFunction
};
