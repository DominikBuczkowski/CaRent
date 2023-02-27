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

