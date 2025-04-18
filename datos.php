<?php 
$div=0;
$res=0;



$conexion = new mysqli('localhost', 'root', '12345678', 'medico2');

if($conexion->connect_errno){
	echo "error al conectarse a la bd";
} else {
	$conexion->set_charset("utf8");
	$statement = $conexion->prepare("SELECT * FROM sensor WHERE nombre LIKE '%SensorI%' ORDER BY id DESC");
	$statement->execute();
	$resultados = $statement->get_result();
	
	$respuesta = [];
	$datos = [];
	
	while($fila = $resultados->fetch_assoc()){
		$div=$fila['co2'];
		array_push($datos, $div);

	}
	$max=max($datos);
	$i=0;
	$statement = $conexion->prepare("SELECT * FROM sensor WHERE nombre LIKE '%SensorI%' ORDER BY id DESC LIMIT 1");
	$statement->execute();
	$resultados = $statement->get_result();
	while($fila = $resultados->fetch_assoc()){

	//for ($i=0; $i < 3; $i++) { 
		$dato = [
			'id' 	 => $fila['id'],
			'nombre' => $fila['nombre'],
			'dato' 	 => $fila['co2'],	
		];
		array_push($respuesta, $dato);
		$i++;
	}
	//---------------------------------------------------------------------------------------------------------
	$statement = $conexion->prepare("SELECT * FROM sensor WHERE nombre LIKE '%SensorD%' ORDER BY id DESC");
	$statement->execute();
	$resultados = $statement->get_result();
	
	$datos = [];
	
	while($fila = $resultados->fetch_assoc()){
		$div=$fila['co2'];
		array_push($datos, $div);

	}
	$max=max($datos);
	$i=0;
	$statement = $conexion->prepare("SELECT * FROM sensor WHERE nombre LIKE '%SensorD%' ORDER BY id DESC LIMIT 1");
	$statement->execute();
	$resultados = $statement->get_result();
	while($fila = $resultados->fetch_assoc()){
		$dato = [
			'id' 	 => $fila['id'],
			'nombre' => $fila['nombre'],
			'dato' 	 => $fila['co2'],	
		];
		array_push($respuesta, $dato);
		$i++;
	}
	//---------------------------
	$statement = $conexion->prepare("SELECT * FROM sensor WHERE nombre LIKE '%SensorM%' ORDER BY id DESC LIMIT 1");
	$statement->execute();
	$resultados = $statement->get_result();
	while($fila = $resultados->fetch_assoc()){
		$dato = [
			'id' 	 => $fila['id'],
			'nombre' => $fila['nombre'],
			'dato' 	 => $fila['co2'],	
		];
		array_push($respuesta, $dato);
		$i++;
	}

}
//print_r($respuesta);
//var_dump($respuesta);
echo json_encode($respuesta);







 ?>