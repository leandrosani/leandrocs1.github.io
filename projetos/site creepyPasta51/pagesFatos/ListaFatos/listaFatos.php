<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php
        require('../../config.php');
    ?>
    <link rel="stylesheet" type="text/css" href="../../style.css?<?php echo VERSION; ?>" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    
    <title>Teorias assustadoras, Lista completa de teorias assustadoras em nosso universo, Clique!</title>
    <meta name="description" content="Teorias assustadoras, Lista completa de teorias assustadoras em nosso universo. Projeto Abigail...... Clique e veja!" />
</head>

<!------inicio site-->

<body>
    <header class="header-slide" style="height: 50px;">
        <?php require('../../template/header.php') ?>
    </header>
        <!--FIM ------------------------------header-fixed------------------------------->

<!---------CLONE NODE TRUE JAVA SCRIPT---section / lista / lista-wrap------------->
    <div class="display-none">
        <a href="">
            <div class="img">
                <div class="titulo">
                    <h4></h4>
                </div>
            </div>
        </a>
    </div>
<!---------CLONE NODE TRUE JAVA SCRIPT---section / lista / lista-wrap------------->


    <section class="slide slide-creepy">
        
        <div class="lista">
            <div class="lista-titulo lista-titulo-creepy" style="margin-left: 0px;">
                <h2>Fatos Sobrenaturais</h2>
            </div>
                <div class="lista-wrap-completa">
                    <!--JsonCloneNode-->
                </div>
        </div>


    </section>


<!-------------------------------Footer-------------------------------------->
    <?php require('../../template/footer.php') ?>


    

    <script src="listaFatos.js?<?php echo VERSION; ?>"></script>
    <script src="appendListFatos.js?<?php echo VERSION; ?>"></script>
    <script src="../../scripts/script.js?<?php echo VERSION; ?>"></script>
</body>
</html>