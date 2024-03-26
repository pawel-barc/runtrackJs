
function bisextile(annee){
    if ((annee%4==0 && annee%100!=0) || annee%400==0 ){
        document.write(annee + " est une année bissextile.");
annee=prompt("Entrez l'annee")
}
    else{ 
        document.write(annee + " n'est pas une année bissextile.");

    }
}    
var annee = parseInt(prompt("Entrez l'année :"));
        bisextile(annee);