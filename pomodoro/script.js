$(document).ready(function(){
 var pausesess=false;
var pausebrk=false;
var runsess=false;
var runbrk=false;
var sessvar;
var brkvar;
var sessval;
var brkval;
  
  function breaks(){
    brkvar=setInterval(function(){
       brkval--;
      $("#time").html((brkval-(brkval%60))/60+":"+brkval%60);
        if(brkval==0){
        runsess=true;
        runbrk=false;
        clearInterval(brkvar);
        $("#header").html("Session");
        sessval=$("#sesval").html()*60;
        $("#time").html(sessval/60+":"+"00");
          $(".main").css("border-color","green");
        session();
      }
    },1000);
    
  }
  function session(){
    sessvar=setInterval(function(){
       sessval--;
      $("#time").html((sessval-(sessval%60))/60+":"+sessval%60);
     
      if(sessval==0){
        runsess=false;
        runbrk=true;
        clearInterval(sessvar);
        $("#header").html("Break!");
        brkval=$("#brkval").html()*60;
        $("#time").html(brkval/60+":"+"00");
        $(".main").css("border-color","red");
        breaks();
      }
    },1000);
  }
  function clock(){
    if(pausesess){
      pausesess=false;
      runsess=true;
      session();
    }
    else if(pausebrk){
      pausebrk=false;
      runbrk=true;
      breaks();
    }
    else if(!runsess && !runbrk){
      runsess=true;
      sessval=$("#sesval").html()*60;
      $(".main").css("border-color","green");
      session();
    }
    else if(runsess){
      pausesess=true;
      clearInterval(sessvar);
    }
    else if(runbrk){
      pausebrk=true;
      clearInterval(brkvar);
    }
  }
  $(".brk").click(function(){
    var val= $("#brkval").html();
    if(this.id=="inc"){
      $("#brkval").html(parseInt(val)+1);
    }
    else if(this.id="dec" && val>=2){
       $("#brkval").html(parseInt(val)-1);
    }
  });
    $(".ses").click(function(){
    var val= $("#sesval").html();
    if(this.id=="inc"){
      $("#sesval").html(parseInt(val)+1);
    }
    else if(this.id="dec" && val>=2){
       $("#sesval").html(parseInt(val)-1);
    }
  });
  $("#reset").click(function(){
    if(runsess){
      runsess=false;
      clearInterval(sessvar);
    }
    if(runbrk){
      runbrk=false;
      clearInterval(brkvar);
    }
    pausesess=false;
    pausebrk=false;
    runsess=false;
    runbrk=false;
    $("#brkval").html("5");
    $("#sesval").html("25");
    $("#time").html("");
     $(".main").css("border-color","lightblue");
     $("#header").html("Session");
  });
  $(".main").click(function(){
    clock();
  });
});