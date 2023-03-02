var calc_cena = 0;
let date_array = [];
let end_array = [];

function select(block) {
    date_array = [];
    end_array = [];
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

    document.getElementById('final').innerText = info[9] + "zł";

    var string_array = [];
    var end_string = [];

    var todays_date = new Date();
    var EvenMonths = [0, 2, 4, 6, 7, 9, 11];
    var oddMonths = [3, 5, 8, 10]

    date_array.push(todays_date.getUTCDate());
    date_array[0] += 1;

    date_array.push(todays_date.getMonth());
    date_array[1] += 1;

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

    console.log(end_array)


    if (end_array[0] <= 9) {
        end_string.push("0" + end_array[0])
    }
    else {
        end_string.push(String(end_array[0]))
    }
    if (end_array[1] <= 9) {
        end_string.push("0" + end_array[1])
    }
    end_string.push(String(date_array[2]))

    var date_end_input = document.getElementById('date-end');

    date_end_input.value = end_string[2] + "-" + end_string[1] + "-" + end_string[0]; 

    date_end_input.min = end_string[2] + "-" + end_string[1] + "-" + end_string[0]; 

    calc();

}
function calc() {
    var final_span = document.getElementById('final');
    var discount_span = document.getElementById('discount');

    var discount = 1;

    var input_start = document.getElementById('date-start').value;
    var calc_date_start = input_start.split("-");

    var input_end = document.getElementById('date-end').value;
    var calc_date_end = input_end.split("-");

    var calc_start = new Date(calc_date_start)
    var calc_end = new Date(calc_date_end)

    let date_difference = (calc_end - calc_start) / (1000 * 60 * 60 * 24);

    let date_difference_in_weeks = Math.ceil(date_difference / 7);

    if (date_difference_in_weeks > 3) {
        discount = 0.10;
        console.log('rabat: ', discount)

        let final_price = calc_cena * date_difference_in_weeks;

        discounted_price = final_price - (final_price * discount);

        discount_span.innerText = final_price + "zł";

        final_span.innerText = discounted_price + "zł";

    }
    else if (date_difference_in_weeks > 8) {
        discount = 0.15;
        console.log('rabat: ', discount)

        let final_price = calc_cena * date_difference_in_weeks;

        discounted_price = final_price - (final_price * discount);

        discount_span.innerText = final_price + "zł";

        final_span.innerText = discounted_price + "zł";
    }
    else {
        let final_price = calc_cena * date_difference_in_weeks;

        discount_span.innerText = "";

        final_span.innerText = final_price + "zł";
        
    }
}
