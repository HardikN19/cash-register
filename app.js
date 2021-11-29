const bill=document.querySelector('.bill-amount');
const cash=document.querySelector('.cash-given');
const btnCheck=document.querySelector('.check');

const message=document.querySelector('.error-message');
const notes=document.querySelectorAll('.no-of-notes');
const availableNotes=[2000,500,100,20,10,5,1];

btnCheck.addEventListener("click",validateAmount);

function validateAmount(){
    hideMessage();
    if(Number(bill.value)>0){
        if(Number(cash.value)>=Number(bill.value)){
            const amountReturned=Number(cash.value)-Number(bill.value);
            calculateChange(amountReturned);

        }else{
            showMessage("The cash atleast equal to bill amount");
        }

    }else{
        showMessage("The bill amount should be greater than 0");

    }
}

function calculateChange(amountReturned){
    for(var i=0;i<availableNotes.length;i++){
        var numberOfNotes=Math.trunc(amountReturned/availableNotes[i]);
        amountReturned=amountReturned%availableNotes[i];
        notes[i].innerText=numberOfNotes;
    }
}

function hideMessage(){
    message.style.display="none";
}

function showMessage(mgs){
    message.style.display="block";
    message.innerText=mgs;
}


