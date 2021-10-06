// JavaScript Document

// alle foto's voor de slideshow
var fotosSlideshow = ['slideshow2.jpeg', 'slideshow3.jpeg', 'slideshow1.jpeg'];

// element die een rol speelt
var fotoImg = document.querySelector('#slideshowfoto');

var huidigFotoNr = 0; //initieel op 0
toonHuidigeFoto();

// update de slideshpw
function toonHuidigeFoto() {
    console.log('foto ' + huidigFotoNr);

    if ( huidigFotoNr > fotosSlideshow.length -1 ) { // voorbij het einde
        huidigFotoNr = 0 ; // terug naar het begin
    }
    if ( huidigFotoNr < 0 ) { //voorbij het begin
        huidigFotoNr = fotosSlideshow.length -1 ;  // terug naar het einde
    }

    fotoImg.src = 'images/' + fotosSlideshow[huidigFotoNr];
}

function bladerVooruit() {
    huidigFotoNr = huidigFotoNr + 1 ;
    toonHuidigeFoto();
}

setInterval( bladerVooruit , 2000 ) ; // verander de foto na elke twee seconde