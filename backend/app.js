var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const jwt = require('jsonwebtoken');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

const Utilisateur = require('./routes/BaseDeDonnees');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://AdrienCherqui:covidiot007@clusteranimaux.ruquf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 

{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('users/', (req, res, next) => {
  Utilisateur.find()
    .then(Utilisateur => res.status(200).json(Utilisateur))
    .catch(error => res.status(400).json({ error }));
});
app.post('/users', (req, res, next) => {
  delete req.body._id;
  const Utilisateur = new Utilisateur({
    ...req.body
  });
  Utilisateur.save() // Pour enregistrer utilisateur dans base de donnees
    .then(() => res.status(201).json({ message: 'Produit enregistré !'}))
    .catch(error => res.status(400).json({ error }));
}); // recupere les donnees 
app.get('/', (req, res, next) => {
  Utilisateur.findOne({ _id: req.params.id })
    .then(Utilisateur => res.status(200).json(Utilisateur))
    .catch(error => res.status(404).json({ error }));
}); //mettre a jour 
app.put('/', (req, res, next) => {
  Utilisateur.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Produit modifié !'}))
    .catch(error => res.status(400).json({ error }));
});
/*app.delete('/', (req, res, next) => {
  Utilisateur.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Produit supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});*/
app.post('/users', async (req,res) => {

  const Utilisateur = new Utilisateur({

    prenom:req.body.prenom,

    nom:req.body.nom,

    type:req.body.type,

  });

  try{

    const savedUtilisateur = await Utilisateur.save();

    res.json(savedUtilisateur);

  }catch (error) {

    res.json({message:error});

  }

})

exports.login = (req, res, next) => {
  Utilisateur.findOne({ type: req.body.type })
    .then(Utilisateur => {
      if (!Utilisateur) {
        res.json({message:error});
      }
          res.status(200).json({
            UtilisateurId: Utilisateur._id,
            UtilisateurNom: UtilisateurNom._Nom,
            UtilisateurPrenom: UtilisateurPrenom._Prenom, 
            UtilisateurType: UtilisateurType._Type,

            token: jwt.sign(
              { UtilisateurId: Utilisateur._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    };
module.exports = app;
