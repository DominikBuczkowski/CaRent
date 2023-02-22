function filter() {



    var seats = document.getElementById('seats').value;
    var block = document.getElementById('M32');
    var M32_seats = M32_value[0];
    console.log(M32_seats);
    console.log(seats);
    if (seats == M32_seats) {
        console.log('true');
        block.style.display = "block";
    }
    else {
        block.style.display = "none";
    }
   

    
}