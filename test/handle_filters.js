
function get_filters() {

    // var slider_value = slider.noUiSlider.get();

    var slider_value = [0,0];
    
    var Benzyna = document.getElementById('Benzyna'),

    Diesel = document.getElementById('Diesel'),

    Elektryk = document.getElementById('Elektryk'),


    Kompakt = document.getElementById('Kompakt'),

    Normalne = document.getElementById('Normalne'),

    Suv = document.getElementById('Suv'),

    Sportowe = document.getElementById('Sportowe'),

    Limuzyna = document.getElementById('Limuzyna'),

    Van = document.getElementById('Van');


    var filters = [];

    filters.push(slider_value[0], slider_value[1]);

    if (Benzyna.checked === true) {
        filters.push('Benzyna');
    }
    if (Diesel.checked === true) {
        filters.push('diesel');
    }
    if (Elektryk.checked === true) {
        filters.push('elektryk');
    }

    if (Kompakt.checked === true) {
        filters.push('kompakt');
    }
    if (Normalne.checked === true) {
        filters.push('normalne');
    }
    if (Suv.checked === true) {
        filters.push('suv');
    }
    if (Sportowe.checked === true) {
        filters.push('sportowe');
    }
    if (Limuzyna.checked === true) {
        filters.push('limuzyna');
    }
    if (Van.checked === true) {
        filters.push('van');
    }

    var statments = [Benzyna.checked === false, Diesel.checked === false,Elektryk.checked === false, Kompakt.checked === false, Normalne.checked === false, Suv.checked === false, Sportowe.checked === false, Limuzyna.checked === false, Van.checked === false];



    var M31 = document.getElementById('M31');

    if (!statments.includes(false)) {
        M31.style.display = "block";
    }

    else if (filters.some(r=> M31_value.includes(r))) {
        M31.style.display = "block";
    }
    else {
        M31.style.display = "none";
    }
    

    // if (!filters.some(r=> M31_value.includes(r))) {
    //     console.log('false');
    //     block.style.display = "none";
    // }
    // else {
    //     block.style.display = "block";
    // }
    
}