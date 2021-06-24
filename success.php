<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8"/>
        <link rel="icon" href="./images/MA Opción 2.svg">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Mensaje envíado con éxito - Maniquíes Agustín</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./css/styles.css">
        <script defer src="https://code.iconify.design/1/1.0.6/iconify.min.js"></script>
        <script defer src="./js/menu-mobile.js"></script>

        
    </head>
    <body>

    <?php 
$nya = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$mensaje = $_POST ['areacontent'];

$mimail="contacto@maniquiesagustin.com";

$cuerpoemail = "Ha recibido una consulta de ".$nya."\r\n"."Email: ".$email."\r\n"."Telefono de contacto: ".$phone."\r\n"."Mensaje: ".$mensaje;
$cuerpoenvio = "Se ha enviado su consulta a Maniquies Agustin "."\r\n"."Teléfono: ".$phone."\r\n"."Mensaje: ".$mensaje."\r\n"."Le responderemos a la brevedad"."\r\n"."Por favor, no responda este mensaje";
$respuesta ="From: $nya <$email>";
$respuestaenvio ="From: Maniquies Agustin <contacto@maniquiesagustin.com>";

mail ($mimail, "Ha recido una nueva consulta", $cuerpoemail, $respuesta);
mail ($email, "Recibimos tu consulta - Mananiquies Agustin", $cuerpoenvio, $respuestaenvio);
?>

<header class="container-fluid">
        <div class="container head header-desktop">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <button class="navbar-toggler" data-target="#menu" data-toggle="collapse" type="button"
                    aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a href="index.html"><img src="./images/logo.png" width="158px" height="auto"
                        alt="Logo Maniquies Agustin"></a></a>
                <div class="collapse navbar-collapse" id="menu">
                    <ul class="navbar-nav mx-auto">
                        <li class="navbar-item active">
                            <a href="index.html" class="nav-link">Inicio</a>
                        </li>
                        <li class="navbar-item active dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
                                data-target="desplegable">Productos<span class="iconify"
                                    data-icon="ant-design:caret-down-outlined"></span></a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-submenu"><a href="#"
                                        class="dropdown-item dropdown-toggle">Maniquies<span class="iconify"
                                            data-icon="ant-design:caret-right-outlined"></span></a>
                                    <ul class="dropdown-menu">
                                        <li class="dropdown-item"> Maniquíes</li>
                                        <div class="dropdown-divider"></div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <ul class="mega-Menu">
                                                    <li class="dropdown-item"><b>Mujer</b></li>
                                                    <li><a href='catalogo.html?gender=mujer&secondCategory=1&mainCategory=maniquies'
                                                            class="dropdown-item">Cuerpo completo</a></li>
                                                    <li><a href='catalogo.html?gender=mujer&secondCategory=2&mainCategory=maniquies'
                                                            class="dropdown-item">Colgante</a></li>
                                                    <li><a href='catalogo.html?gender=mujer&secondCategory=3&mainCategory=maniquies'
                                                            class="dropdown-item">Bustos</a></li>
                                                    <li><a href='catalogo.html?gender=mujer&secondCategory=4&mainCategory=maniquies'
                                                            class="dropdown-item">Lenceria</a></li>
                                                    <li><a href='catalogo.html?gender=mujer&secondCategory=5&mainCategory=maniquies'
                                                            class="dropdown-item">Cabeza</a></li>
                                                    <li><a href='catalogo.html?gender=mujer&secondCategory=6&mainCategory=maniquies'
                                                            class="dropdown-item">Piernas</a></li>
                                                    <li><a href='catalogo.html?gender=mujer&secondCategory=7&mainCategory=maniquies'
                                                            class="dropdown-item">Fibra de Vidrio</a></li>
                                                    <li><a href='catalogo.html?gender=mujer&mainCategory=maniquies'
                                                            class="dropdown-item">Ver todo en mujer</a></li>
                                                </ul>
                                                <a href="catalogo.html?gender=ninos&mainCategory=maniquies"
                                                    class="dropdown-item Item-1"><b>Niños</b></a>
                                            </div>
                                            <div class="col-md-6">
                                                <ul class="mega-Menu">
                                                    <li class="dropdown-item"><b>Hombre</b></li>
                                                    <li><a href='catalogo.html?gender=hombre&secondCategory=1&mainCategory=maniquies'
                                                            class="dropdown-item">Cuerpo completo</a></li>
                                                    <li><a href='catalogo.html?gender=hombre&secondCategory=2&mainCategory=maniquies'
                                                            class="dropdown-item">Colgante</a></li>
                                                    <li><a href='catalogo.html?gender=hombre&secondCategory=3&mainCategory=maniquies'
                                                            class="dropdown-item">Bustos</a></li>
                                                    <li><a href='catalogo.html?gender=hombre&secondCategory=4&mainCategory=maniquies'
                                                            class="dropdown-item">Lenceria</a></li>
                                                    <li><a href='catalogo.html?gender=hombre&secondCategory=5&mainCategory=maniquies'
                                                            class="dropdown-item">Cabeza</a></li>
                                                    <li><a href='catalogo.html?gender=hombre&secondCategory=6&mainCategory=maniquies'
                                                            class="dropdown-item">Piernas</a></li>
                                                    <li><a href='catalogo.html?gender=hombre&secondCategory=7&mainCategory=maniquies'
                                                            class="dropdown-item">Fibra de Vidrio</a></li>
                                                    <li><a href='catalogo.html?gender=hombre&mainCategory=maniquies'
                                                            class="dropdown-item">Ver todo en hombre</a></li>
                                                </ul>
                                                <a href="catalogo.html?mainCategory=maniquies"
                                                    class="dropdown-item Item-1"><b>Ver todo en Maniquies</b></a>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li><a href="catalogo.html?mainCategory=modistas" class="dropdown-item">Modista</a></li>
                                <li class="dropdown-submenu"><a href="#"
                                        class="dropdown-item dropdown-toggle">Equipamiento comercial<span
                                            class="iconify" data-icon="ant-design:caret-right-outlined"></span></a>
                                    <ul class="dropdown-menu heightMenu">
                                        <li class="dropdown-item">Equipamiento Comercial</li>
                                        <div class="dropdown-divider"></div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <ul class="mega-Menu">
                                                    <li><a href="catalogo.html?mainCategory=equipamiento&secondCategory=8"
                                                            class="dropdown-item">Perchas</a></li>
                                                    <li><a href="catalogo.html?mainCategory=equipamiento&secondCategory=9"
                                                            class="dropdown-item">Percheros</a></li>
                                                    <li><a href="catalogo.html?mainCategory=equipamiento&secondCategory=10"
                                                            class="dropdown-item">Portacarteras</a></li>
                                                    <li><a href="catalogo.html?mainCategory=equipamiento&secondCategory=11"
                                                            class="dropdown-item">Mensulas</a></li>
                                                    <li><a href="catalogo.html?mainCategory=equipamiento&secondCategory=12"
                                                            class="dropdown-item">Ganchos S</a></li>
                                                    <li><a href="catalogo.html?mainCategory=equipamiento&secondCategory=13"
                                                            class="dropdown-item">Cajas Registradora</a></li>
                                                </ul>
                                                <a href="catalogo.html?mainCategory=equipamiento"
                                                    class="dropdown-item Item-2"><b>Ver todo en equipamiento
                                                        comercial</b></a>
                                            </div>
                                    </ul>
                                </li>
                                <li><a href="catalogo.html?all=true" class="dropdown-item">Ver todo</a></li>
                            </ul>
                        </li>
                        <li class="navbar-item active">
                            <a href="about.html" class="nav-link">Sobre Nosotros</a>
                        </li>
                        <li class="navbar-item active">
                            <a href="faq.html" class="nav-link">Preguntas Frecuentes</a>
                        </li>
                        <li class="navbar-item active">
                            <a href="contacto.html" class="nav-link">Contacto</a>
                        </li>
                    </ul>
                </div>
                <a href="carrito.html"><span class="iconify cart-icon" data-icon="ant-design:shopping-cart-outlined"
                        height="22px"></span></a>
            </nav>
        </div>

        <div class="container header-mobile">
            <div class="hamburger" id="hamburger">
                <span class="iconify cart-icon" data-icon="ant-design:menu-outlined" height="22px"></span>
            </div>
            <div class="header-mobile-logo">
                <a href="index.html"><img src="./images/logo.png" width="158px" height="auto"
                        alt="Logo Maniquies Agustin"></a></a>
            </div>
            <div class="carrito-mobile">
                <a href="carrito.html"><span class="iconify cart-icon" data-icon="ant-design:shopping-cart-outlined"
                        height="22px"></span></a>
            </div>
        </div>

        <div class="container-fluid menu-mobile" id="menu-mobile" style="visibility: hidden;">


        </div>
    </header>

    
<main class="container contenido" id="main">

    <h1 class="section-title-h1 bold">¡Su consulta fue enviada exitosamente!</h1>
    <p class="grey">Pronto nos estaremos comunicando con usted.</p>
    <a href="catalogo.html?all=true" style="text-decoration: none;"><button class="btn-principal page-exito">Ver catálogo</button></a>
    
</main>


<footer class="container-fluid" id="footer">
        <div class="container">
            <nav class="row">
                <ul class="col-xs-12 col-md-3 list-unstyled">
                    <li><b>Navegacion</b></li>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="catalogo.html?all=true">Productos</a></li>
                    <li><a href="about.html">Sobre Nosotros</a></li>
                    <li><a href="faq.html">Preguntas Frecuentes</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
                <hr>
                <ul class="col-xs-12 col-md-3 list-unstyled">
                    <li><b>Medios de Pago</b></li>
                    <li>MercadoPago</li>
                    <li>Efectivo</li>
                    <li>Transferencia Bancaria</li>
                </ul>
                <hr>
                <ul class="col-xs-12 col-md-3 list-unstyled">
                    <li><b>Contactanos</b></li>
                    <li><a href="https://wa.me/5491130333174"><span class="iconify" data-icon="akar-icons:whatsapp-fill"
                                data-inline="false"></span> (011) 3033-3174</a></li>
                    <li><span class="iconify" data-icon="feather:mail" data-inline="false"></span><a href="mailto:contacto@maniquiesagustin.com"
                            class="SizeCont"> contacto@maniquiesagustin.com</a></li>
                    <li><span class="iconify" data-icon="clarity:map-marker-line"
                                data-inline="false"></span> San Emilio 1202, Moreno</li>
                </ul>
                <hr>
                <ul class="col-xs-12 col-md-3 list-unstyled">
                    <li><b>Redes Sociales</b></li>
                    <li><a href="https://www.facebook.com/ManiquiesAgustin"><span class="iconify" data-icon="ri:facebook-circle-line" data-inline="false"
                                height="22px" width="22px"></span> ManiquiesAgustin</a></li>
                    <li><a href="https://www.instagram.com/maniquies_agustin/"><span class="iconify" data-icon="simple-icons:instagram" data-inline="false"></span>
                             maniquies_agustin</a></li>
                </ul>
                <hr>
            </nav>
        </div>
    </footer>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
    </body>
</html>