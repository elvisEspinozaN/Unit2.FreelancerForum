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

// global references
let tableBody, averagePriceDisplay;

// calculates the average starting price of freelancers
function averageStartingPrice() {
  const totalAmount = freelancers.reduce(
    (acc, curr) => acc + curr.startingPrice,
    0
  );
  return (totalAmount / freelancers.length).toFixed(2);
}

function addFreelancer() {
  const newFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    startingPrice: Math.floor(Math.random() * 80) + 20,
  };

  freelancers.push(newFreelancer);

  // appending only the new row
  const tr = document.createElement("tr");
  [
    newFreelancer.name,
    newFreelancer.occupation,
    `$${newFreelancer.startingPrice}`,
  ].forEach((e) => {
    const td = document.createElement("td");
    td.textContent = e;
    tr.append(td);
  });

  tableBody.append(tr);

  // updates average price
  averagePriceDisplay.textContent = `The average starting price is $${averageStartingPrice()}.`;
}

// tbody : initial freelancers and replaces with new freelancers
function freelancerBody() {
  tableBody.replaceChildren(
    ...freelancers.map(({ name, occupation, startingPrice }) => {
      const tr = document.createElement("tr");
      [name, occupation, `$${startingPrice}`].forEach((text) => {
        const td = document.createElement("td");
        td.textContent = text;
        tr.append(td);
      });
      return tr;
    })
  );
}

function init() {
  const root = document.querySelector("#root");

  const h1 = document.createElement("h1");
  h1.textContent = "Freelancer Forum";

  averagePriceDisplay = document.createElement("p");
  averagePriceDisplay.textContent = `The average starting price is $${averageStartingPrice()}.`;

  const h2 = document.createElement("h2");
  h2.textContent = "Available Freelancers";

  // table
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  tableBody = document.createElement("tbody");

  // theader
  const headerRow = document.createElement("tr");
  ["Name", "Occupation", "Starting Price"].forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.append(th);
  });

  // tbody
  freelancerBody();

  thead.append(headerRow);
  table.append(thead, tableBody);
  root.append(h1, averagePriceDisplay, h2, table);
}

setInterval(addFreelancer, 3000);
init();
