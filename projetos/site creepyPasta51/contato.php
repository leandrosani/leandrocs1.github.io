<!DOCTYPE html>
<html lang="en">
<head>
    <?php
        require('config.php');
    ?>
    <link href="style.css?<?php echo VERSION; ?>" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="/file-javascript.js?<?php echo VERSION; ?>"></script>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    
    <title>Entre em contato com Creepypasta 51</title>
    <meta name="description" content="Entre em contato para passar feedbacks e também contat alguns relatos para postarmos em nosso Site *,...,* !" />
</head>

<body>
    <header class="header-slide" style="height: 0px;">
        <div class="header-fixed">
            
            <a href="index.php"><div class="logo">
                <h1 class="logo">Creepypasta</h1><spam>51</spam>
            </div></a>
            <i class="fas fa-align-justify" id="btn-menu"></i>
            <!--<div class="botao-menu--mobile">||||</div>-->
            <nav class="menu-desktop">
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li class="abrir-submenu"><a class="abrir" href="#">Seções</a>
                        <ul class="submenu">
                            <a href="pagesCreepys/ListaCreepyPastas/listaCreepy.php"><li>Creppypasta</li></a>
                            <a href="pagesFatos/ListaFatos/listaFatos.php"><li>Fatos Sobrenaturais</li></a>
                        </ul>
                    </li>
                    <li><a href="sobre.php">Sobre</a></li>
                </ul>

            </nav><!--menu-desktop-->

            <nav class="nav-mobile">
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="pagesCreepys/ListaCreepyPastas/listaCreepy.php">Creppypasta</a></li>
                    <li><a href="pagesFatos/ListaFatos/listaFatos.php">Fatos Sobrenaturais</a></li>
                    <li><a href="sobre.php">Sobre</a></li>
                </ul>

            </nav><!--nav-mobile-->
        </div><!--header-fixed-->
    </header>
        <!--FIM ------------------------------header-fixed------------------------------->
        <div class="container" style="width: 100%; display: flex; align-items: center; justify-content: center;">
            <section class="secundaria" style="width: 100%; display: flex; align-items: center; justify-content: center;">

                <div class="texto-materia style="width: 100%; display: flex; align-items: center; justify-content: center; text-align: center;">

                    <h1 class="contato" style="color:#FFF;margin-top:100px;font-size: 21px; display: flex; align-items: center; justify-content: center;">
                        <!--Titulo do texto principal A BAIXO-->
                        Entre em contato conosco através do nosso e-mail.
                        </h1>
                        
                        <h1 class="contato" style="margin-top:0;display: flex; align-items: center; justify-content: center;font-size: 21px;">contato@creepypasta51.com.br</h1>
                        
                        <br><br>
                    <h1 class="contato" style="color:#FFF; margin-top:0; font-size: 16px;"> Entre também em contato caso queiram relatar algo     sobrenatural que já ouviram falar 
                        ou até mesmo já aconteceu com vocês, analisaremos e ficaremos felizes em publicar.
                        </h1>
                        
                        
                    
                    

                </div>

            </section>
        </div><!--container-->

        
        
        <!-------------------------------Footer-------------------------------------->
    <footer id="footer" style="position: absolute; bottom: 0; width: 100%">
        <div class="left-wrap">
           <p>@ Todos os direitos reservados.</p>
        </div>

        <div class="right-wrap">
            <a href="contato.php">
                <h3>Contato</h3>
            </a>
        </div>

    </footer>

    
    <script src="scripts/script.js"></script>
</body>
</html>