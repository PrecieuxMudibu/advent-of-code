///////////////////////////
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

  //     let ,height_of_actual_tree =
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