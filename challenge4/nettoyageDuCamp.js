import fs from "fs";
let data;
fs.readFile("data.txt", (err, res) => {
  if (err) throw err;

  data = res.toString().split("\n");

  let table = [];
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].split(",");

    data[i][0] = data[i][0].split("-");
    data[i][1] = data[i][1].split("-");

    data[i][0] = [parseInt(data[i][0][0]), parseInt(data[i][0][1])];
    data[i][1] = [parseInt(data[i][1][0]), parseInt(data[i][1][1])];
  }

  let overlap = 0;
  function firstQuestion(array) {
    for (let i = 0; i < array.length; i++) {
      let serie_1_start = array[i][0][0];
      let serie_1_end = array[i][0][1];

      let serie_2_start = array[i][1][0];
      let serie_2_end = array[i][1][1];
      if (
        (serie_1_start <= serie_2_start && serie_2_end <= serie_1_end) ||
        (serie_1_start >= serie_2_start && serie_2_end >= serie_1_end)
      ) {
        overlap += 1;
      }
    }
    return overlap;
  }

  function secondQuestion(array) {
    for (let i = 0; i < array.length; i++) {
      let serie_1_start = array[i][0][0];
      let serie_1_end = array[i][0][1];

      let serie_2_start = array[i][1][0];
      let serie_2_end = array[i][1][1];

      // il faut que serie1start soit superieure ou égale seri2start et inferieure a serie2End

      // il faut que serie2start soit superieure ou égale serie1start et inferieure a serie1End

      if (
        (serie_1_start >= serie_2_start && serie_1_start <= serie_2_end) ||
        (serie_2_start >= serie_1_start && serie_2_start <= serie_1_end)
      ) {
        overlap += 1;
      }
    }
    return overlap;
  }
  console.log("FIRST QUESTION", firstQuestion(data));
  console.log("SECOND QUESTION", secondQuestion(data));
});
