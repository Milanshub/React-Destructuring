// // destructuring an array
// const [cat, dog]= animals;
// console.log(cat);

// // destructuring an object 
// const {name, sound} = cat; 
// console.log(sound)

// //changing object name when desctructuring. Good when taking hold of objects from public API. 
// const {name: catName, sound: catSound} = cat; 
// console.log(catSound)

// // giving object name in case it is undefined  
// const {name = mrCat, sound} = cat; 
// console.log(mrCat)

// //returns an object inside an object 
// const {feedingRequirements: {food, water}} = cat; 
// console.log(food);

const animals = [
    { 
    name: "cat", 
    sound: "meow", 
    feedingRequirements: {
        food: 2, 
        water: 3 
    }},
    { 
    name: "dog", 
    sound: "woof" 
    }
  ];
  
export default animals;