<?php  
session_start();
// session_destroy();
 
    if ($_SESSION) {
        $usuario = $_SESSION['usuario'];
        
    } 
                      
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script type='text/javascript' src="../js/index.js"></script>
    <script src="../js/jquery-3.7.1.min.js"></script>
    <script src="../js/jquery-ui/jquery-ui.js"></script>
    <title>Administrador</title>
</head>

<body>

    <div class="container">
        <!-- Sidebar Section -->
        <aside>
            <div class="toggle">
                <div class="logo">
                    <img src="images/logo.jpg">
                    <h2>Panel<span class="danger">MediCO2</span></h2>
                </div>
                <div class="close" id="close-btn">
                    <span class="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>

            <div class="sidebar">
                <a href="main.php" class="nav-btn" onclick="activar()">
                    <span class="material-icons-sharp">
                        dashboard
                    </span>
                    <h3>Principal</h3>
                </a>
                <a href="mediciones.php" class="nav-btn"  onclick="activar()">
                    <span class="material-icons-sharp">
                        insights
                    </span>
                    <h3>Mediciones</h3>
                </a>
                <a href="graficas.php" class="nav-btn"  onclick="activar()">
                    <span class="material-icons-sharp">
                        receipt_long
                    </span>
                    <h3>Gráficas</h3>
                </a>
                <a href="alertas.php" class="nav-btn"  onclick="activar()">
                    <span class="material-icons-sharp">
                        report_gmailerrorred
                    </span>
                    <h3>Alertas</h3>
                    <span class="message-count">27</span>
                </a>
                <a href="#" class="nav-btn"  onclick="activar()">
                    <span class="material-icons-sharp">
                        mail_outline
                    </span>
                    <h3>Reportes</h3>
                    
                </a>
                <a href="#" class="nav-btn"  onclick="activar()">
                    <span class="material-icons-sharp">
                        inventory
                    </span>
                    <h3>Beneficios</h3>
                </a>
                <a href="#" class="nav-btn"  onclick="activar()">
                    <span class="material-icons-sharp">
                        report_gmailerrorred
                    </span>
                    <h3>Amenazas</h3>
                </a>
                <a href="#" class="nav-btn"  onclick="activar()">
                    <span class="material-icons-sharp">
                        settings
                    </span>
                    <h3>Configuración</h3>
                </a>
                <a href="#" class="nav-btn "  onclick="activar()">
                    <span class="material-icons-sharp">
                        add
                    </span>
                    <h3>New Login</h3>
                </a>
                <a href="cerrar.php">
                    <span class="material-icons-sharp">
                        logout
                    </span>
                    <h3>Cerrar sesión</h3>
                </a>
            </div>
        </aside>
        <!-- End of Sidebar Section -->
