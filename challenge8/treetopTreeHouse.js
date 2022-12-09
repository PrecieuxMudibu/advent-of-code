import fs from "fs";

let trees;
fs.readFile("data.txt", (err, res) => {
  if (err) throw err;

  trees = res.toString().split("\n");
  console.log(trees);
  let number_of_lines = trees.length;
  let number_of_columns = trees[0].length;
  let number_of_visibles_trees = 0;
  let number_of_trees_in_the_border =
    number_of_columns * 2 + (number_of_lines - 2) * 2;

  function split_a_string_into_single_characters_and_convert_it_in_number(
    array_of_strings
  ) {
    for (let i = 0; i < array_of_strings.length; i++) {
      array_of_strings[i] = array_of_strings[i].split("");
      for (let j = 0; j < array_of_strings[i].length; j++) {
        array_of_strings[i][j] = parseInt(array_of_strings[i][j]);
      }
    }
    return array_of_strings;
  }

  function take_the_heights_before_the_current_height(array, beginning, end) {
    return array.slice(beginning, end);
  }

  function take_the_heights_after_the_current_height(array, beginning) {
    return array.slice(beginning);
  }

  function get_heights_which_are_superior_to_the_height_of_the_actually_tree_in(
    array,
    height_of_actual_tree
  ) {
    return array.filter((height) => height >= height_of_actual_tree);
  }
  let heights_of_trees_in_number =
    split_a_string_into_single_characters_and_convert_it_in_number(trees);
  console.log("heights_of_trees_in_number>>>>>", heights_of_trees_in_number);

  // I buckle i=1 to i=heights_of_trees_in_number-1 for jump element which is on the first and last lines
  for (let line = 1; line < heights_of_trees_in_number.length - 1; line++) {
    let actual_line = heights_of_trees_in_number[line];
    console.log("ACTUAL LINE-------> " + heights_of_trees_in_number[line]);

    // I buckle j=1 to j=heights_of_trees_in_number-1 for jump element which is on the first and last columns
    for (
      let column = 1;
      column < heights_of_trees_in_number.length - 1;
      column++
    ) {
      let height_of_actual_tree = heights_of_trees_in_number[line][column];
      console.log("ACTUAL TREE<<<<<", height_of_actual_tree);

      let column_of_this_tree = [];
      let line_of_this_tree = actual_line;
      let index_of_the_height_of_the_actual_tree_in_the_column_array = line;
      let index_of_the_height_of_the_actual_tree_in_the_line_array = column;
      console.log(
        "index_of_the_height_of_the_actual_tree_in_the_line_array",
        index_of_the_height_of_the_actual_tree_in_the_line_array
      );

      for (let k = 0; k < heights_of_trees_in_number.length; k++) {
        column_of_this_tree.push(heights_of_trees_in_number[k][column]);
      }

      let heigths_above_the_height_of_the_actual_tree =
        take_the_heights_before_the_current_height(
          column_of_this_tree,
          0,
          index_of_the_height_of_the_actual_tree_in_the_column_array
        );
      //   console.log(
      //     "heigths_above_the_height_of_the_actual_tree",
      //     heigths_above_the_height_of_the_actual_tree
      //   );

      let heigths_below_the_height_of_the_actual_tree =
        take_the_heights_after_the_current_height(
          column_of_this_tree,
          index_of_the_height_of_the_actual_tree_in_the_column_array + 1
        );

      let above_heights_which_are_superior_to_the_height_of_the_actually_tree =
        get_heights_which_are_superior_to_the_height_of_the_actually_tree_in(
          heigths_above_the_height_of_the_actual_tree,
          height_of_actual_tree
        );

      let below_heights_which_are_superior_to_the_height_of_the_actually_tree =
        get_heights_which_are_superior_to_the_height_of_the_actually_tree_in(
          heigths_below_the_height_of_the_actual_tree,
          height_of_actual_tree
        );

      let heigths_to_the_left_of_the_height_of_the_actual_tree =
        take_the_heights_before_the_current_height(
          line_of_this_tree,
          0,
          index_of_the_height_of_the_actual_tree_in_the_line_array
        );
      // console.log("heigths_to_the_left_of_the_height_of_the_actual_tree",heigths_to_the_left_of_the_height_of_the_actual_tree)

      let heigths_to_the_right_of_the_height_of_the_actual_tree =
        take_the_heights_after_the_current_height(
          line_of_this_tree,
          index_of_the_height_of_the_actual_tree_in_the_line_array + 1
        );
      // console.log("heigths_to_the_right_of_the_height_of_the_actual_tree",heigths_to_the_right_of_the_height_of_the_actual_tree)

      let left_heights_which_are_superior_to_the_height_of_the_actually_tree =
        get_heights_which_are_superior_to_the_height_of_the_actually_tree_in(
          heigths_to_the_left_of_the_height_of_the_actual_tree,
          height_of_actual_tree
        );
      // console.log("left_heights_which_are_superior_to_the_height_of_the_actually_tree", left_heights_which_are_superior_to_the_height_of_the_actually_tree)

      let right_heights_which_are_superior_to_the_height_of_the_actually_tree =
        get_heights_which_are_superior_to_the_height_of_the_actually_tree_in(
          heigths_to_the_right_of_the_height_of_the_actual_tree,
          height_of_actual_tree
        );
      // console.log("right_heights_which_are_superior_to_the_height_of_the_actually_tree", right_heights_which_are_superior_to_the_height_of_the_actually_tree)

      //////// JE VERIFIE SI L4ELEMENT ACTUEL EST VISIBLE EN HAUT OU EN BAS
      if (
        above_heights_which_are_superior_to_the_height_of_the_actually_tree.length ===
          0 ||
        below_heights_which_are_superior_to_the_height_of_the_actually_tree.length ===
          0 ||
        left_heights_which_are_superior_to_the_height_of_the_actually_tree.length ===
          0 ||
        right_heights_which_are_superior_to_the_height_of_the_actually_tree.length ===
          0
      ) {
        number_of_visibles_trees += 1;
        // console.log("number_of_visibles_trees", number_of_visibles_trees);
      }
    }
  }

  // ORIGINAL
  //        JJJJJ
  //        |||||
  //        01234
  //        |||||
  // i=0    30373;
  // i=1    25512;
  // i=2    65332;
  // i=3    33549;
  // i=4    35390;

  // console.log("number_of_visibles_trees", number_of_visibles_trees);
  // console.log("number_of_trees_in_the_border",number_of_trees_in_the_border)
  console.log(
    "VISIBLE TREE >>>>",
    number_of_visibles_trees + number_of_trees_in_the_border
  ); // FIRST RESULT :1676
});

// L4INDEX C'EST J

//  JE SUIS A LA LIGNE 97
