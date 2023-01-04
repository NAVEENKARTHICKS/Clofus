function countChars(name) {
  let count = 0;
  for (let g = 0; g < name.length; g++) {
    const c = name[g];
    if (c === 'C' || c === 'L' || c === 'O' || c === 'F' || c === 'U' || c === 'S') {
      count++;
    }
  }
  return count;
}

const name = "GOKUL";
const charCount = countChars(name);
console.log(`Number of occurrences of C, L, O, F, U, S in ${name}: ${charCount}`);