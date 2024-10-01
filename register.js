const form = document.getElementById('form');
let error = document.getElementById('error');

function displayError(msg){
    error.style.visibility = 'visible';
    error.innerHTML = msg;
}

function hideError(){
    error.style.visibility = 'hidden';
}

form.addEventListener('submit',function(e){
    let name = document.getElementById('name').value;
    console.log(name);
    let email = document.getElementById('email').value;
    let telephone = document.getElementById('telephone').value;
    let date = document.getElementById('date').value;
    let address = document.getElementById('address').value;
    let debit = document.getElementById('debit').checked;
    let credit = document.getElementById('credit').checked;
    let aggrement = document.getElementById('aggrement').checked;
    
    if(name == '' || email == '' || telephone == ''){
        displayError("All field must be filled");
    }
    else if(!email.includes('@')){
        displayError('Email must be include "@"');
    }
    else if(!email.includes('.com')){
        displayError('Email must be endswith ".com"');
    }
    else if(date==""){
        displayError('*Input your date of birth, Please');
    }
    else if(!address.startsWith('Jalan. ')){
        displayError('Address must be started from "Jalan. "');
    }
    else if(!debit && !credit){
        displayError("Payment must be filled");
    }
    else if(!aggrement){
        displayError("Agreement must be filled ");
    }
    else{
        if(confirm("Are you sure to complete the payment")){
            window.location.replace('home.html'); // buat redirect
        }
        else{
            location.reload();
        }
    }
    e.preventDefault();
    setTimeout('hideError()',3000);
});