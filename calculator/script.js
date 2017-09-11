document.getElementById("a").value="0";
var set=false;
$(document).ready(function(){
  var arr = [];
  function cal(){
    while(arr.length!=1){
      var res;
      var var1=Number((arr[0]));
      var op=arr[1];
      var var2=Number((arr[2]));
      switch(op){
        case "+":
          res=Number((var1+var2));
          break;
        case "*":
          res=Number((var1*var2));
          break;
        case "/":
          res=Number((var1/var2));
          break;
        case "-":
          res=Number((var1-var2));
          break;
               }
      arr.splice(0,3,res);
    }
    if(arr.length==1){
        var res=String(arr[0]);
        if(res.length>8){
          if(res.indexOf(".")==-1 || res.indexOf(".")>=9){
          $("#a").val("0");
          window.alert("max length 8");
          }
        }
      else{
        $("#a").val(Number(arr[0].toPrecision(8)));
        set=true;
      }
      arr=[];
        }
      
  }
  $("#equal").click(function(){
    var last=$("#a").val();
    if(!(last=="0" || last =="+" || last =="*" || last =="-" || last =="/" || last =="" )){
        arr.push($("#a").val());
        if(arr.length>=3){
          cal();
        }
    }
  });
  $(".num").click(function(){
    if(set){
      set=false;
      arr=[];
      $("#a").val("0");
    }
    if($("#a").val().toString().length==8){
      $("#a").val("0");
      window.alert("max length")
      arr=[];
    }
    else{
    var num=$("#a").val();
    if(!(num=="+" ||  num=="*" || num=="/" || num=="-")){
      if(num.indexOf(".")!=-1 || this.id=="."){
        $("#a").val(num+this.id);
      }
    
      else{
        $("#a").val(num*10+Number(this.id));
      }
    }
    else {
      if(this.id!="0" || this.id!=".")
      {$("#a").val(Number(this.id));}
      else{
        if(this.id=="."){
          $("#a").val("0.");
        }
      }
      
    }
    }
  });
 
  $(".sign").click(function(){
    if(set){
      arr.push(Number($("#a").val()));
      arr.push(this.id);
      $("#a").val(this.id);
      set=false;
    }
    else{
    var last=$("#a").val();
      if(!(last=="*" || last=="-" || last=="/" || last=="+")){
     if($("#a").val()!=0){
      arr.push(Number($("#a").val()));
      arr.push(this.id);
      $("#a").val(this.id);
     }
    }
      
    }
  });
  $("#cln").click(function(){
    arr=[];
    $("#a").val("0");
  });
  $("#lcln").click(function(){
    var entery=$("#a").val();
    if(entery=="/" || entery=="+" || entery=="-" || entery=="*"){
      var last=arr[arr.length-2];
      arr.splice(arr.length-2,2);
      $("#a").val(last);
    }
    else{
      if(arr.length==0){
        $("#a").val("0");
      }
      else{
      $("#a").val(arr[arr.length-1]);
      }
    }
  });
});