function processingData(op, ticketNumber, ticketValue, price){ //op-operator

    var tkn = document.getElementById(ticketNumber).value; //tkn - ticketnumber
    var tkv = document.getElementById(ticketValue).value;  //tkv - ticketvalue
  
    if(op=='add'){
        if(tkn<10){
            tkn++;
            document.getElementById(ticketNumber).value = tkn;
            tkv = parseFloat(price*tkn);
            document.getElementById(ticketValue).value = tkv;
        }else{
            button.disabled="disabled";
        }
    }
    else if(op=='sub'){
        if(tkn>=1){
            tkn--;
            document.getElementById(ticketNumber).value = tkn;
            tkv = parseFloat(price*tkn);
            document.getElementById(ticketValue).value = tkv;
        }else{
            button.disabled="disabled";
        }
    }
}