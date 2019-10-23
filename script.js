function processingData(op, ticketNumber, ticketValue, price){

    var tkn = document.getElementById(ticketNumber).value; //tkn - ticketnumber
    var tkv = document.getElementById(ticketValue).value;  //tkv - ticketvalue

    if(op=='dod'){
        tkn++;
        document.getElementById(ticketNumber).value = tkn;
        tkv = parseFloat(price*tkn);
        document.getElementById(ticketValue).value = tkv;
    }
}