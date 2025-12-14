/**
 * @author Isaac Biggs
 * @version 1.0.0
 * @date 2025-14-12
 * @fileoverview This program will display a patter of numbers in a right angled triangle
*/

//variables
let rows: number = 5;

//creates and displays the triangle
for (let i = 1; i <= rows; i++) {
  let line: string = "";

  for (let j = 1; j <= i; j++) {
    line += j;
  }

  console.log(line);
}