export function confort(recinto, animalExistente) {
  const recintoConfortavel = ["Savana", "Rio"];
  if (animalExistente == "" || animalExistente === undefined) {
    return true;
  }
  if (JSON.stringify(recinto) === JSON.stringify(recintoConfortavel)) {
    return true;
  } else {
    return false;
  }
}
