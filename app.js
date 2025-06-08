const mongoose = require('mongoose'); // Importer le module mongoose
const dotenv = require('dotenv'); // Importer le module dotenv
const Person = require('./person'); // Importer le modèle Person

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // Connexion à la base de données MongoDB
  .then(() => console.log('Connected to MongoDB')) // Succès de la connexion
  .catch((err) => console.error('Could not connect to MongoDB', err)); // Échec de la connexion

const arrayOfPeople = [ // Tableau de personnes
  { name: 'Alice', age: 25, favoriteFoods: ['Sushi', 'Ramen'] }, // Personne Alice
  { name: 'Bob', age: 22, favoriteFoods: ['Burgers', 'Fries'] }, // Personne Bob
  { name: 'Charlie', age: 35, favoriteFoods: ['Steak', 'Salad'] }, // Personne Charlie
  { name: 'Bob', age: 22, favoriteFoods: ['Burgers', 'Fries'] }, // Personne Bob
  { name: 'Charlie', age: 35, favoriteFoods: ['Steak', 'Salad'] } // Personne Charlie
];

async function createPeople() { // Fonction asynchrone pour créer des personnes
  try { // Essayer de créer des personnes
    const people = await Person.create(arrayOfPeople); // Créer des personnes
    console.log('Personnes créées :', people); // Afficher les personnes créées
  } catch (err) { // Gérer les erreurs
    console.error('Erreur lors de la création des personnes :', err); // Afficher l'erreur
  }
};


async function findPeopleByName(name) { // Fonction asynchrone pour trouver des personnes par leur nom
  try { // Essayer de trouver des personnes par leur nom
    const people = await Person.find({ name: name }); // Trouver des personnes par leur nom
    console.log('Personnes trouvées :', people); // Afficher les personnes trouvées
  } catch (err) {   // Gérer les erreurs
    console.error('Erreur lors de la recherche des personnes :', err);  // Afficher l'erreur
  }
};

async function findOneByFood(food) { // Fonction asynchrone pour trouver une personne par son aliment préféré
  try { // Essayer de trouver une personne par son aliment préféré
    const person // Déclarer une variable person
 = await Person.findOne({ favoriteFoods: food }); // Trouver une personne par son aliment préféré
    console.log('Personne trouvée :', person); // Afficher la personne trouvée
  } catch (err) { // Gérer les erreurs
    console.error('Erreur lors de la recherche de la personne :', err); // Afficher l'erreur
  }
};


async function findPersonById(personId) {
  try { // Essayer de trouver une personne par son identifiant
    const person = await Person.findById(personId); // Trouver la personne par son identifiant
    console.log('Personne trouvée :', person); // Afficher la personne trouvée
  } catch (err) { // Gérer les erreurs
    console.error('Erreur lors de la recherche de la personne :', err); // Afficher l'erreur
  }
};

async function addFavoriteFood() {
  try { // Essayer d'ajouter un aliment favori à une personne
    const person = await Person.findById("67d47258acb7084c347e6f95"); // Trouver la personne par son identifiant
    person.favoriteFoods.push("hamburger" ); // Ajouter l'aliment favori à la personne
    await person.save(); // Enregistrer la personne avec l'aliment favori ajouté
    console.log('Aliment favori ajouté à la personne :', person); // Afficher la personne avec l'aliment favori ajouté
  } catch (err) { // Gérer les erreurs
    console.error("Erreur lors de l'ajout de l'aliment favori à la personne :", err); // Afficher l'erreur
  }
};

async function updateAgeByName() { // Fonction asynchrone pour mettre à jour l'âge d'une personne par son nom
  try {
    // Recherche de la personne par nom
    const person = await Person.findOne({ name: 'Alice' });
    if (!person) {
      console.log("Personne avec ce nom non trouvée.");
      return;
    }

    // Mise à jour de l'âge
    person.age = 20;

    // Sauvegarde des modifications
    await person.save();

    console.log('Personne mise à jour :', person);
  } catch (err) {
    console.error('Erreur lors de la mise à jour de la personne :', err);
  }
};


async function deletePersonById(personId) {
  try {
    // Supprimer la personne par son _id
  const deletedPerson = await Person.findByIdAndDelete(personId); // Supprimer la personne par son identifiant

    if (!deletedPerson) { // Si aucune personne n'est trouvée
      console.log("Aucune personne trouvée avec cet ID."); // Afficher un message
      return;
    }

    console.log('Personne supprimée :', deletedPerson); // Afficher la personne supprimée
  } catch (err) {
    console.error('Erreur lors de la suppression de la personne :', err); // Afficher l'erreur
  }
};


async function deleteManyPeaple() { // Fonction asynchrone pour supprimer plusieurs personnes
  try { // Essayer de supprimer plusieurs personnes
    const deletedPeople = await Person.deleteMany({}); // Supprimer toutes les personnes
    console.log('Personnes supprimées :', deletedPeople); // Afficher les personnes supprimées
  } catch (err) { // Gérer les erreurs
    console.error('Erreur lors de la suppression des personnes :', err); // Afficher l'erreur
  }
};


async function removeManyPeople() { // Fonction asynchrone pour supprimer plusieurs personnes
  try { // Essayer de supprimer plusieurs personnes
    const query = { name: 'Mary' }; // Définir la requête de suppression
    await Person.remove(query, (err, data) => { // Supprimer
      if (err) return console.error(err); // Gérer les erreurs
      console.log('Personnes supprimées:', data);   // Afficher les personnes supprimées
      done(data); // Terminé
    });
  } catch (err) { // Gérer les erreurs
    console.error('Erreur lors de la suppression des personnes :', err); // Afficher l'erreur
  }
};











// Appeler la fonction avec le nom désiré

createPeople();
addFavoriteFood();
findPersonById("67d47258acb7084c347e6f95");
findOneByFood("Steak");
findPeopleByName("Bob");
updateAgeByName();
deletePersonById('67d46b63dd858fa32941f294');
deleteManyPeaple();
removeManyPeople();





