document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  const previousDepositTotal = getTextElementValueById("deposit-total");
  console.log(newDepositAmount);
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  if (isNaN(newDepositAmount)) {
    alert("please do not enter any other character accept number");
  }
  setTextElementValueById("deposit-total", newDepositTotal);
  const previousBalanceTotal = getTextElementValueById(" balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
