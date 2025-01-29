// freelancer array
const freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 },
  { name: "Carol", occupation: "Programmer", startingPrice: 70 },
];

const names = ["Maria", "Nushi", "Mohammed", "Jose", "Wei", "Ahmed"];

const occupations = [
  "Home Health Care",
  "Retail Salesperson",
  "Fast Food",
  "Nurse",
  "Office Clerks",
  "Programmer",
];

// calculate and display the average starting price
// add new freelancers dynamically every few seconds
// update the freelancer list and average price in real-time

function init() {
  const root = document.querySelector("#root");

  /* header */
  const h1 = document.createElement("h1");
  h1.textContent = "Freelancer Forum";
  root.append(h1);

  const p = document.createElement("p");
  // insert averagePrice function here
  p.textContent = "The average starting price is $30";
  root.append(p);

  const h2 = document.createElement("h2");
  h2.textContent = "Available Freelancers";
  root.append(h2);

  /** example
  <table>
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
   */

  const table = document.createElement("table");

  /* table header */
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  ["Name", "Occupation", "Starting Price"].forEach((headers) => {
    const th = document.createElement("th");
    th.textContent = headers;
    headerRow.append(th);
  });

  thead.append(headerRow);
  table.append(thead);

  /* table body */
  const tbody = document.createElement("tbody");

  freelancers.forEach((freelancer) => {
    const dataRow = document.createElement("tr");

    for (const key in freelancer) {
      const td = document.createElement("td");
      td.textContent = freelancer[key];
      dataRow.append(td);
    }
    tbody.append(dataRow);
  });
  table.append(tbody);

  root.append(table);
}

init();
