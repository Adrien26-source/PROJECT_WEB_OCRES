var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users');
});
// méthode post pour créer un utilisateur
router.post('/users', async (req,res) => {

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

module.exports = router;
