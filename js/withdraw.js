const btnWithdraw = document.getElementById('btnWithdraw');
btnWithdraw.addEventListener('click', function () {

    const oldWithdraw = document.getElementById('oldWithdraw');
    const oldWithdrawAmountString = oldWithdraw.innerText;
    const oldWithdrawAmount = parseFloat(oldWithdrawAmountString);
    // Old Withdraw Record


    const userInputWithdraw = document.getElementById('withdrawMoney');
    const userInputWithdrawString = userInputWithdraw.value;
    const userInputWithdrawAmount = parseFloat(userInputWithdrawString);
    userInputWithdraw.value = ""
    if (isNaN(userInputWithdrawAmount)) {
        alert("Please Provide a Valid Number")
        return;
    }

    const preTotal = document.getElementById('currentTotal');
    const preTotalString = preTotal.innerText;
    const jomaTotal = parseFloat(preTotalString);



    if (userInputWithdrawAmount > jomaTotal) {
        alert("You Have Not Enough   Amount");
        return;
    }

    oldWithdraw.innerText = userInputWithdrawAmount + oldWithdrawAmount;
    preTotal.innerText = jomaTotal - userInputWithdrawAmount;







})