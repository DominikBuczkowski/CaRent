function ScrollToTop() {
    var HighestElement = document.getElementById('nav').offsetTop
    window.scrollTo({ top: HighestElement, behavior: 'smooth'});
}


let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleNextClick = () => {

const currentGroup = document.querySelector(`[data-status="active"]`),

nextGroup = document.querySelector(`[data-status="after"]`),

prevGroup = document.querySelector(`[data-status="before"]`),

backGroup = document.querySelector(`[data-status="back"]`);

currentGroup.dataset.status = "after";
prevGroup.dataset.status = "active";
nextGroup.dataset.status = "back";
backGroup.dataset.status = "before";

};

const handlePrevClick = () => {

const currentGroup = document.querySelector(`[data-status="active"]`),

nextGroup = document.querySelector(`[data-status="after"]`),

prevGroup = document.querySelector(`[data-status="before"]`),

backGroup = document.querySelector(`[data-status="back"]`);

currentGroup.dataset.status = "before";
prevGroup.dataset.status = "back";
nextGroup.dataset.status = "active";
backGroup.dataset.status = "after";
};

            
var check = setInterval(function() {
    var height = window.pageYOffset;
    var nav = document.getElementById('nav');
    var diamond = document.getElementById('diamond');
    var logo = document.getElementById('logo');


        nav.addEventListener('mouseover', function(ms) {

                nav.classList.replace('nav-alt','nav');
            
            
        });
    
    
        if (height >= 880) {
            nav.classList.replace('nav','nav-alt');
            diamond.style.display = "block";
            logo.style.display = "none";
            
            
        }
        
        
        
    
    else if (height <= 880) {
        nav.classList.replace('nav-alt','nav');
        diamond.style.display = "none";
        logo.style.display = "block";
        
    };
}, 100);


const theme_button = document.getElementById('theme_button');
theme_button.addEventListener("click", () => {

    let css = document.getElementById('theme');
    let slider = document.getElementById('slider-theme');
    let solar = document.getElementById('solar');
    let logo = document.getElementById('logo');

    if (css.href === "http://127.0.0.1:5500/styles/style.css") {

        css.href = 'styles/style-white.css';
        slider.href = 'nouislider-white.css';
        logo.src = '/img/nav_logo-dark.png';
        solar.classList = 'fa-solid fa-moon';
    }
    else if (css.href === "http://127.0.0.1:5500/styles/style-white.css") {

        css.href = 'styles/style.css';
        slider.href = 'nouislider.css';
        logo.src = '/img/nav_logo.png';
        solar.classList = 'fa-solid fa-sun';

    }
    
})

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

// var check_anon = document.getElementById('email-aa');
// check_anon.addEventListener('click', () => {

//     var anon = document.getElementById('anon');

//     if (check_anon.checked === true) {
//         console.log('checked');
//         console.log(anon.classList)
//     }
//     if (check_anon.checked === false) {
//         console.log('unchecked');
//     }

// })

