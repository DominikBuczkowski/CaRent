<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="wypożyczalnia">
        <meta name="keywords" content="wypożyczalnia samochodów, wypożyczalnia, samochodów">
        <meta name="author" content="Dominik Buczkowski">
        <meta name="robots" content="noindex, nofollow">
        

        <title>Wypożyczalnia</title>


        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.3.0/css/all.css">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet">

    </head>

<body>
    
    <nav class="nav" id="nav">
        <img src="/img/nav_logo.png" height="45" alt="logo" id="logo" onclick="move()">

        <div class="rect" id="diamond">
        </div>
    </nav>
    
    <main>
        <div class="space">
            <h1>Polecane</h1>
        </div>
        <section class="our-cars-cards" >
            
            <div class="prev-button">
                <button id="prev-button" onclick="handlePrevClick()">
                    &lt;
                </button>
            </div>

            <div class="next-button">
                <button id="next-button" onclick="handleNextClick()">
                    &gt;
                </button>
            </div>


            <div class="card-group" id="touran" data-status="before" data-index="0">
                <div class="card">
                    <div class="info-cluster">
                        <div class="info-year">
                            <i class="fa-regular fa-calendar-days"></i>&nbsp;1975
                        </div>
                        <div class="info-seats">
                            <i class="fa-solid fa-person"></i>&nbsp;2
                        </div>

                        <div class="info-en" style="clear: both;">
                            <i class="fa-regular fa-gas-pump"></i>&nbsp;Elektryk
                        </div>
                        <div class="info-hp">
                            <i>HP</i>&nbsp;6
                        </div>
                    </div>
                    <div class="info-price-cluster">

                        <div class="info-price-label" style="clear: both;">
                            z limitem km
                        </div>
                        <div class="info-price-label">
                            bez limitu km
                        </div>

                        <div class="info-price">
                            2000zł
                        </div>
                        <div class="info-price">
                            1000zł
                        </div>
                        
                    </div>
                </div>

                <div class="card" >
                    <img src="/img/cars/citi_2.png">
                </div>

                <div class="card" style="background-color: red;">
                    <img src="/img/cars/citi_1.png">
                </div>
                
            </div>

            
            <div class="card-group" data-status="active" data-index="1">
                <div class="card">
                    <div class="info-cluster">
                        <div class="info-year">
                            <i class="fa-regular fa-calendar-days"></i>&nbsp;1975
                        </div>
                        <div class="info-seats">
                            <i class="fa-solid fa-person"></i>&nbsp;5
                        </div>

                        <div class="info-en" style="clear: both;">
                            <i class="fa-regular fa-gas-pump"></i>&nbsp;Diesel
                        </div>
                        <div class="info-hp">
                            <i>HP</i>&nbsp;140
                        </div>
                    </div>
                    <div class="info-price-cluster">

                        <div class="info-price-label" style="clear: both;">
                            z limitem km
                        </div>
                        <div class="info-price-label">
                            bez limitu km
                        </div>

                        <div class="info-price">
                            2000zł
                        </div>
                        <div class="info-price">
                            1000zł
                        </div>
                        
                    </div>
                </div>

                <div class="card">
                    <img src="/img/cars/touran_2.png">
                </div>

                <div class="card">
                    <img src="/img/cars/touran_1.png">
                </div>
                
            </div>

            <div class="card-group" data-status="after" data-index="2">
                <div class="card">
                    <div class="info-cluster">
                        <div class="info-year">
                            <i class="fa-regular fa-calendar-days"></i>&nbsp;1999
                        </div>
                        <div class="info-seats">
                            <i class="fa-solid fa-person"></i>&nbsp;4
                        </div>

                        <div class="info-en" style="clear: both;">
                            <i class="fa-regular fa-gas-pump"></i>&nbsp;benzyna
                        </div>
                        <div class="info-hp">
                            <i>HP</i>&nbsp;321
                        </div>
                    </div>
                    <div class="info-price-cluster">

                        <div class="info-price-label" style="clear: both;">
                            z limitem km
                        </div>
                        <div class="info-price-label">
                            bez limitu km
                        </div>

                        <div class="info-price">
                            2000zł
                        </div>
                        <div class="info-price">
                            1000zł
                        </div>
                        
                    </div>
                </div>

                <div class="card">
                    <img src="img/cars/e36_2.png">
                </div>

                <div class="card">
                    <img src="img/cars/e36_1.png">
                </div>
                
            </div>

            <div class="card-group" data-status="back" data-index="4">
                <div class="card">
                    <div class="info-cluster">
                        <div class="info-year">
                            <i class="fa-regular fa-calendar-days"></i>&nbsp;2003
                        </div>
                        <div class="info-seats">
                            <i class="fa-solid fa-person"></i>&nbsp;5
                        </div>

                        <div class="info-en" style="clear: both;">
                            <i class="fa-regular fa-gas-pump"></i>&nbsp;benzyna
                        </div>
                        <div class="info-hp">
                            <i>HP</i>&nbsp;660
                        </div>
                    </div>
                    <div class="info-price-cluster">

                        <div class="info-price-label" style="clear: both;">
                            z limitem km
                        </div>
                        <div class="info-price-label">
                            bez limitu km
                        </div>

                        <div class="info-price">
                            2000zł
                        </div>
                        <div class="info-price">
                            1000zł
                        </div>
                        
                    </div>
                </div>

                <div class="card">
                    <img src="/img/cars/polo_2.png">
                </div>

                <div class="card">
                    <img src="/img/cars/polo_1.png">
                </div>
                
            </div>

            
            

                        


            
        </section>

        <section class="flota">
            <header class="flota-header">
                <h1>Nasza flołta</h1>
            </header>
            
            <?php
                require 'print.php';

                aaa()

            ?>

        </section>

    </main>
    <script src="main.js"></script>
    
</body>
</html>
