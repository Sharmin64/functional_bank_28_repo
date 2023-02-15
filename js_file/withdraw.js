document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  const newWithdrawTotal =
    parseInt(previousWithdrawTotal) + parseInt(newWithdrawAmount);
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalaceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalaceTotal);
  console.log("you are great");
});
