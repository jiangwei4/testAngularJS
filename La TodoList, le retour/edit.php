<?php
session_start();

	echo '<h1><center>Edit todo item</center></h1><form class="w3-container"><label class="w3-label w3-text-blue"><b>Title</b></label><label for="nom1"><input type="text" class="w3-input w3-border w3-round w3-hover-grey" id="nom1" value="'.$_SESSION["title"].'" onclick="viderValue(id)" /></label></br><label for="nom2"><label class="w3-label w3-text-blue"><b>Description</b></label><input type="text" class="w3-input w3-border w3-round w3-hover-grey" id="nom2" value="'.$_SESSION["description"].'" onclick="viderValue(id)" /></label></form></br><label for="ajouter1"><a href="todo1.html"><button class="w3-btn-block w3-btn w3-round-large w3-purple" id="save" name="save" onclick="save()">Save</button></a></label>';
?>