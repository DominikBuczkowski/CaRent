<?php

    function aaa() {
        require 'conn.php';


        $conn = new mysqli($servername, $username, $password, $dbname);
        
        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }
             $sql = "SELECT * from osobowe ORDER BY RAND()";
          

        

       

        
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $id = $row['idosobowe'];
            $model = $row['model'];
            $seats = $row['miejsca'];
            $paliwo = $row['paliwo'];
            $typ = $row['typ'];

            $block_values = [$seats];

            $blockid = $model.$id;
            
            echo '
            <div class="gen-block" id="'.$blockid.'">
            <script>
                        var '.$model.' = 1;

                        var '.$blockid.'_value = ['.$block_values[0].'];
                        


                    </script>

                
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

        }
        } else {
        echo "ERORR";
        }


    }

        
    
?>