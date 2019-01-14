var numbers = document.getElementsByClassName('number');
var out = document.getElementById("output");
var operations = document.getElementsByClassName("operation");
var operationsList = ['/','*','-','+'];

function addIntoTextView(element){
    if (out.value == '0'){
        out.value='';
    }
    console.log(out.value);
    out.value+=element;
}

// adding in eventlisteners for the number buttons
for(let i=0;i<11;i++){
    if(i<9){
    numbers[i].addEventListener('click',function(){addIntoTextView(i+1);});
    }
    if(i==9){
        numbers[i].addEventListener('click', function () {addIntoTextView('.');});
    }
    if (i == 10) {
        numbers[i].addEventListener('click', function () {addIntoTextView('0');});
    }   
}
// adding in eventlisteners for operation buttons
for(let i=0;i<4;i++){
    operations[i].addEventListener('click',function(){
        if(out.value.length!=0)
        addIntoTextView(operationsList[i]);
    })
    console.log(operations[i].childNode);
}
//adding in eventlistener for equal
var equals = document.getElementById("equal");
equals.addEventListener('click',function(){
    if(out.value.length>0){
var expression = out.value;
var result = eval(expression);
out.value = result;
}
})
// adding in eventlistener for c
var clear = document.getElementById("clear");
clear.addEventListener('click',function(){out.value=''});
