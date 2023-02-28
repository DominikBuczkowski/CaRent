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

    var current_date = new Date();
    // var a = current_date.split(" ");

    var current_day = current_date.getUTCDate();
    var current_day = current_day + 1;

    // if (current_day <= 9) {
    //     current_day = "0"+current_day;
    // }

    var current_Month = 1 + current_date.getMonth();
    
    if (current_Month <= 9) {
        current_Month = "0"+current_Month;
    }
    var current_year = current_date.getFullYear();

    var date = current_year + "-" + current_Month + "-" + current_day;

    var start = document.getElementById('date-start');

    start.value = date;
    start.min = date;

};
function calc() {
    let start = document.getElementById('date-start').value;
    let end = document.getElementById('date-end').value;

    console.log(start);

    let start_value = start.split('-');
    let end_value = end.split('-');

    start_month = start_value[1]

    start_date = new Date(start_value[0], start_month, start_value[2])
    end_date = new Date(end_value[0], end_value[1], end_value[2])

    diff = end_date - start_date;

    days = Math.ceil(diff / (1000 * 3600 * 24));

    console.log(days)

    }
