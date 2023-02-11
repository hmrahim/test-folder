const loanAmount = document.getElementById("loanamount");
const intarest = document.getElementById("intarest");
const insurence = document.getElementById("insurence");
const installment = document.getElementById("installment");
const button = document.getElementById("button");
const totalintarest = document.getElementById("totalintarest");
const totalamount = document.getElementById("totalamount");
const installmentweakly = document.getElementById("installmentweakly");
const installmentmonthly = document.getElementById("installmentmonthly");

button.addEventListener("click", function (e) {
  e.preventDefault();
  // const finalintarest = intarest.value.parseInt();
  // const finalLoanAmount = loanAmount.value.parseInt();
  // //const ff = parseInt(finalLoanAmount * finalintarest / 100)

  totalintarest.value =
    (Number(loanAmount.value) * Number(intarest.value)) / 100;

  insurence.value = (Number(loanAmount.value) * 1) / 100;
  const finalIntarest =
    (Number(loanAmount.value) * Number(intarest.value)) / 100;
  const totalPay = Number(loanAmount.value) + finalIntarest;
  totalamount.value = totalPay
  installmentweakly.value = Number(loanAmount.value) * 2.5 / 100
  installmentmonthly.value = Number(loanAmount.value) * 10 / 100

});
