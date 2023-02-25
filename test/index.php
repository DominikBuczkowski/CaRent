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
    <link rel="stylesheet" id="theme" href="style.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.3.0/css/all.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet">
    <link href="nouislider.css" rel="stylesheet">
    <script src="nouislider.js"></script>
    <script src="handle_filters.js"></script>

</head>

<body>
    <nav class="nav" id="nav">
        
        <div class="nav-button-cluster">

            <a href="osobowe.html" class="nav-button">
                <div>
                    Osobowe
                </div>
            </a>
        
            <a href="ciezarowe.html" class="nav-button">
                <div>
                    Ciężarowe
                </div>
            </a>
        
            <div class="nav-other-button">
                <button value="DARK" id="theme_button">
                    <i id="solar" class="fa-solid fa-moon"></i>
                </button>
            </div>

        </div>

        <div class="nav-logo-cluster">
        
            <a href="index.html">
                <img src="/img/nav_logo.png" height="45" alt="logo" id="logo">
            </a>

            <div class="rect" id="diamond" onclick="ScrollToTop()"></div>
        
        </div>
        
        <div class="nav-button-cluster">
        
            <a href="kontakt.html" class="nav-button">
                <div>
                    Kontakt
                </div>
            </a>
        
            <a href="onas.html" class="nav-button">
                <div>
                    O nas
                </div>
            </a>
        
        </div>

    </nav>

    <main>

        <div class="space">
            <h1>Polecane</h1>
        </div>

        <section class="our-cars-cards">

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

                <div class="card">
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
            <div class="filter-cluster">
                <div class="filter-button" id="filter-button">
                    <i class="fa-regular fa-filter" id="filter-button-icon"></i>
                </div>
                <div class="filter-box-after" id="filter-box-after" data-status="hidden">

                    <form target="" method="post">
                        <div class="slider-box">
                            <div class="slider-label">
                                <label>Ilość miejsc</label>
                            </div>
                            <div class="slider">
                                <div id="slider" onclick="get_filters()"></div>

                                <script src="handle_slider.js"></script>
                            </div>
                        </div>
                        <div class="type-box">

                            <div class="type-item">

                                <input type="checkbox" name="Kompakt" id="Kompakt" oninput="get_filters()">

                                <span>Kompakt</span>
                            </div>

                            <div class="type-item">

                                <input type="checkbox" name="Normalne" id="Normalne" oninput="get_filters()">

                                <span>Normalne</span>
                            </div>

                            <div class="type-item">

                                <input type="checkbox" name="Suv" id="Suv" oninput="get_filters()">

                                <span>Suv</span>
                            </div>



                            <div class="type-item">

                                <input type="checkbox" name="Sportowe" class="checkbox-pop" id="Sportowe" oninput="get_filters()">

                                <span>Sportowe</span>
                            </div>

                            <div class="type-item">

                                <input type="checkbox" name="Limuzyny" id="Limuzyna" oninput="get_filters()">

                                <span>Limuzyny</span>
                            </div>

                            <div class="type-item">

                                <input type="checkbox" name="Van" style="clear: both" id="Van" oninput="get_filters()">

                                <span>Van</span>
                            </div>



                        </div>
                        <div class="gas-box">
                            <div class="gas-box-title">
                                Jakie paliwo?
                            </div>

                            <div class="gas-item">

                                <input type="checkbox" name="Benzyna" id="Benzyna" oninput="get_filters()">

                                <span>Benzyna</span>
                            </div>

                            <div class="gas-item">

                                <input type="checkbox" name="Diesel" id="Diesel" oninput="get_filters()">

                                <span>Diesel</span>
                            </div>

                            <div class="gas-item">

                                <input type="checkbox" name="Elektryk" id="Elektryk" oninput="get_filters()">

                                <span>Elektryk</span>
                            </div>

                        </div>

                    </form>
                </div>


            </div>

            <?php
            

        
            require 'print.php';
            aaa();
        ?>

            
        </section>

    </main>
    <footer>
        <div class="footer-main">
            <div class="footer-block">
                <a href="osobowe.html">Samochody osobowe</a>
                </br>
                <a href="ciezarowe.html">Samochody ciężarowe</a>
                </br>
                <a href="javascript:void">Zgłoś stłuczkę</a>
            </div>
            <div class="footer-block">

                <button onclick="download_regulamin()">Regulamin</button>
                </br>
                <button onclick="download_rodo()">rodo</button>
                </br>
                <button onclick="download_dokumenty()">dokumenty</button>
            </div>
            <div class="footer-block">
                <a href="javascript:void()">O nas</a>
                </br>
                <a href="javascript:void()">Kontakt</a>
                </br>
                <a href="javascript:void()">Jak dojechać?</a>
            </div>
        </div>
        <div class="footer-lower">
            CaRent &#174;
        </div>

    </footer>
    <script src="main.js"></script>
    <script src="download_files.js"></script>
</body>

</html>