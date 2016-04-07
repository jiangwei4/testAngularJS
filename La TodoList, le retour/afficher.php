<?php
session_start();
	$host ='localhost';
	$user='root';
	$bdd='listtodo';
	$password="";
	$mysqli = new mysqli($host,$user,$password,$bdd) or die('erreur de connexion au serveur ou a la base de donnees');
	
	$query = "SELECT * FROM liste ";
	$result = $mysqli->query($query)or die('Erreur lors de l\'envoi</br>'.mysqli_error());

	echo '<nav class="w3-sidenav w3-white" style="width:100%">';
	while($row = $result->fetch_assoc()){
		$T = $row["title"]; 
		$K = $row["cle"];
		
		echo '<a href="#" id="'.$K.'"" name="'.$K.'" onClick="modifier(id)">'.$T.'</a>';
	
	}
	echo '<label for="ajouter1"><button class="w3-btn-block w3-btn w3-round-large w3-purple" id="ajouter1" name="add new one" onClick="pageAjouter()">add new one</button></label></nav> ';
?>