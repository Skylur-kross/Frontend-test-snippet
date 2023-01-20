
    const inputOne = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];

// Output - [ 67, 65]; - Age > 60
const output0 = inputOne
  .filter(person => person.age >= 65)
  .map(person => person.age);
 
console.log(output0);





const inputtwo = "Every developer likes to mix kubernetes and javascript";




const inputThree = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// - Output 1 - ['Hello John', 'Hello Becky', 'Hello Susy', 'Hello Tyson']
// - Output 2 - [4,5,4,5] -> username length
// - Output 3 - [3,3,3,3] - team length
// - Output 4 - ['Hello John from Red', 'Hello Becky from Blue', 'Hello Susy from Red', 'Hello Tyson from Green']
// - Output 5 - [{ username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"]}]
// - Output 6 - [71] - count of score
const output1 = inputThree.map(player => `Hello ${player.username}`);
const output2 = inputThree.map(player => player.username.length);
const output3 = inputThree.map(player => player.team.length);
const output4 = inputThree.map(player => `Hello ${player.username} from ${player.team}`);
const output5 = inputThree.filter(player => player.username === "susy");;
const output6 = inputThree.reduce((accumulator, player) => {
  accumulator.push({ myScore: player.score });
  return accumulator;
}, []);
console.log(output1,output2,output3,output4,output5,output6);




    