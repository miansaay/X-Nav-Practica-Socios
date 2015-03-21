
var num;
var hay_msjs = 0;
$(document).ready(function() {
  
   //Gestión JSON
   function upDate() {
      //console.log(num);
      $.getJSON("json/update.json", function(data) {
        
         //console.log(Date.parse(data.update[0].fecha));
         //console.log(Date.parse($("#fecha" + num + "").html()));
         if (Date.parse(data.update[0].fecha) > Date.parse($("#fecha" + num +"").html())) { 
	           $("#newmsg").html(data.update.length);
            //console.log(hay_msjs);
	           $("#vermsg").button().click(function() {
              if (hay_msjs == 0) {
	               $("#newmsg").html("0");
            
                for (var i = 0; i < data.update.length; i++) {
                  $("#timeline").prepend("<div><img src='" + data.update[i].avatar + "'/> <span>" + data.update[i].autor 
                  + ", " + data.update[i].titulo + "</span> </div>" + "<div><span>" + data.update[i].contenido + "</p>" 
                  + "<span id='fecha" + (i + 4 + 1) + "'>" + data.update[i].fecha + "</span></div>");
                }
                $("#timeline").accordion("refresh");
                num = num + data.update.length;
              } 
                hay_msjs = data.update.length;
           });
         
        }
     });
   };

   $.getJSON("json/timeline.json", function(data) {
     
     for (var i = 0; i < data.timeline.length; i++) {
       $("#timeline").prepend("<div><img src='" + data.timeline[i].avatar + "'/> <span>" + data.timeline[i].autor 
        + ", " + data.timeline[i].titulo + "</span> </div>" + "<div><sap>" + data.timeline[i].contenido + "</span>" + "<span id='fecha"
        + i +"'>" + data.timeline[i].fecha + "</span></div>");
      }
      $("#timeline").accordion();
      num = data.timeline.length - 1;
      //console.log(num);
      setInterval(function(){upDate()},12000);
      
      
   });

   $.getJSON("json/myline.json", function(data) {
     for (var i = 0; i < data.myline.length; i++) {
       $("#myline").prepend("<div><img src='" + data.myline[i].avatar + "'/> <span>" + data.myline[i].autor 
        + ", " + data.myline[i].titulo + "</span> </div>" + "<div><span>" + data.myline[i].contenido + "</span>" + "<span>" 
        + data.myline[i].fecha + "</span></div>");
      } 
     $("#myline").accordion();
     
    
   });

   //JQueryIU
   $("#tabs").tabs();

   $("#menu").menu();
   $("#info").menu();

   $( "#datepicker" ).datepicker({
    inline: true
   });


});


