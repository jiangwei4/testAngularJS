<?php
session_start();
	$host ='localhost';
	$user='root';
	$bdd='listtodo';
	$password="";
	$mysqli = new mysqli($host,$user,$password,$bdd) or die('erreur de connexion au serveur ou a la base de donnees');
	
	$cle=$_GET['cle'];
	$query = "SELECT * FROM liste WHERE cle='$cle'";
	$result = $mysqli->query($query)or die('Erreur lors de l\'envoi</br>'.mysqli_error());
	$row = $result->fetch_assoc();

	$_SESSION['cle']=$cle;
	$_SESSION['title']=$row['title'];
	$_SESSION['description']=$row['description'];

	echo 'Title : '.$row['title'].'</br> Descritpion : '.$row['description'].'</br>';
	echo '<label for="edit1"><button class="w3-btn w3-ripple w3-purple w3-btn w3-round-large" style="width:48%" id="edit1" name="edit" onClick="edit()">Edit</button></label><a>&nbsp;</a>';
	echo '<label for="delet1"><button class="w3-btn w3-ripple w3-red w3-btn w3-round-large" style="width:48%" id="delet1" name="delet" onClick="delet()">Delete</button></label>';	
?>