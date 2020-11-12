function getHis(){
    return document.getElementById("hiso-val").innerText;
}
function printhist(num){
    document.getElementById("hiso-val").innerText=num;
}
function getout(){
    return document.getElementById("out-val").innerText;
}
function printOut(num){
    if(num ==""){
        document.getElementById("out-val").innerText=num;
    } else{
    document.getElementById("out-val").innerText= getfornumb(num);
}}
// put the come between the numbers
function getfornumb(num){
    if(num == "-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function revresn(num){
    return Number(num.replace(/,/g,''));
}
var operat = document.getElementsByClassName("operator");
for(var i = 0; i < operat.length; i++){
    operat[i].addEventListener('click', function(){
        if(this.id == "clear"){
            printOut("");
            printhist("");
        }
 else if(this.id=="backspace"){
     var outp = revresn(getout()).toString();
if(outp){//if the ouput has value
outp = outp.substr(0, outp.length-1);
printOut(outp);
}
 } else{
     var outp = getout();
     var hiso = getHis();
     if(outp == "" && hiso !=""){
         if(isNaN(hiso[hiso.length-1])){
             hiso=hiso.substr(0, hiso.length-1)
         }
     }
     if(outp !="" || hiso !=""){
         // this is simmiler to the if statment and its called the condition if the value=true:false and the opposite
         outp= outp==""?
         outp: revresn(outp);
         hiso +=outp;
         if(this.id=="="){
             var res =eval(hiso);
             printOut(res);
             printhist("");
         }
         else{
             hiso +=this.id;
             printhist(hiso);
             printOut("")
         }
     }
 }
    })
}
var number = document.getElementsByClassName("number");
for(var i =0; i < number.length ; i++){
    number[i].addEventListener('click', function(){
        var outp = revresn(getout());
        if(outp !=NaN){ // if outp is a number
            outp = outp+this.id;
            printOut(outp);
        }
    })
}
