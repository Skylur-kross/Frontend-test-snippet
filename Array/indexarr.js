
//   const message = "My name is Ankit & i'm from Morena. I saw a dog";

//   // split
//   const splittedArr = message.split(" ");

//   console.log(splittedArr);

//   const wordIndex = splittedArr.indexOf("dog");

//   console.log(wordIndex);

//   if (wordIndex !== -1) {
//     splittedArr.splice(wordIndex, 1);
//   }

//   console.log(splittedArr);

//   const finalMessage = splittedArr.join(" ");

//   console.log(finalMessage);

const message = "My name is Ankit & i'm from Morena. I saw a dog";

// split
const splittedArr = message.split(" ");

console.log(splittedArr);

const wordIndex = splittedArr.indexOf("Ankit");

console.log(wordIndex);

if (wordIndex !== -1) {
  splittedArr[wordIndex] = "***";
}

console.log(splittedArr);

const finalMessage = splittedArr.join(" ");

console.log(finalMessage);
