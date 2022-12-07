import fs from "fs";
fs.readFile("sample.txt", (error, response) => {
  function split_the_string_into_groups_of_four(characters) {
    let table = [];
    for (let j = 0; j < characters.length; j += 4) {
      // I take the fourth characters in beginning beginning  j to j+4
      table.push(characters.slice(j, j + 4));
    }
    return table;
  }

  function remove_the_words_move_from_to(array_of_string) {
    array_of_string = array_of_string.filter((string) => string != "move");
    array_of_string = array_of_string.filter((string) => string != "from");
    array_of_string = array_of_string.filter((string) => string != "to");

    return array_of_string;
  }

  function change_type_of_element_from_string_to_number(array_of_string) {
    let array_of_numbers = [];
    for (let j = 0; j < array_of_string.length; j++) {
      array_of_string[j] = parseInt(array_of_string[j]);
    }

    array_of_numbers = array_of_string;
    return array_of_numbers;
  }

  if (error) throw error;
  let crates = response.toString().split("\n\n")[0];
  let movements = response.toString().split("\n\n")[1];

  crates = crates.split("\n");
  movements = movements.split("\n");

  for (let i = 0; i < crates.length; i++) {
    crates[i] = split_the_string_into_groups_of_four(crates[i]);
    // console.log("CRATES " + i, crates[i]);
  }

  for (let i = 0; i < movements.length; i++) {
    movements[i] = movements[i].split(" ");
    movements[i] = remove_the_words_move_from_to(movements[i]);
    // console.log("TEST", movements[i]);
    change_type_of_element_from_string_to_number(movements[i]);
  }

  // for (let i = 0; i<)
  // let test = "move 7 from 3 to 9";
  // test = test.split(" ");
  // test = test.filter((element) => element != "move");
  // test = test.filter((element) => element != "from");
  // test = test.filter((element) => element != "to");

  // for (let i = 0; i < test.length; i++) {
  //   test[i] = parseInt(test[i]);
  // }

  // console.log(test);
  console.log(movements);
});

// function split_the_string_into_groups_of_four(characters) {
//   // var newStr =
//   return characters.replace(/(.{4})(?=.)/g, "$1 ").split(" ");
// }

//  console.log(split_the_string_into_groups_of_four("5190b4145a425be20f544ef5f0c3899301a70997a1af6877572f65dbeada4ffcb"));
