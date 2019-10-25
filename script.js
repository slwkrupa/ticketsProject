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


function checkNPush(boxId, firstBtn, secondBtn, valueOfText){

    var sum = parseFloat(document.getElementById('tc').value);
    var tax = parseFloat(document.getElementById('tctax').value);
    var txt = parseFloat(document.getElementById(valueOfText).value);

    if(document.getElementById(boxId).checked){
        document.getElementById(firstBtn).disabled=true;
        document.getElementById(secondBtn).disabled=true;

        sum += txt;
        tax = (sum*0.23);
        document.getElementById('tc').value=(sum).toFixed(2);
        document.getElementById('tctax').value=(tax).toFixed(2);
    }else{
        document.getElementById(firstBtn).disabled=false;
        document.getElementById(secondBtn).disabled=false;

        sum -= txt;
        tax = (sum*0.23);
        document.getElementById('tc').value=(sum).toFixed(2);
        document.getElementById('tctax').value=(tax).toFixed(2);
    }
}