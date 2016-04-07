var myApp = angular.module('myApp',[]);

myApp.controller("exemple1Ctrl", function($scope){
   
});

function viderValue(champ){
    obj=document.getElementById(champ);
    obj.value="";
}

function afficher(){
     var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        document.getElementById('ici').innerHTML=xhr.responseText;
    }
    };
    xhr.open("GET", "afficher.php", true);
    xhr.send(null);
}


function ajouter(){
    var title = document.getElementById('nom1');
    var description = document.getElementById('nom2');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        //document.getElementById('ici2').innerHTML=xhr.responseText;
    }
    };
    xhr.open("GET", "ajouter.php?title="+title.value+"&description="+description.value, true);
    xhr.send(null);
}

function modifier(champ){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        document.getElementById('contenue').innerHTML=xhr.responseText;
    }
    };
    xhr.open("GET", "afficherEntierement.php?cle="+champ, true);
    xhr.send(null);
}

function pageAjouter(){
    document.getElementById('contenue').innerHTML='<h1><center>Add new todo item</center></h1><form class="w3-container"><label class="w3-label w3-text-blue"><b>Title</b></label><label for="nom1"><input type="text" class="w3-input w3-border w3-round w3-hover-grey" id="nom1" value="title..." onclick="viderValue(id)" /></label></br><label class="w3-label w3-text-blue"><b>Description</b></label><label for="nom2"><input type="text" class="w3-input w3-border w3-round w3-hover-grey" id="nom2" value="desciption..." onclick="viderValue(id)" /></label></form></br><label for="ajouter1"><a href="todo1.html"><button class="w3-btn-block w3-btn w3-round-large w3-purple" id="ajouter1" name="save" onclick="ajouter()">Save</button></a></label>';
}

function edit(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
       document.getElementById('contenue').innerHTML=xhr.responseText;
    }
    };
    xhr.open("GET", "edit.php", true);
    xhr.send(null);
}

function save(){
    var title = document.getElementById('nom1');
    var description = document.getElementById('nom2');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
       // document.getElementById('ici2').innerHTML=xhr.responseText;
    }
    };
    xhr.open("GET", "save.php?title="+title.value+"&description="+description.value, true);
    xhr.send(null);
}

function delet(){
    if(confirm("Are you sure you want to delete this ?")){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
                //  document.getElementById('ici2').innerHTML=xhr.responseText;
            }
        };
        xhr.open("GET", "delet.php", true);
        xhr.send(null);
    } 
    window.location ='Todo1.html';
}



