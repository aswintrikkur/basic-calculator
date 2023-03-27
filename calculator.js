var display= document.getElementById("display");
// display.value="hello";

function btnClick(value){
    display.value+=value;
}
function clearDisplay(){
    display.value="";
}
function result(){
    let rslt=eval(display.value);
    display.value= rslt;
    
}
