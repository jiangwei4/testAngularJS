<?php
session_start();
	$host ='localhost';
	$user='root';
	$bdd='listtodo';
	$password="";
	$mysqli = new mysqli($host,$user,$password,$bdd) or die('erreur de connexion au serveur ou a la base de donnees');

	$cle=$_SESSION['cle'];

	$query= "DELETE FROM liste WHERE cle='$cle'";
	$mysqli->query($query)or die('Erreur lors de l\'envoi</br>'.mysqli_error());
?>