/**
 * @author Isaac Biggs
 * @version 1.0.0
 * @date 2025-14-12
 * @fileoverview This program will display a pattern of numbers in a right angled triangle
*/

//variables
let rows = prompt("How many rows do you want?")

//creates and displays the triangle
for (let triangle1 = 1; triangle1 <= rows; triangle1++) {
  let line: string = "";

  for (let triangle2 = 1; triangle2 <= triangle1; triangle2++) {
    line += triangle2;
  }

  console.log(line);
}

console.log("\nDone.")