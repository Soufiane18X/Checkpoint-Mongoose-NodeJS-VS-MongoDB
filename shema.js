const personSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Nom de la personne, requis
    age: Number, // Âge de la personne
    favoriteFoods: [String] // Liste des aliments préférés
  });
  
  const Person = mongoose.model('Person', personSchema);
  