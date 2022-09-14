console.log("Calculate the Credit");
const type = document.querySelector("#type-of-credit");
const term = document.querySelector("#term");
const amount = document.querySelector("#amount");
const button = document.querySelector(".calculate-btn");
let rate = 0;
let payment = 0;

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (type.value === "House Loan") {
    rate = 1.29;
  } else if (type.value === "Consumer Loan") {
    rate = 1.99;
  } else if (type.value === "Car Loan") {
    rate = 1.79;
  }
  if (!type.value || !term.value || !amount.value) {
    window.alert("Please fill the all blanks!");
  }

  const charge_interest = rate / 100;
  payment =
    (amount.value * (charge_interest * (1 + charge_interest) ** term.value)) /
    ((1 + charge_interest) ** term.value - 1);

  getResults();
});

const getResults = () => {
  const result = document.querySelector(".results");
  console.log(result);

  result.innerHTML = 
  `<h2>Credit Information</h2>
     <table> 
      <tr>
        <th>Amount of Credit</th>
        <td>${amount.value}</td>
        <th>Credit type</th>
        <td>${type.value}</td>
      </tr>
      <tr>
        <th>Term</th>
        <td>${term.value}</td>
        <th>Rate of Charge Interest</th>
        <td>${rate}</td>
      </tr>
      <tr>
        <th>Total Amount</th>
        <td>${(payment * (term.value)).toFixed(2)} ₺</td>
        <th>Amount of Payment</th>
        <td>${payment.toFixed(2)} ₺</td>
      </tr>
    </table>`;
};
