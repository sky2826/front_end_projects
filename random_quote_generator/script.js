$(document).ready(function(){
  
  
  $("#bt").click(function(){
    

    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#quote").html('"'+
          response.quoteText + '"');
        $("#author").html("&mdash;"+response.quoteAuthor)
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });


  });
  
});