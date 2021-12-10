var mongoose = require('mongoose');

//creation d'un schema de données et d'un modele (creation base de données)

const UtilisateurSchema = new mongoose.Schema({
  prenom:{
    type: String,
    required: true,
  },
  nom:{
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true,
  },
})
// METHODE MODEL qui permet de rendre le modele utilisable
module.exports = mongoose.model('Utilisateur', UtilisateurSchema);
//var User = mongoose.model('User', UtilisateurSchema);

//Ajout d'un utilisateur a notre bdd

//var pers = new User({prenom:'Denis', nom:'Alfonse', type:'Employé'});

//pers.save(function(err, pers){
  //if (err) return console.error(err);
//});