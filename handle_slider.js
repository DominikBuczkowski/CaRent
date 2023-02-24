var slider = document.getElementById('slider');     
noUiSlider.create(slider, {
    start: [2, 9],
    connect: true,
    step: 1,
    range: {
        'min': 2,
        'max': 9,
    },
    pips: {
        mode: 'values',
        values: [2, 4, 5, 7, 9]
    }
    
});

const get_slider = () => {
    var slider_value = slider.noUiSlider.get();
    console.log(slider_value)
}

// <!-- <div class="slider-box">
// <div class="slider-label">
//     <label>Ilość miejsc</label>
// </div>
// <div id="slider" onclick="get_slider()"></div>

// <script src="handle_slider.js"></script>

// </div> -->