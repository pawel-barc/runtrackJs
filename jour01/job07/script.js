
function jourTravaille(date){
   
    let jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    let mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    let annee = date.getFullYear();
    let moisvaleur = date.getMonth();
    let jour = date.getDate();
    let jourSemaine = date.getDay();

    
    let Joursferies = ["2024-01-01", "2024-04-01", "2024-05-01", "2024-05-08", "2024-07-14", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25"];
    let dateString = annee + '-' + (moisvaleur < 9 ? '0' + (moisvaleur + 1) : (moisvaleur + 1)) + '-' + (jour < 10 ? '0' + jour : jour);
    if (Joursferies.includes(dateString)) {
        console.log("Le", jour, mois[moisvaleur], annee, "est un jour férié");
        return;
    }
if (jourSemaine == 0 || jourSemaine ==6) {
    console.log("Non", jours[jourSemaine], jour, mois[moisvaleur], annee, "est un week-end");
    return;
    }
    console.log("Oui", jours[jourSemaine], jour, mois[moisvaleur], annee, "est un jour travaillé");
    return;
}

const dateTest = new Date("2024-05-09");
jourTravaille(dateTest);