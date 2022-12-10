// import fs from "fs";

// let trees;
// fs.readFile("sample.txt", (err, res) => {
//   if (err) throw err;

//   trees = res.toString().split("\n");
//   console.log(trees);
//   let number_of_lines = trees.length;
//   let number_of_columns = trees[0].length;
//   let number_of_visibles_trees = 0;

//   function split_a_string_into_single_characters_and_convert_it_in_number(
//     array_of_strings
//   ) {
//     for (let i = 0; i < array_of_strings.length; i++) {
//       array_of_strings[i] = array_of_strings[i].split("");
//       for (let j = 0; j < array_of_strings[i].length; j++) {
//         array_of_strings[i][j] = parseInt(array_of_strings[i][j]);
//       }
//     }
//     return array_of_strings;
//   }
//   let heights_of_trees_in_number =
//     split_a_string_into_single_characters_and_convert_it_in_number(trees);


//   // I buckle i=1 to i=heights_of_trees_in_number-1 for jump element which is on the first and last lines
//   for (let line = 1; line < heights_of_trees_in_number.length - 1; line++) {
//     // I buckle j=1 to j=heights_of_trees_in_number-1 for jump element which is on the first and last columns
//     for (let column = 1; column < heights_of_trees_in_number.length - 1; column++) {
//       let actual_tree = heights_of_trees_in_number[line][column];
//       console.log("ACTUAL TREE<<<<<", actual_tree);

//       // Verify if the height of this tree is  most big
//       let is_the_longest = false;

//       // Vérifier s'il est plus grand que tous ceux qui sont au dessus
//       for (let k = 0; k < heights_of_trees_in_number.length; k++) {
//         if (k === line) { // If we are on the current tree, we break
//             break;
//         } else {
//             if (actual_tree < heights_of_trees_in_number[k][column]) {
//               is_the_longest = false;
//               break;
//             } else is_the_longest = true;
//         } 
//       }

            
//             if(is_the_longest===true ) number_of_visibles_trees+=1;
//     }
//   }
//   //   let i = 2
//   //   let j = 2
//   // let tree_above = trees[i-1][j]
//   // let tree_below = trees[i+1][j]
//   // let tree_to_the_right = trees[i][j+1]
//   // let tree_to_the_left = trees[i][j-1]
//   let tree_which_is_bigger_on_the_column;
//   let tree_which_is_bigger_on_the_line;

//   // for (let i =1; i<trees.length-1; i++) {
//   //     for (let j =1; j<trees.length-1; j++) {
//   //         console.log("VALUE "+i, typeof(parseInt(trees[i][j])))
//   //        let actual_tree = trees[i][j]
//   //     //    if (actual_tree)
//   //     }
//   // }


//   //        JJJJJ
//   //        |||||
//   //        12345
//   //        |||||
//   // i=1    30373;
//   // i=2    25512;
//   // i=3    65332;
//   // i=4    33549;
//   // i=5    35390;

// // Je compare à celui qui est au dessus sur la meme colonne; il est supérieur donc "is the biggest=true   |--> number of tree+1= 1
// // Je compare à celui qui est au dessus sur la meme colonne; il est supérieur donc "is the biggest=true   |--> number of tree+1= 2





//   // ORIGINAL
//   //        JJJJJ
//   //        |||||
//   //        12345
//   //        |||||
//   // i=1    30373;
//   // i=2    25512;
//   // i=3    65332;
//   // i=4    33549;
//   // i=5    35390;
//   console.log('number_of_visibles_trees',number_of_visibles_trees)
// });






// let column_of_this_tree = []

// column_of_this_tree.push(1)
// column_of_this_tree.push(2)

// console.log(column_of_this_tree)



// let table =[ 0, 5, 5, 3, 5 ]

// let part = table.slice(0,2)
// let part2 = table.slice(3)

// console.log('PART',part)
// console.log('PART',part2)



// const result = table.filter(number => number > 8);

// console.log(result.length);
// // expected output: Array ["exuberant", "destruction", "present"]

let test =[ 3, 3, 5 ]
for (let i=test.length-1; i>=0;i--){
    console.log(test[i])
}