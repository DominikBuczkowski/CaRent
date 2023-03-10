
let filter_button = document.getElementById('filter-button');

filter_button.addEventListener("click", () => {

    let filter_icon = document.getElementById('filter-button-icon');
    let filter_box = document.getElementById('filter-box-after');
    
    if (filter_box.dataset.status == "show") {
        filter_box.dataset.status = "hidden";
        filter_icon.classList.replace('fa-x', 'fa-filter');

    }
    else if (filter_box.dataset.status == "hidden") {
        filter_box.dataset.status = "show";
        filter_icon.classList.replace('fa-filter', 'fa-x');
    }

});


function get_filters() {

    var slider = document.getElementById('slider');
    var aa = slider.noUiSlider.get()

    console.log(aa);
    // var slider_value = slider
    
    var Benzyna = document.getElementById('Benzyna'),

    Diesel = document.getElementById('Diesel'),

    Elektryk = document.getElementById('Elektryk'),


    Kompakt = document.getElementById('Kompakt'),

    Normalne = document.getElementById('Normalne'),

    Suv = document.getElementById('Suv'),

    Sportowe = document.getElementById('Sportowe'),

    Limuzyna = document.getElementById('Limuzyna'),

    Van = document.getElementById('Van');


    var filter_type = [];
    var filter_gas = [];
    var filters = [];

    filters.push(slider_value[0], slider_value[1]);

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

    if (!statment_gas.includes(false) && !statment_type.includes(false)) {
        M31.style.display = "block";
    }

    else if (
        (filter_gas.some(r=> M31_value.includes(r)) || !statment_gas.includes(false))
        &&
        
        (filter_type.some(r=> M31_value.includes(r)) || !statment_type.includes(false)
        )) {
        M31.style.display = "block";
    }
    else {
        M31.style.display = "none";
    }
    
}

function hide_car() {
    var HD1 = document.getElementById('HD1');
    var HD2 = document.getElementById('HD2');
    HD1.classList.replace('selected-car', 'selected-car-hidden');
    HD2.classList.replace('selected-car-item', 'selected-car-item-hidden');
    
}

