var valu="";
var arr = [];
function submit(){
  valu=document.getElementById("todo").value;
  if(valu==""){
     var errors=document.getElementById("error");
     errors.innerHTML="please enter list";
     errors.setAttribute("class","redtext");
  }
  else{
  arr.push(valu);
  var list="";
  for(let i=0;i<arr.length;i++){
   list=list+"<li>"+arr[i]+"</li>"
  }
  document.getElementById("todo").value="";
  document.getElementById("list").innerHTML=list;
  }
}

