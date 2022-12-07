let stack = []
// stack[0] ='i'

console.log(stack[0])



const months = ['Jan', 'March', 'April', 'June'];
let test = months.splice(0, 1);
// inserts at index 1
console.log(test);
console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]
