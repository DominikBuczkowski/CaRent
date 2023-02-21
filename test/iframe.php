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
<?php
echo '
<script>
            var '.$model.' = 1;
            


        </script>
<div class="gen-block">
    
    <div class="gen-block-top">
        
        <div class="buttons">
            <div class="gen-block-img">
                <img src="img/cars/'.$row['zdjecie1'].'" class="img-test" id="test"
                data-status="active"
                onclick="
                '.$model.'++;
                if ('.$model.' > 2) {
                    '.$model.' = 1;
                    this.src = \'img/cars/'.$row['zdjecie1'].'\';
                }
                else {
                    this.src = \'img/cars/'.$row['zdjecie2'].'\';
                }
                

                ">                        </div>
        </div>
        <div class="gen-block-name">
            <h2>'.$model." ".$model.'</h2>
            
        </div>
        
        
    </div>
<div class="aaa">
    <h4>'.$row['typ'].'</h4>
    <div class="gen-block-info-cluster">
        <div class="gen-info-year">
            <i class="fa-regular fa-calendar-days"></i>&nbsp;'.$row['rocznik'].'
        </div>
        <div class="gen-info-seats">
            <i class="fa-solid fa-person"></i>&nbsp;'.$row['miejsca'].'
        </div>

        <div class="gen-info-en" style="clear: both;">
            <i class="fa-regular fa-gas-pump"></i>&nbsp;'.$row['paliwo'].'
        </div>
        <div class="gen-info-hp" >
            <i>HP</i>&nbsp;'.$row['konie'].'
        </div>
    </div>
    <div class="gen-block-price-claster" style="clear: both;">
        <div class="gen-block-price-label">
            Cena wynajem za 1 tydzień
        </div>
        <div class="gen-block-price">
        '.$row['cena'].'
        </div>
    </div>
</div>
</div>
';
?>
</body>
</html>