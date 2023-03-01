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

    // var current_date = new Date();
    // // var a = current_date.split(" ");

    // var current_day = current_date.getUTCDate();
    // var current_day = current_day + 1;

    // if (current_day <= 9) {
    //     current_day = "0"+current_day;
    // }

    // var current_Month = 1 + current_date.getMonth();
    
    // if (current_Month <= 9) {
    //     current_Month = "0"+current_Month;
    // }
    // var current_year = current_date.getFullYear();

    // var date = current_year + "-" + current_Month + "-" + current_day;

    // var start = document.getElementById('date-start');

    // start.value = date;
    // start.min = date;

    var todays_date = new Date();
    var date_array = [];
    var string_array = [];
    var end_array = [];
    var end_string = [];
    var EvenMonths = [0, 2, 4, 6, 7, 9, 11];
    var oddMonths = [3, 5, 8, 10]

    date_array.push(todays_date.getUTCDate());
    date_array[0] += 1;

    date_array.push(todays_date.getMonth());
    
    date_array.push(todays_date.getUTCFullYear());

    if (EvenMonths.includes(date_array[1])) {
        if (date_array[0] <= 9 ) {
            string_array.push("0" + (date_array[0]));
        }
        else if (date_array[0] >= 31) {
            date_array[1] += 1;
            date_array[0] = 1;

        }
    }

    else if (oddMonths.includes(date_array[1])) {
        if (date_array[0] <= 9 ) {
            string_array.push("0" + (date_array[0]));
        }
        else if (date_array[0] >= 30) {
            date_array[1] + 1;
            date_array[0] = 1;

        }
    }
    else if (date_array[1] == 1) {
        if (date_array[0] <= 9 ) {
            string_array.push("0" + (date_array[0]));
        }
        else if (date_array[0] >= 28) {
            date_array[1] += 1;
            date_array[0] = 1;
        }
    }

    if (date_array[1] <= 9) {
        string_array.push("0" + date_array[1]);
    }
    string_array.push(String(date_array[2]));

    var date_start_input = document.getElementById('date-start');

    date_start_input.value = string_array[2] + "-" + string_array[1] + "-" + string_array[0];

    date_start_input.min = string_array[2] + "-" + string_array[1] + "-" + string_array[0];

    end_array.push((date_array[0] + 7), date_array[1], date_array[2]);
    

    if (end_array[0] <= 9) {
        end_string.push("0" + end_array[0])
    }
    if (end_array[1] <= 9) {
        end_string.push("0" + end_array[1])
    }
    end_string.push(String(date_array[2]))

    var date_end_input = document.getElementById('date-end');

    date_end_input.value = end_string[2] + "-" + end_string[1] + "-" + end_string[0]; 

    date_end_input.min = end_string[2] + "-" + end_string[1] + "-" + end_string[0]; 

};
// function calc() {
//     let start = document.getElementById('date-start').value;
//     let end = document.getElementById('date-end').value;

//     console.log(start);

//     let start_value = start.split('-');
//     let end_value = end.split('-');

//     start_month = start_value[1]

//     start_date = new Date(start_value[0], start_month, start_value[2])
//     end_date = new Date(end_value[0], end_value[1], end_value[2])

//     diff = end_date - start_date;

//     days = Math.ceil(diff / (1000 * 3600 * 24));

//     console.log(days)

//     }
