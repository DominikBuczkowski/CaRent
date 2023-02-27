
function get_filters() {

    // var slider_value = slider.noUiSlider.get();

    var slider_value = [0,0];

    console.log(slider_value)
    
    var Benzyna = document.getElementById('Benzyna'),

    Diesel = document.getElementById('Diesel'),

    Elektryk = document.getElementById('Elektryk'),


    Kompakt = document.getElementById('Kompakt'),

    Normalne = document.getElementById('Normalne'),

    Suv = document.getElementById('Suv'),

    Sportowe = document.getElementById('Sportowe'),

    Limuzyna = document.getElementById('Limuzyna'),

    Van = document.getElementById('Van');


    var filter_seats = [];
    var filter_gas = [];
    var filter_type = [];

    filter_seats.push(slider_value[0], slider_value[1]);

    if (Benzyna.checked === true) {
        filter_gas.push('Benzyna');
    }
    if (Diesel.checked === true) {
        filter_gas.push('diesel');
    }
    if (Elektryk.checked === true) {
        filter_gas.push('elektryk');
    }

    if (Kompakt.checked === true) {
        filter_type.push('kompakt');
    }
    if (Normalne.checked === true) {
        filter_type.push('normalne');
    }
    if (Suv.checked === true) {
        filter_type.push('suv');
    }
    if (Sportowe.checked === true) {
        filter_type.push('Sportowe');
    }
    if (Limuzyna.checked === true) {
        filter_type.push('limuzyna');
    }
    if (Van.checked === true) {
        filter_type.push('van');
    }

    var statment_gas = [Benzyna.checked === false, Diesel.checked === false,Elektryk.checked === false];

    var statment_type = [Kompakt.checked === false, Normalne.checked === false, Suv.checked === false, Sportowe.checked === false, Limuzyna.checked === false, Van.checked === false];


    var M31 = document.getElementById('M31');


    if ((filter_type.some(r=> M31_value.includes(r)) || !statment_type.includes(false)) && (filter_gas.some(r=> M31_value.includes(r)) || !statment_gas.includes(false)) && (filter_seats[0] <= M31_value[0] || filter_seats[1] >= M31_value[0])) {
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

function hide_car() {
    var HD1 = document.getElementById('HD1');
    var HD2 = document.getElementById('HD2');
    HD1.classList.replace('selected-car', 'selected-car-hidden');
    HD2.classList.replace('selected-car-item', 'selected-car-item-hidden');
    
}

