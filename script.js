function processingData(op, ticketNumber, ticketValue, price){ //op-operator

    var tkn = document.getElementById(ticketNumber).value; //tkn - ticketnumber
    var tkv = document.getElementById(ticketValue).value;  //tkv - ticketvalue

    if(op=='add'){
        if(tkn<30){
            tkn++;
            document.getElementById(ticketNumber).value=tkn;
            tkv = parseFloat(price*tkn);
            document.getElementById(ticketValue).value=tkv;
        }else{
            button.disabled="disabled";
        }
        
    }

    else if(op=='sub'){
        if(tkn>=1){
            tkn--;
            document.getElementById(ticketNumber).value=tkn;
            tkv = parseFloat(price*tkn);
            document.getElementById(ticketValue).value=tkv;
        }else{
            button.disabled="disabled";
        }
    }
}


function checkBox(boxId, firstBtn, secondBtn,){

    if(boxId.checked){
        document.getElementById(firstBtn).disabled=false;
        document.getElementById(secondBtn).disabled=false;
    }else{
        document.getElementById(firstBtn).disabled=true;
        document.getElementById(secondBtn).disabled=true;
    }
}