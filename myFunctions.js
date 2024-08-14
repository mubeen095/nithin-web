function checkPhone(myId, msgId){
    const element = document.getElementById(myId);
    const element2= document.getElementById(msgId);
    const val = element.value;
    //123-456-7890
    var simpleRe=new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$');
    const retVal=simpleRe.test(val);
     
    if(retVal){
        element2.innerText="";
        element2.style.display='None';
    }
    else{
        element2.style.display='block';
        element2.style.backgroundColor='red';
        element2.style.color='white';
        element2.style.textAlign='center';
        element2.innerText="Please enter a phone number in the format of: 123-456-7890";
    }
    return retVal

}
