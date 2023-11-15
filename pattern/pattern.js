function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= rows; j++) {
      line += `${i * j} `;
    }
    console.log(line.trim());
  }
}

// Mencetak pola untuk 5 baris
printPattern(5);
