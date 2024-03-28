function jsonValueKey(jsonString, key) {
  let jsonObject = JSON.parse(jsonString);
  return jsonObject[key];
}

let key = 'creation'; // La clé que vous souhaitez récupérer
let jsonString = `{
  "name": "La Plateforme",
  "adresse": "8 rue d'hozier",
  "city": "Marseille",
  "nb_staff": "11",
  "creation": "2019"
}`;

console.log(jsonValueKey(jsonString, key));
