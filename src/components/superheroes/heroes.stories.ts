import "./heroes.css";
import { createCard } from "./heroes";
import { createElement } from "../utils/createelement";
import { getCharacter } from "../utils/api";

export default {
  title: "Components/Game",
  parameters: { layout: "centered" },
};

export const RandomCharacterOne = () => {
  const randomButtonOne = createElement("button", {
    innerText: "Play",
    onclick: async () => {
      // Verify each step (alert, console.log)
      // 1) generate random character id
      const random = Math.floor(Math.random() * 731) + 1;
      console.log({ random });

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
      // 2) getCharacter from API
      const character = await getCharacter(random);
      console.log({ character });

      // 3) create card
      const randomCharacterCard = createCard(character);

      // 4) append card
      // container.append(randomCharacterCard);
      // 5) make sure to only display one character
      // parentNode.replaceChild(newNode, oldNode);

      container.replaceChild(randomCharacterCard, container.lastChild);
    },
  });
  const container = createElement("div", {
    className: "container",
    childs: [randomButtonOne, createElement("div", {})],
  });
  return container;
};
