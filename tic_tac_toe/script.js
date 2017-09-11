$(document).ready(function(){
  var win_comb=[["one","four","seven"],["one","five","nine"],["one","two","three"],["two","five","eight"],["three","six","nine"],["three","five","seven"],["seven","eight","nine"],["four","five","six"]];
  var count=0;
  var player;
  var computer;
  var player_turn=false;
  var computer_turn=false;
  var maze_array;
  var player_array;
  var computer_array=[];
  var player_array=[];
  var winner_status=false;
  var  match=[];
  var c;
  function winner(user){
    if(user=="draw"){
      window.alert("drawn");
      window.location.href=window.location.href;
    }
    else{
      window.alert(user+ " won");
      window.location.href=window.location.href;
    }
  }
  function check(user){
    if(user=="player"){
      match=[];
      for(var i=0;i<win_comb.length;i++){
        c=3;
        var temp="";
        if(!(player_array.indexOf(win_comb[i][0])+1)){c--;temp=win_comb[i][0];}
        if(!(player_array.indexOf(win_comb[i][1])+1)){c--;temp=win_comb[i][1];}
        if(!(player_array.indexOf(win_comb[i][2])+1)){c--;temp=win_comb[i][2];}
          
          if(c==3){
          winner_status=true;
          winner("player");
        }
        else{
          if(c==2){
            if(temp!=""){
              match.push(temp);
            }
          }
        }
      }
      if(count==9 && !winner_status){
        winner("draw");
      }
    }
    else if(user=="computer"){
      for(var i=0;i<win_comb.length;i++){
        if(computer_array.indexOf(win_comb[i][0])+1 && computer_array.indexOf(win_comb[i][1])+1 && computer_array.indexOf(win_comb[i][2])+1){
          winner_status=true;
          winner("computer");
        }
      }
      if(count==9 && !winner_status){
        winner("draw");
      }
    }
  }
  function gocomp(){
    if(computer_turn == true && player_turn == false && !winner_status){
      var index=Math.floor(Math.random()*maze_array.length);
      if(match.length!=0 ){
        for(var i=0;i<match.length;i++){
          if(maze_array.indexOf(match[i])!=-1){
            index=maze_array.indexOf(match[i]);
            break;
          }
        }
      }
      $("#"+maze_array[index]).html(computer);
      computer_array.push(maze_array[index]);
      $("#"+maze_array[index]).off("click");
      maze_array.splice(index,1);
      computer_turn=false;
      player_turn=true;
      count+=1;
      if(count>=5){
        check("computer");
      }
    }
  }
 $(".block").height($(".block").width());
$(".block").css("line-height",$(".block").width()+"px");
  $("#myModal").modal();
  $("#x").click(function(){
    player="X";
    computer="O";
    player_turn=true;
    computer_turn=false;
    count=0;
    maze_array=["one","two","three","four","five","six","seven","eight","nine"];
    computer_array=[];
    player_array=[];
  });
    $("#o").click(function(){
    player="O";
    computer="X";
      player_turn=true;
      computer_turn=false;
      count=0;
      maze_array=["one","two","three","four","five","six","seven","eight","nine"];
      player_array=[];
      computer_array=[];
  });
  $(".block").click(function(){
    if(player_turn == true && computer_turn == false && !winner_status){
      $("#"+this.id).html(player);
      maze_array.splice(maze_array.indexOf(this.id),1);
      player_array.push(this.id);
      $("#"+this.id).off("click");
      player_turn=false;
      computer_turn=true;
      count+=1;
      if(count>=3){
        check("player");
      }
      setTimeout(gocomp,200);
    }
  });
  $("#refresh").click(function(){window.location.href=window.location.href;});
});