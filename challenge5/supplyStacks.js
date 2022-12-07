import fs from "fs";
fs.readFile("data.txt", (error, response) => {
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
  function delete_empty_string_in_all_stacks(array_of_arrays) {
    for (let i = 0; i < array_of_arrays.length; i++) {
      array_of_arrays[i] = array_of_arrays[i].filter((crates) => crates != "    ");
      array_of_arrays[i] = array_of_arrays[i].filter((crates) => crates != "   ");
    }
    return array_of_arrays
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
  let stacks = [];

  function place_crate_in_the_appropriate_stack(array_of_array) {
    //   // MEMO
    //   //             S       S        S
    //   //             T       T        T
    //   //             A       A        A
    //   //             C       C        C
    //   //             K       K        K

    //   //        J=   0       1        2
    //   //   i = 0 [ '    ', '[D] ', '   ' ],
    //   //   i = 1 [ '[N] ', '[C] ', '   ' ],
    //   //   i = 2 [ '[Z] ', '[M] ', '[P]' ],
    //   //   i = 3 [ ' 1  ', ' 2  ', ' 3 ' ]

    let stacks = [];
    for (let i = 0; i < array_of_array.length; i++) {
      for (let j = 0; j < array_of_array.length; j++) {
        if (stacks[j] === undefined) stacks[j] = [array_of_array[i][j]];
        else stacks[j] = stacks[j].concat(array_of_array[i][j]);
      }
    }
    return stacks;
  }

  stacks = place_crate_in_the_appropriate_stack(crates);

  for (let i = 0; i < movements.length; i++) {
    movements[i] = movements[i].split(" ");
    movements[i] = remove_the_words_move_from_to(movements[i]);
    // console.log("TEST", movements[i]);
    change_type_of_element_from_string_to_number(movements[i]);
  }

 
  stacks= delete_empty_string_in_all_stacks(stacks)


  for (let i = 0; i < movements.length; i++) {
    let number_of_crates_to_move = movements[i][0];
    let stack_where_take_the_crates_to_move = movements[i][1] - 1; // We substract because our "stack_1" is "stack[0]" in array stack
    let stack_where_to_move_the_crates = movements[i][2] - 1;

    let crates_to_move = [];
    console.log('TABLEAU OU ON PREND LES ELEMENTS A DEPLACER', stacks[stack_where_take_the_crates_to_move]);
    
    crates_to_move = stacks[stack_where_take_the_crates_to_move].splice(0,number_of_crates_to_move)
    // crates_to_move = crates_to_move.reverse();
    console.log('ELEMENT A DEPLACE',crates_to_move)
    console.log('TABLEAU OU ON A PRIS LES ELEMENTS A DEPLACER', stacks[stack_where_take_the_crates_to_move]);
    
    stacks[stack_where_to_move_the_crates] = crates_to_move.concat(stacks[stack_where_to_move_the_crates])
    console.log('TABLEAU OU ON A DEPLACE', stacks[stack_where_to_move_the_crates]);
  }

  for(let i =0; i<stacks.length;i++) {
  console.log("STACKS ---------------------", stacks[i][0]);
  // FIRST RESULT : LJSVLTWQM
  // SECOND RESULT : BRQWDBBJM

  }

});








// function split_the_string_into_groups_of_four(characters) {
//   // var newStr =
//   return characters.replace(/(.{4})(?=.)/g, "$1 ").split(" ");
// } 

//  console.log(split_the_string_into_groups_of_four("5190b4145a425be20f544ef5f0c3899301a70997a1af6877572f65dbeada4ffcb"));


