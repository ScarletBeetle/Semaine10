$bouton = document.getElementById("bouton");
$score = document.getElementById("score");
$multiplicateur = document.getElementById("multiplicateur");
$compteur = document.getElementById("compteur");
$autoclick = document.getElementById("autoclick");
score = 0;
compteur = 1;




function afficher() {
    $score.innerHTML = "Cookies : " + score;
}

function afficherCompteur () {
    $multiplicateur.innerHTML = "Multiplicateur x" + compteur + " (prix du prochain : " + prix() + ")";
    
}


function cliquer() {
    score = score + 1;
    afficher();

}

function prix() {
    return 50 * compteur * compteur;
}



function incrementer() {
    if (score >= prix()) {
    score = score - prix();
    compteur = compteur + 1;
    afficherCompteur();
    afficher();
    } else { alert("Score insuffisant!") }
  
}


$bouton.onclick = cliquer;
$multiplicateur.onclick = incrementer;
afficher();
afficherCompteur();