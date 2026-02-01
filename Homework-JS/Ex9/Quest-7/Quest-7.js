function showEventProperties(event) {
  document.getElementById('eventType').textContent = event.type;

  const table = document.createElement("table");
  const thead = table.createTHead();
  const headRow = thead.insertRow();
  headRow.insertCell().textContent = "#";
  headRow.insertCell().textContent = "Property";
  headRow.insertCell().textContent = "Value";

  const tbody = document.createElement("tbody");
  let index = 0;
  for (let p in event) {
    const row = tbody.insertRow();
    row.className = index % 2 === 0 ? "even" : "odd";
    row.insertCell().textContent = index;
    row.insertCell().textContent = p;
    let value;
    try {
      value = event[p];
    } catch {
      value = "[unreadable]";
    }
    row.insertCell().textContent =
      value === undefined ? "undefined" : value.toString();
    index++;
  }
  table.appendChild(tbody);

  const container = document.getElementById("tableContainer");
  container.innerHTML = "";
  container.appendChild(table);
}

window.onload = function (event) {
  showEventProperties(event);
};