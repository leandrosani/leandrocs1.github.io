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
    
    <title>Document</title>
</head>

<body>
    <header class="header-slide" style="height: 70px;">
        <div class="header-fixed">
            
            <a href="index.php"><div class="logo">
                <h2>CP<spam>51</spam></h2>
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

                <div class="texto-materia">

                    <h1>
                        <!--Titulo do texto principal A BAIXO-->
                            Olá e bem vindos!
                    </h1>
                        <!--TEXTO / NOTICIA / CURIOSIDADE A BAIXO-->
                        Somos amantes, viciados em terror, adoramos ler, ouvir, assistir, sentindo a adrenalina do medo, a dúvida e todas as emoções que apenas o terror nos permitem viver intensamente.
                        <br/><br/>
                        Criamos esse site para todos que amam Creepypastas, terror e tudo que envolve o sobrenatural. Facilitando o acesso a várias histórias e fatos sobrenaturais em português, compartilhando também alguns de nossos sonhos que não nos deixam dormir em paz e relatos que passamos muitas vezes no contexto físico.
                        <br/><br/>
                        Esperamos que gostem, aproveitem a visita e voltem sempre.
                        
                 

                </div>

            </section>
        </div><!--container-->

        
        
        <!-------------------------------Footer-------------------------------------->
    <footer id="footer">
        <div class="left-wrap">
           <p>@ Todos os direitos reservados.</p>
        </div>

        <div class="right-wrap">
            <a href="contato.php">
                <h3>Contato</h3>
            </a>
        </div>

    </footer>


    <script src="../scripts/script.js"></script>
</body>
</html>