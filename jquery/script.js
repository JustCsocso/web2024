$.ajax({
    url: "https://fakestoreapi.com/products",
    dataType: "json",
    success: function (data) {
        console.log(data);
        data.forEach(product => {
            console.log(product);
            let kartya = termekKartya(product.id,product.title, product.image, product.description);
            $("#termekLista").append(kartya);
        });
    }
});

function termekKartya(id,nev,kepUrl,leiras) {
    let kartya = jQuery("<div>");
    kartya.prop("class","card");
    kartya.addClass("col-3");
    kartya.on("click", function(){togglePopup()});
    
    $.ajax({
        url: "https://fakestoreapi.com/products/id"+id,
        dataType: "json",
        success: function (data) {
            console.log(data);

            $("#termekAdat").html();

            let cim=jQuery("<h3>");
            cim.html(data.title);
            $("#termekAdat").append(cim);

            let ar=jQuery("<div>")
            ar.html(data.price);
            $("#termekAdat").append(ar);

            let kat=jQuery("<div>");
            kat.html(data.category);
            $("#termekAdat").append(kat);

            let kepecske=jQuery("<img>")
            kepecske.html(data.image);
            $("#termekAdat").append(kepecske);

            let ertekeles=jQuery("<div>");
            ertekeles.html(data.rating).append(ertekeles);

            togglePopup();
/*
   
        <h3>title</h3>
        <div>Ár: price</div>
        <p>Leírás: description</p>
        <div>Kategória: category</div>
        <img src="" alt="">
        <div>Értékelés: rating (count darab)</div>
   
    */
            
        }});
        

    

    let kep = jQuery("<img>");
    kep.prop("src", kepUrl);
    kep.prop("class", "card-img-top");
    kep.prop("alt", nev);

    let cardBody = jQuery("<div>");
    cardBody.prop("class", "card-body");

    let cardTitle = jQuery("<h5>");
    cardTitle.prop("card-title");
    cardTitle.text(nev);

    let cardText = jQuery("<p>");
    cardText.prop("class", "card-text");
    cardText.text(leiras);

    cardBody.append(cardTitle);
    cardBody.append(cardText);  

    kartya.append(kep);
    kartya.append(cardBody);

    return kartya;

        }
function togglePopup() {
    $(".content").toggle();
}