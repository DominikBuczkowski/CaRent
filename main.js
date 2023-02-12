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
                        console.log("aa")
                    
                    
                });
            
            
                if (height >= 400) {
                    nav.classList.replace('nav','nav-alt');
                    diamond.style.display = "block";
                    logo.style.display = "none";
                   
                    
                }
                
                
                
            
            else if (height <= 400) {
                nav.classList.replace('nav-alt','nav');
                diamond.style.display = "none";
                logo.style.display = "block";
                
            };
        }, 100);

        function polo_hover() {
            var p2 = document.getElementById('p2');
            var p1 = document.getElementById('p1');

            p1.classList.add("cardhovert1");
            p2.classList.add("cardhovert2");
        }
        function polo_unhover() {
            var p1 = document.getElementById('p1');
            var p2 = document.getElementById('p2');

            p1.classList.remove("cardhovert1");
            p2.classList.remove("cardhovert2");
        }