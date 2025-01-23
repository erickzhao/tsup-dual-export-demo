// index.mts
import path from "node:path";
import { randomCatName } from "cat-names";
import dog from "dog-names";
function myFunction() {
  console.log(path.join("foo", "bar"));
  console.log("I have a cat named", randomCatName());
  console.log("I have a dog named", dog.allRandom());
}
myFunction();
export {
  myFunction
};
