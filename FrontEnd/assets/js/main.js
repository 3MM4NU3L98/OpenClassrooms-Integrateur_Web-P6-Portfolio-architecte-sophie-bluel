import { host, galeriePortefolio } from "./module/const.js";
import { afficheGalerie } from "./module/afficeGalerie.js";

console.log(`${host}/works`)
// Récupération des travaux depuis l'API en JSON
const travaux = await fetch(`${host}/works`).then(travaux => travaux.json());

console.log(travaux)


afficheGalerie(travaux, galeriePortefolio)