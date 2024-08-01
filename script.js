// document.getElementById("n").style.fontColor="blue";
// document.getElementById("n").style.fontSize="20px";
// document.getElementById("n").style.color ="red";
// var s="ahmed";
function total(){
    var num1=document.getElementById("in1").value
    var num2=document.getElementById("in2").value
         num1=Number.parseFloat(num1)
         num2=Number.parseFloat(num2)
         var total=num1+num2;
         document.getElementById("total").innerHTML=total
         
         
}
function dels(){
    document.getElementById("total").innerText=0
    document.getElementById("in1").value=0
    document.getElementById("in2").value=0

    
} 

// function drob(){
//     var code="<tr><td>ahmed</td><td>86431255</td></tr>"
//     document.getElementById()
// }

