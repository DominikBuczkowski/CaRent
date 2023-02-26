    var calc_cena = 0;
    function select(block) {
    var HD1 = document.getElementById('HD1');
    var HD2 = document.getElementById('HD2');

    let info_block = block.childNodes[1];
    let info = String(info_block.innerHTML);
    info = info.split(' ');

    
    calc_cena = info[9];
    
    

    

    document.getElementById('name').innerHTML = info[0] + " " + info[1];
    document.getElementById('type').innerHTML = info[2];
    document.getElementById('year').innerHTML = "<i class='fa-regular fa-calendar-days'></i>&nbsp;"+info[3];
    document.getElementById('seats').innerHTML = '<i class="fa-solid fa-person"></i>&nbsp;' + info[4];
    document.getElementById('gas').innerHTML = '<i class="fa-regular fa-gas-pump"></i>&nbsp;' + info[5];document.getElementById('hp').innerHTML = '<i>HP</i>&nbsp;' + info[6];
    document.getElementById('img').src = "img/cars/" + info[7];
    document.getElementById('cena').innerHTML = info[9] + 'zł na tydzień';
    HD1.classList.replace('selected-car-hidden', 'selected-car');
    HD2.classList.replace('selected-car-item-hidden','selected-car-item');

    var start = document.getElementById('date-start');
    var end = document.getElementById('date-end');

    var current_date = new Date();
    // var a = current_date.split(" ");

    var current_day = current_date.getUTCDate();
    var end_day = current_day + 1;

    if (current_day <= 9) {
        current_day = "0"+current_day;
    }
    console.log(end_day)

    var current_Month = current_date.getUTCMonth();
    if (current_Month <= 9) {
        current_Month = "0"+current_Month;
    }
    var current_year = current_date.getFullYear();


    var date = current_year  + "-" + current_Month + "-" + current_day;
    var end_date = current_year  + "-" + current_Month + "-" + current_day;

    start.value = date;
    start.min = date;

    
    
};
function calc() {
    console.log(calc_cena)

    }