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

let keret=jQuery('<div>');
keret.prop("class","card");
keret.prop("style","width:18rem");

let kerdes=jQuery('<h5>');
kerdes.prop("class","card-title");

let valaszok=jQuery('<p>');
valaszok.prop("class","card-text");



