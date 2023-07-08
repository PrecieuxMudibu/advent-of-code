import { readFileSync } from "fs";
const data = readFileSync("./sample.txt", { encoding: "utf8", flag: "r" });
let crypted_file = data.toString().split("\n");
let crypted_file_copy;

function get_element_on_the_left(array, position_where_to_stop) {
  let left_part_of_crypted_file = [];
  for (let i = 0; i < position_where_to_stop; i++) {
    left_part_of_crypted_file.push(array[i]);
  }
  return left_part_of_crypted_file;
}

function get_element_on_the_right(array, position_where_to_begin) {
  let right_part_elements = [];
  for (let i = position_where_to_begin + 1; i < array.length; i++) {
    right_part_elements.push(array[i]);
  }
  return right_part_elements;
}
// Convert all element of array in number
for (let i = 0; i < crypted_file.length; i++) {
  crypted_file[i] = parseInt(crypted_file[i]);
}

crypted_file_copy = crypted_file;
// console.log("crypted_file_copy 111", crypted_file_copy); // OK

for (let i = 0; i < crypted_file.length; i++) {
  let current_number = crypted_file[i];
  console.log("current_number", current_number);
  let position_of_the_current_number =
    crypted_file_copy.indexOf(current_number);
  console.log("position_of_the_current_number", position_of_the_current_number);
  let left_part_of_crypted_file = get_element_on_the_left(
    crypted_file_copy,
    position_of_the_current_number
  );

  // console.log("left_part_of_crypted_file 111", left_part_of_crypted_file);

  let right_part_of_crypted_file = get_element_on_the_right(
    crypted_file_copy,
    position_of_the_current_number
  );

  // console.log("right_part_of_crypted_file 111", right_part_of_crypted_file);

  //   if (current_number < 0) {
  //     // console.log("Inferieur", current_number);
  //     if (Math.abs(current_number) > left_part_of_crypted_file.length) {
  //         let position_where_to_insert =
  //         Math.abs(current_number) - left_part_of_crypted_file.length;

  //         crypted_file_copy = left_part_of_crypted_file.concat(
  //           right_part_of_crypted_file
  //         );
  //         crypted_file_copy.reverse()
  //         crypted_file_copy.splice(position_where_to_insert, 0, current_number);
  //         crypted_file_copy.reverse()
  //       } else {
  //         right_part_of_crypted_file.splice(current_number, 0, current_number);
  //       }
  //   } else
  if (current_number > 0) {
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
  }
}

console.log("crypted_file_copy FINAL", crypted_file_copy);
