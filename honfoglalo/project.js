 /*
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    */

/*
$.ajax({url:"kerdesek.txt",
        dataType:"json",
})
*/

$("#mySelect").change(function() {
  if($(this).val() == "fruits") {
      var fruitsListHTML = "";
      if($("#myResults").data("fruits") != "1"){
          $.each(myFruits, function(a, b){
              fruitsListHTML += "<li>" + b + "</li>";
          });
          $("#myResults").append("<ul>"+ fruitsListHTML +"</ul>");
          $("#myResults").data("fruits", "1");
      }
  }
  
});



