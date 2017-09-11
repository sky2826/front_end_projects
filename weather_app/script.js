var set="f";
if(navigator.geolocation){
  
   navigator.geolocation.getCurrentPosition(setweather,showerror);
}
else{
    window.alert("service not availabel");
}
function setweather(position){
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+position.coords.latitude+"&lon="+position.coords.longitude,function(jsonobj){ 
    $(".temp").html(jsonobj.main.temp);
    $("#link").html("&#8451;");
    $("#type").html(jsonobj.weather[0].description);
    $("#image").attr("src",jsonobj.weather[0].icon);
  });
  
 $.getJSON("https://freegeoip.net/json/?callback=",function(jsonobj){
  $(".location").html(jsonobj.city+","+jsonobj.region_name+","+jsonobj.country_code);
  
});
  

}
function showerror(error){
   window.alert(error.POSITION_UNAVAILABLE);   
}

function call(){
  if (set==="f"){
    document.getElementById("temp").innerHTML= ((document.getElementById("temp").innerHTML)*9)/5+32;
  document.getElementById("link").innerHTML="&#8457;";
    set="c";
  }
  else{
    document.getElementById("temp").innerHTML= ((document.getElementById("temp").innerHTML-32)*5)/9;
    document.getElementById("link").innerHTML="&#8451;";
    set="f";
  }
}