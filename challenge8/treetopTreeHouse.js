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
  let highest_panoramic_score_for_any_tree = 0;

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
  // FIRST PART
  // for (let line = 1; line < heights_of_trees_in_number.length - 1; line++) {
  //   let actual_line = heights_of_trees_in_number[line];
  //   console.log("ACTUAL LINE-------> " + heights_of_trees_in_number[line]);

  //   // I buckle j=1 to j=heights_of_trees_in_number-1 for jump element which is on the first and last columns
  //   for (
  //     let column = 1;
  //     column < heights_of_trees_in_number.length - 1;
  //     column++
  //   ) {
  //     let height_of_actual_tree = heights_of_trees_in_number[line][column];
  //     console.log("ACTUAL TREE<<<<<", height_of_actual_tree);

  //     let column_of_this_tree = [];
  //     let line_of_this_tree = actual_line;
  //     let index_of_the_height_of_the_actual_tree_in_the_column_array = line;
  //     let index_of_the_height_of_the_actual_tree_in_the_line_array = column;
  //     console.log(
  //       "index_of_the_height_of_the_actual_tree_in_the_line_array",
  //       index_of_the_height_of_the_actual_tree_in_the_line_array
  //     );

  //     for (let k = 0; k < heights_of_trees_in_number.length; k++) {
  //       column_of_this_tree.push(heights_of_trees_in_number[k][column]);
  //     }

  //     let heigths_above_the_height_of_the_actual_tree =
  //       take_the_heights_before_the_current_height(
  //         column_of_this_tree,
  //         0,
  //         index_of_the_height_of_the_actual_tree_in_the_column_array
  //       );
  //     //   console.log(
  //     //     "heigths_above_the_height_of_the_actual_tree",
  //     //     heigths_above_the_height_of_the_actual_tree
  //     //   );

  //     let heigths_below_the_height_of_the_actual_tree =
  //       take_the_heights_after_the_current_height(
  //         column_of_this_tree,
  //         index_of_the_height_of_the_actual_tree_in_the_column_array + 1
  //       );

  //     let above_heights_which_are_superior_to_the_height_of_the_actually_tree =
  //       get_heights_which_are_superior_to_the_height_of_the_actually_tree_in(
  //         heigths_above_the_height_of_the_actual_tree,
  //         height_of_actual_tree
  //       );

  //     let below_heights_which_are_superior_to_the_height_of_the_actually_tree =
  //       get_heights_which_are_superior_to_the_height_of_the_actually_tree_in(
  //         heigths_below_the_height_of_the_actual_tree,
  //         height_of_actual_tree
  //       );

  //     let heigths_to_the_left_of_the_height_of_the_actual_tree =
  //       take_the_heights_before_the_current_height(
  //         line_of_this_tree,
  //         0,
  //         index_of_the_height_of_the_actual_tree_in_the_line_array
  //       );
  //     console.log("heigths_to_the_left_of_the_height_of_the_actual_tree",heigths_to_the_left_of_the_height_of_the_actual_tree)
  //     // console.log("LAST",heigths_to_the_left_of_the_height_of_the_actual_tree[heigths_to_the_left_of_the_height_of_the_actual_tree.length-1])

  //     let heigths_to_the_right_of_the_height_of_the_actual_tree =
  //       take_the_heights_after_the_current_height(
  //         line_of_this_tree,
  //         index_of_the_height_of_the_actual_tree_in_the_line_array + 1
  //       );
  //     // console.log("heigths_to_the_right_of_the_height_of_the_actual_tree",heigths_to_the_right_of_the_height_of_the_actual_tree)

  //     let left_heights_which_are_superior_to_the_height_of_the_actually_tree =
  //       get_heights_which_are_superior_to_the_height_of_the_actually_tree_in(
  //         heigths_to_the_left_of_the_height_of_the_actual_tree,
  //         height_of_actual_tree
  //       );
  //     // console.log("left_heights_which_are_superior_to_the_height_of_the_actually_tree", left_heights_which_are_superior_to_the_height_of_the_actually_tree)

  //     let right_heights_which_are_superior_to_the_height_of_the_actually_tree =
  //       get_heights_which_are_superior_to_the_height_of_the_actually_tree_in(
  //         heigths_to_the_right_of_the_height_of_the_actual_tree,
  //         height_of_actual_tree
  //       );
  //     // console.log("right_heights_which_are_superior_to_the_height_of_the_actually_tree", right_heights_which_are_superior_to_the_height_of_the_actually_tree)

  //     if (
  //       above_heights_which_are_superior_to_the_height_of_the_actually_tree.length ===
  //         0 ||
  //       below_heights_which_are_superior_to_the_height_of_the_actually_tree.length ===
  //         0 ||
  //       left_heights_which_are_superior_to_the_height_of_the_actually_tree.length ===
  //         0 ||
  //       right_heights_which_are_superior_to_the_height_of_the_actually_tree.length ===
  //         0
  //     ) {
  //       number_of_visibles_trees += 1;
  //       // console.log("number_of_visibles_trees", number_of_visibles_trees);
  //     }

  //     // // PART TWO
  //     // console.log("LAST",heigths_to_the_left_of_the_height_of_the_actual_tree[heigths_to_the_left_of_the_height_of_the_actual_tree.length-1])

  //     for (
  //       let i = heigths_to_the_left_of_the_height_of_the_actual_tree.length-1;
  //       i >=0;
  //       i--
  //     ) {
  //       if (
  //         heigths_to_the_left_of_the_height_of_the_actual_tree[i] ===
  //         height_of_actual_tree
  //         ) {
  //           number_of_trees_visible_from_the_current_tree+=1
  //           break;
  //       }
  //       else if (heigths_to_the_left_of_the_height_of_the_actual_tree[i]<heigths_to_the_left_of_the_height_of_the_actual_tree[i+1]) {
  //         number_of_trees_visible_from_the_current_tree+=1
  //         break

  //      }
  //     }
  //   }
  // }

  for (let line = 0; line < heights_of_trees_in_number.length; line++) {
    let actual_line = heights_of_trees_in_number[line];
    console.log("ACTUAL LINE-------> " + heights_of_trees_in_number[line]);

    // I buckle j=1 to j=heights_of_trees_in_number-1 for jump element which is on the first and last columns
    for (let column = 0; column < heights_of_trees_in_number.length; column++) {
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
      // console.log(
      //   "heigths_to_the_left_of_the_height_of_the_actual_tree",
      //   heigths_to_the_left_of_the_height_of_the_actual_tree
      // );

      let heigths_to_the_right_of_the_height_of_the_actual_tree =
        take_the_heights_after_the_current_height(
          line_of_this_tree,
          index_of_the_height_of_the_actual_tree_in_the_line_array + 1
        );
      console.log("heigths_to_the_right_of_the_height_of_the_actual_tree",heigths_to_the_right_of_the_height_of_the_actual_tree)

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

      // // PART TWO
      // console.log("LAST",heigths_to_the_left_of_the_height_of_the_actual_tree[heigths_to_the_left_of_the_height_of_the_actual_tree.length-1])

      let panoramic_score_for_this_tree = get_number_of_trees_visible_from_the_current_tree_on_the_left(heigths_to_the_left_of_the_height_of_the_actual_tree)*get_number_of_trees_visible_from_the_current_tree_on_the_right(
        heigths_to_the_right_of_the_height_of_the_actual_tree)*get_number_of_trees_visible_from_the_current_tree_on_the_left(heigths_above_the_height_of_the_actual_tree)*get_number_of_trees_visible_from_the_current_tree_on_the_right(
          heigths_below_the_height_of_the_actual_tree
      );


      if (panoramic_score_for_this_tree > highest_panoramic_score_for_any_tree)
        {highest_panoramic_score_for_any_tree = panoramic_score_for_this_tree;
        console.log("highest_panoramic_score_for_any_tree",highest_panoramic_score_for_any_tree)}

      function get_number_of_trees_visible_from_the_current_tree_on_the_left(
        array
      ) {
        let number_of_trees_visible_from_the_current_tree = 0;
        for (let i = array.length - 1; i >= 0; i--) {
          if (array[i] >= height_of_actual_tree) {
            number_of_trees_visible_from_the_current_tree += 1;
            break;
          } else {
            number_of_trees_visible_from_the_current_tree += 1;
            // break
          }
        }
        return number_of_trees_visible_from_the_current_tree;
      }

      function get_number_of_trees_visible_from_the_current_tree_on_the_right(
        array
      ) {
        let number_of_trees_visible_from_the_current_tree = 0;
        for (let i = 0; i < array.length; i++) {
          if (array[i] >= height_of_actual_tree) {
            number_of_trees_visible_from_the_current_tree += 1;
            break;
          } else {
            number_of_trees_visible_from_the_current_tree += 1;
            // break
          }
        }
        console.log(
          "highest_panoramic_score",
          highest_panoramic_score_for_any_tree
        );
        console.log(
          "number_of_trees_visible_from_the_current_tree",
          number_of_trees_visible_from_the_current_tree
        );

        return number_of_trees_visible_from_the_current_tree;
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
  // console.log(
  //   "number_of_trees_visible_from_the_current_tree>>>>>>",
  //   number_of_trees_visible_from_the_current_tree
  // );
  console.log("highest_panoramic_score", highest_panoramic_score_for_any_tree);
  // console.log(
  //   "VISIBLE TREE >>>>",
  //   number_of_visibles_trees + number_of_trees_in_the_border
  // ); // FIRST RESULT :1676
});
