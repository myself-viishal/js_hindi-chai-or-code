let arr = [69, 33, 5, "vishal", "kumar"]

// Accessing Elements:
let index = 1
// console.log(arr[index])

// Modifying Elements:
arr[1] = "wtf"
// console.log(arr);
// array is non primitive so i can changed it, but string is primitive so it cant be changed

// Adding Elements:
arr.push("prajapati")
arr.unshift("bajalpur") //This is not recomended but i am flexing here
console.log(arr)

// Removing Element:
arr.pop("prajapati")
arr.shift("bajalpur")
console.log(arr)

// Geting element between two values
let newArr = arr.slice(1,2)
let newArr2 = arr.splice(1,2-1)
console.log(newArr); 
// you have wondring what is difference between slice and splice lets see:-
console.log(arr);//See splice get element and change the array but slice only get copy of element from array

// Searching:
arr.push(66,1,2,3,4,5,5,67,435,4,3,2355,5,6,)
console.log(arr.indexOf(69))

