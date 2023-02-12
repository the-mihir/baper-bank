const inputAmount = document.getElementById('depositMoney');
const depoBtn = document.getElementById('btnDeposit');
depoBtn.addEventListener('click', function () {
    const depositMoney = document.getElementById('depositMoney');
    const userInputAmountString = depositMoney.value; // geting New value for user
    const userAmount = parseFloat(userInputAmountString);
    depositMoney.value = ""
    if (isNaN(userAmount)) {
        alert("Please Provide a Valid Number")
        return;
    }



    const depositTotalElement = document.getElementById('depositTotal');
    const preDepositAmountString = depositTotalElement.innerText; // geting Old Inner text Here 
    const preDepositAmount = parseFloat(preDepositAmountString);

    const inTotal = preDepositAmount + userAmount;

    depositTotalElement.innerText = inTotal;


    const oldCurrentTotal = document.getElementById('currentTotal');
    const prevBalanceString = currentTotal.innerText;
    const prevBalance = parseFloat(prevBalanceString);
    oldCurrentTotal.innerText = prevBalance + userAmount;

    depositMoney.value = ""
})