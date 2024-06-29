let value = "string";

function countLetter(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text.length == null) {
      return count;
    }
    count = count + 1;
  }
  return count;
}

console.log(countLetter(" "));

function newFeature() {
  console.log("this is the new feature contribution from feature branch");
}
function newFeatureAdded() {
  console.log("this is new feature added again");
}

function newFeatureAddedB() {
  console.log("this is new feature added again from B branch");
}

function newFeatureAddedC() {
  console.log("this is new feature added again from c branch");
}

