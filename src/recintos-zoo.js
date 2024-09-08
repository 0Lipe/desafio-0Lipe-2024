import { Animais } from "./animais.js";
import { Recinto } from "./recintos.js";
import { colocarAnimal } from "./functions.js";
import { confort } from "./confortavel.js";

class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    const animalNames = Animais.map((a) => a.especie);
    const resultado = {
      erro: "",
      recintosViaveis: [],
    };

    if (!animalNames.includes(animal)) {
      resultado.erro = "Animal inválido";
      delete resultado.recintosViaveis;
      return resultado;
    }

    if (quantidade <= 0) {
      resultado.erro = "Quantidade inválida";
      delete resultado.recintosViaveis;
      return resultado;
    }

    const animalProps = Animais.find((a) => a.especie === animal);
    for (const recinto of Recinto) {
      const bio = recinto.bioma.split(/ e /);

      if (!animalProps.bioma.some((a) => bio.includes(a))) {
        continue;
      }

      if (quantidade > recinto.tamanhoTotal) {
        resultado.erro = "Não há recinto viável";
        delete resultado.recintosViaveis;
        return resultado;
      }
      let d = 0;

      if (
        recinto.animaisExistentes[0] !== undefined &&
        recinto.animaisExistentes[0] !== animalProps.especie
      ) {
        d = 1;
      }

      if (!colocarAnimal(animalProps.especie, recinto.animaisExistentes[0])) {
        continue;
      }

      if (animalProps.especie === "HIPOPOTAMO") {
        if (!confort(bio, recinto.animaisExistentes[0])) {
          continue;
        }
      }

      const animalSizeLookup = Animais.reduce((acc, a) => {
        acc[a.especie] = a.tamanho;
        return acc;
      }, {});

      const totalAnimalSize = recinto.animaisExistentes.reduce((sum, a) => {
        const animalSize = animalSizeLookup[a];
        return sum + animalSize;
      }, 0);

      const tamanhoDisponivel = recinto.tamanhoTotal - totalAnimalSize - d;

      resultado.recintosViaveis.push(
        `Recinto ${recinto.numero} (espaço livre: ${
          tamanhoDisponivel - quantidade * animalProps.tamanho
        } total: ${recinto.tamanhoTotal})`
      );
    }

    return resultado;
  }
}

export { RecintosZoo as RecintosZoo };
