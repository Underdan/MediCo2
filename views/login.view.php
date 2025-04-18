<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,300italic,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<link href='https://fonts.googleapis.com/css?family=Raleway:400,300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
	<link rel="stylesheet" href="css/estilos.css">
	<script src="js/bootstrap.bundle.min.js"></script>
	<script type='text/javascript' src="js/index.js"></script>

	<title>MediCO2</title>
</head>
<body>
	
		<header>
		<div class="contenedor" style="height: 100px">

			<nav class="menu">
				<a href="index.php">Inicio</a>
				<a href="login.php" id="btn-ingresar">Ingresar</a>
			</nav>
			
		</div>
		</header>
		<div class="conten">
		<h1 class="titulo">Iniciar Sesión</h1>
		
		<hr class="border">

		<form class="formulario" name="login" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
			<div class="form-group">
				<i class="icono izquierda fa fa-user"></i><input class="usuario" type="text" name="usuario" placeholder="Usuario">
			</div>

			<div class="form-group">
				<i class="icono izquierda fa fa-lock"></i><input class="password_btn" type="password" name="password" placeholder="Password">
				<i class="submit-btn fa fa-arrow-right" onclick="login.submit()"></i>
			</div>

			<!-- Comprobamos si la variable errores esta seteada, si es asi mostramos los errores -->
			<?php if(!empty($errores)): ?>
				<div class="error">
					<ul>
						<?php echo $errores; ?>
					</ul>
				</div>
			<?php endif; ?>
		</form>

		<p class="texto-registrate">
			¿ Aun no tienes cuenta ?
			<a href="registrate.php">Regístrate</a>
		</p>

	</div>

		





		<script type="text/javascript" src="js/jquery-3.7.1.min.js"></script>
		<script type="text/javascript" src="js/efectos.js"></script>
		<script type='text/javascript' src="js/parallax.js"></script>
	
</body>
</html>