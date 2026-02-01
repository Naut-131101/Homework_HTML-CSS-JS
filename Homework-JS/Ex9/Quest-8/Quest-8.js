const table = document.getElementById("table0");

const row = table.insertRow(-1);

for (let i = 0; i < 2; i++) {
  const cell = row.insertCell(-1);

  const text = document.createTextNode(
    "Row " + row.rowIndex + " Cell " + i
  );

  cell.appendChild(text);
}
