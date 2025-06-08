const mongoose = require('mongoose'); // Importation du module mongoose

const personSchema = new mongoose.Schema({ // Modèle de schéma de personne
  name: { type: String, required: true }, // Champ name de type chaîne de caractères, requis
  age: Number, // Champ age de type nombre
  favoriteFoods: [String] // Champ favoriteFoods de type tableau de chaînes de caractères
});

const Person = mongoose.model('Person', personSchema); // Modèle de personne

module.exports = Person;
