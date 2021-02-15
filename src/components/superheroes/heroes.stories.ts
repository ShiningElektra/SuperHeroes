import "./heroes.css";
import { createCard } from "./heroes";
import { createElement } from "../utils/createelement";
import { getCharacter } from "../utils/api";

export default {
  title: "Components/Game",
  parameters: { layout: "centered" },
};

function removeAllChilds(element) {
  element.innerHTML = "";
}

export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    className: "button__play",
    innerText: "Play",
    onclick: async () => {
      // Verify each step (alert, console.log)
      // 1) generate random character id
      const random = Math.floor(Math.random() * 731) + 1;
      console.log({ random });

      const randomTwo = Math.floor(Math.random() * 731) + 1;
      console.log({ randomTwo });

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
      // 2) getCharacter from API
      const character = await getCharacter(random);
      console.log({ character });

      const characterTwo = await getCharacter(randomTwo);
      console.log({ characterTwo });

      // 3) create card
      const randomCharacterCardOne = createCard(character);
      const randomCharacterCardTwo = createCard(characterTwo);
      // console.log(characterTwo.powerstats.power);

      const winnerElement = createElement("div", {
        className: "winner",
      });
      winnerElement.innerText =
        +character.powerstats.combat +
          +character.powerstats.durability +
          +character.powerstats.intelligence +
          +character.powerstats.power +
          +character.powerstats.speed +
          +character.powerstats.strength >
        +character.powerstats.combat +
          +character.powerstats.durability +
          +character.powerstats.intelligence +
          +character.powerstats.power +
          +character.powerstats.speed +
          +character.powerstats.strength
          ? "Player One wins!"
          : "Player Two wins!";

      removeAllChilds(container);
      container.innerHTML = "";
      // 4) append card
      container.append(
        randomButton,
        randomCharacterCardOne,
        randomCharacterCardTwo,
        winnerElement
      );
      // 5) make sure to only display one character
      // parentNode.replaceChild(newNode, oldNode);

      // 6) feel awesome 🐱‍👤
    },
  });
  const container = createElement("div", {
    className: "container",
    childs: [randomButton, createElement("div", {})],
  });
  return container;
};
