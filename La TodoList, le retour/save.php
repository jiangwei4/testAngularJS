<?php
session_start();
	$host ='localhost';
	$user='root';
	$bdd='listtodo';
	$password="";
	$mysqli = new mysqli($host,$user,$password,$bdd) or die('erreur de connexion au serveur ou a la base de donnees');

	$cle=$_SESSION['cle'];
	$title=$_GET['title'];
	$description=$_GET['description'];
	
	$query = "UPDATE liste SET title='$title', description='$description' WHERE cle='$cle' ";
	$mysqli->query($query)or die('Erreur lors de l\'envoi</br>'.mysqli_error());
?>