export function colocarAnimal(animal, atual) {
  const animaisCarnivoros = ["LEAO", "LEOPARDO", "CROCODILO"];
  const animaisNaoCarnivoros = ["MACACO", "GAZELA", "HIPOPOTAMO"];
  if (atual === "" || atual === undefined) {
    return true;
  }

  if (
    animaisCarnivoros.includes(animal) &&
    animaisNaoCarnivoros.includes(atual)
  ) {
    return false;
  }

  if (animaisCarnivoros.includes(animal) && animaisCarnivoros.includes(atual)) {
    return true;
  }

  if (
    animaisNaoCarnivoros.includes(animal) &&
    animaisCarnivoros.includes(atual)
  ) {
    return false;
  }
  if (
    animaisNaoCarnivoros.includes(animal) &&
    animaisNaoCarnivoros.includes(atual)
  ) {
    return true;
  }
}
