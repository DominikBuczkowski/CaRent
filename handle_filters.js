
function get_filters() {

    var slider_value = slider.noUiSlider.get();
    
    var Benzyna = document.getElementById('Benzyna'),

    Diesel = document.getElementById('Diesel'),



    Elektryk = document.getElementById('Elektryk'),

    Kompakt = document.getElementById('Kompakt'),

    Normalne = document.getElementById('Normalne'),

    Suv = document.getElementById('Suv'),

    Sportowe = document.getElementById('Sportowe'),

    Limuzyna = document.getElementById('Limuzyna'),

    Van = document.getElementById('Van');


    var filters = [slider_value[0], slider_value[1], 'gas', 'gas', 'gas', 'type', 'type', 'type', 'type', 'type', 'type'];

    if (Benzyna.checked === true) {
        filters[2] = 'Benzyna';
    }
    if (Diesel.checked === true) {
        filters[3] = 'Diesel';
    }
    if (Elektryk.checked === true) {
        filters[4] = 'Elektryk';
    }

    if (Kompakt.checked === true) {
        filters[5] = 'Kompakt';
    }
    if (Normalne.checked === true) {
        filters[6] = 'Normalne';
    }
    if (Suv.checked === true) {
        filters[7] = 'Suv';
    }
    if (Sportowe.checked === true) {
        filters[8] = 'Sportowe';
    }
    if (Limuzyna.checked === true) {
        filters[9] = 'Limuzyna';
    }
    if (Van.checked === true) {
        filters[10] = 'Van';
    }

    
    console.log(filters);
}