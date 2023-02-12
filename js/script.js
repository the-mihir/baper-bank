// ? This is for login Page Verification ===============


const submitBtn = document.getElementById('btnSubmit');
submitBtn.addEventListener('click', function () {
    const userEmail = document.getElementById('userEmail');
    const email = userEmail.value;

    const getPass = document.getElementById('userPass');
    const pass = getPass.value;

    if (email === 'test@mail.com' && pass === '12345') {
        window.location.href = 'bank.html';
    }
    else {
        alert("You Input invalid credential, Please Try Again.");
    }


})

//? End of  login Page Verification ===============

