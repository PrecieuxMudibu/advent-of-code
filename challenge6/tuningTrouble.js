import fs from "fs";
let data;
fs.readFile("data.txt", (err, res) => {
  if (err) throw err;
  data = res.toString();

  function removeDuplicateCharacters(string) {
    return string
      .split("")
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join("");
  }

  function first_position_where_last_characters_are_different(
    begin,
    characters,
    numberOfCharacter
  ) {
    for (let i = begin; i < characters.length; i++) {
      let fourthLastCharacters = characters.slice(i, i + numberOfCharacter);
      if (
        removeDuplicateCharacters(fourthLastCharacters).length ===
        fourthLastCharacters.length
      ) {
        return (numberOfCharacter += i);
        break;
      }
    }
  }

  console.log(first_position_where_last_characters_are_different(0, data, 4)); // First answers : 1361
  console.log(first_position_where_last_characters_are_different(0, data, 14)); // Second answers : 3263
});
