// // let data = [1, 2, -3, 3, -2, 0, 4];
// let data = [1, 8, -3, 3, -2, 0, 4];

// let current_number = 2;
// let position_of_the_current_number = 1;

// // JE VEUS DEPLACER 2
// let left_part_of_crypted_file = data.splice(0, position_of_the_current_number);
// // Ouput : [ 1]

// let right_part_of_crypted_file = data.splice(position_of_the_current_number);

// right_part_of_crypted_file.splice(current_number, 0, current_number);

// console.log(left_part_of_crypted_file); // [ 1 ]
// console.log(right_part_of_crypted_file); // [ -3, 3, 2, -2, 0, 4 ]

// if (current_number>right_part_of_crypted_file.length) {
//     let position_where_to_insert = current_number-right_part_of_crypted_file.length
// } else {}

// console.log(Math.abs(-1))

// let test = [1,2,4,6]

// test.reverse();
// console.log(test)
// test.reverse();
// console.log(test)

if (current_number > right_part_of_crypted_file.length) {
  let position_where_to_insert =
    current_number - right_part_of_crypted_file.length;

  crypted_file_copy = left_part_of_crypted_file.concat(
    right_part_of_crypted_file
  );

  crypted_file_copy.splice(position_where_to_insert, 0, current_number);
} else {
  right_part_of_crypted_file.splice(current_number, 0, current_number);
}
