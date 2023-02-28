var cars = [];

function get_filters(cars) {

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


    var filter_gas = [];
    var filter_type = [];

    if (Benzyna.checked === true) {
        filter_gas.push('Benzyna');
    }
    if (Diesel.checked === true) {
        filter_gas.push('Diesel');
    }
    if (Elektryk.checked === true) {
        filter_gas.push('Elektryk');
    }

    if (Kompakt.checked === true) {
        filter_type.push('Kompakt');
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
        filter_type.push('Minivan');
    }

    var statment_gas = [Benzyna.checked === false, Diesel.checked === false,Elektryk.checked === false];

    var statment_type = [Kompakt.checked === false, Normalne.checked === false, Suv.checked === false, Sportowe.checked === false, Limuzyna.checked === false, Van.checked === false];


    var M31 = document.getElementById('M31');



    cars.forEach(b => {
        let car = document.getElementById(b);

        let car_block = car.childNodes[1];
        let car_value = String(car_block.innerHTML);
        car_value = car_value.split(' ');

        console.log(car_value);

    //     if ((filter_type.some(r=> car_value.includes(r)) || !statment_type.includes(false)) && (filter_gas.some(r=> car_value.includes(r)) || !statment_gas.includes(false)) && (slider_value[0] <= car_value[0] && slider_value[1] >= car_value[0])) {
    //     car.style.display = "block";
        
    //     }   
    
    // else {
    //     car.style.display = "none";
    // }

    slider_low = Math.floor(slider_value[0]);
    slider_top= Math.floor(slider_value[1]);

    if(
        (
            filter_gas.some(g=> car_value.includes(g)) || !statment_gas.includes(false)
        ) && (

            filter_type.some(t=> car_value.includes(t)) ||
            !statment_type.includes(false)
        ) && (
            slider_low <= car_value[4] && slider_top >= car_value[4]

        )
    ) {
        console.log('matched: ', car);
        car.style.display = "block";
        console.log(slider_low)
    }
    else {
        car.style.display = "none";
        console.log(slider_low)
    }

})



    

    
}

function hide_car() {
    var HD1 = document.getElementById('HD1');
    var HD2 = document.getElementById('HD2');
    HD1.classList.replace('selected-car', 'selected-car-hidden');
    HD2.classList.replace('selected-car-item', 'selected-car-item-hidden');
    
}

