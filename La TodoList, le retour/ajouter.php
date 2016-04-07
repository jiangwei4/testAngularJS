<?php
session_start();
	$host ='localhost';
	$user='root';
	$bdd='listtodo';
	$password="";
	$mysqli = new mysqli($host,$user,$password,$bdd) or die('erreur de connexion au serveur ou a la base de donnees');

	$query2 = "SELECT * FROM liste ";
	$result2 = $mysqli->query($query2)or die('Erreur lors de l\'envoi</br>'.mysqli_error());
	$cle=1;
	while($row = $result2->fetch_assoc()){
		$cle++;
	}

	$title=$_GET['title'];
	$description=$_GET['description'];
	$query = "INSERT INTO liste VALUES ('$title','$description','$cle')";
	$result = $mysqli->query($query)or die('Erreur lors de l\'envoi</br>'.mysqli_error());
?>