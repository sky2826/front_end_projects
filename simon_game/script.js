var sound = {
  red:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
  green:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
  blue:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
  yellow:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
};
$(document).ready(function(){
   var running=false;
   var score_count=0;
   var answer=false;
   var color;
   var count=1;
   var answer_count=0;
   var j=0;
  var status=false;
  var pattern_arr=[];
  var color_arr=["green","red","blue","yellow"];
  function win(){
    window.alert("win");
    window.location.href=window.location.href;
  }
  function set_values(){
    running=false;
   score_count=0;
   answer=false;
   count=1;
   answer_count=0;
   j=0;
  status=false;
  pattern_arr=[];
  color_arr=["green","red","blue","yellow"];
  }
  function active(color){
      switch(color){
      case "green":
         sound["green"].play();
         $("#green").removeClass("green");
         $("#green").addClass("green_active");
         j++;
         break;
      case "red":
         sound["red"].play();
         $("#red").removeClass("red");
         $("#red").addClass("red_active");
         j++;
         break;
      case "blue":
         sound["blue"].play();
         $("#blue").removeClass("blue");
         $("#blue").addClass("blue_active");
         j++;
         break;
      case "yellow":
         sound["yellow"].play();
         $("#yellow").removeClass("yellow");
         $("#yellow").addClass("yellow_active");
         j++;
         break;
                         }
    
  }
  function deactive(){
           switch(color){
      case "green":
         $("#green").removeClass("green_active");
         $("#green").addClass("green");
         break;
      case "red":
         $("#red").removeClass("red_active");
         $("#red").addClass("red");
         break;
      case "blue":
         $("#blue").removeClass("blue_active");
         $("#blue").addClass("blue");
         break;
      case "yellow":
         $("#yellow").removeClass("yellow_active");
         $("#yellow").addClass("yellow");
         break;
                         }
  }
  function run_pattern(){
    $("#count").val(score_count);
    color=pattern_arr[j];
    active(color)
    if(j<count){
      setTimeout(deactive,400);
      setTimeout(run_pattern,800);
    }
    else{
         setTimeout(deactive,400);
         setTimeout(function(){answer=true;},500);
      j=0;
    }
  }
    function check_pattern(){
    if(color==pattern_arr[answer_count]){
      answer_count+=1;
      if(answer_count==count){
        answer_count=0;
        score_count+=1;
        answer=false;
        count+=1;
        j=0;
        if(score_count==20){
          win()
        }
        else{
        setTimeout(run_pattern,500);
        }
      }
    }
      else{
        window.alert("Wrong");
        answer_count=0;
        j=0;
        setTimeout(run_pattern,500);
      }
  }
  function pattern_setter(){
      pattern_arr.push(color_arr[Math.ceil(Math.random()*4)-1]);
  }
  $("#start").click(function(){
    if(!running){
      if(status){
      running=true;
      $("#count").val(score_count);
      j=0;
        run_pattern();
    }
    }
  });
  $("#green").height( $("#green").width());
  $("#red").height( $("#red").width());
  $("#blue").height( $("#blue").width());
  $("#yellow").height( $("#yellow").width());
  $("#count").prop('disabled',true);
  $("#onoff").click(function(){
    if(!status){
      set_values();
    $("#onoff").html("OFF");
    $("#onoff").attr("class","btn btn-danger");
      status=true;
      j=0;
      $("#count").val("--");
       for(var i=0;i<20;i++){
  pattern_setter();
  }
    }
    else{
            var highestTimeoutId = setTimeout(";");
for (var i = 0 ; i < highestTimeoutId ; i++) {
    clearTimeout(i); 
}
        $("#onoff").html("ON");  
    $("#onoff").attr("class","btn btn-success");
      status=false;
      pattern_arr=[];
      $("#count").val("");
      answer=false;
      j=0;
    }
  });
  $(".block").click(function(){
    if(answer){
       color=this.id;
      active(color);
      setTimeout(deactive,100);
      setTimeout(check_pattern,150);
    }
  });
});