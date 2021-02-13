import { createElement } from "../utils/createelement";

// <div class="game">
//     <article class="leftcard">
//         <div class="player1">NamePlayer1
//           <div class="card__front">PicHero
//             <h2 class="heroname">NameHero</h2>
//              <div class="card__info">Powers
//              </div>
//             </div>
//         </div>
//     </article>
//     <article class="rightcard">
//         <div class="player2">NamePlayer2
//           <div class="card__front">PicHeroe
//             <h2 class="hero">NameHero</h2>
//              <div class="card__info">Powers
//              </div>
//              </div>
//          </div>
//      </article>
//     <div class="card__back">Flip who won
//     </div>
// </div>

export function createCard({ image, name, powerstats, biography }) {
  return createElement("div", {
    className: "game",
    childs: [
      createElement("article", {
        className: "leftcard",
        childs: [
          createElement("div", {
            className: "Player",
          }),
          createElement("div", {
            className: "card__front",
            childs: [
              createElement("h2", {
                className: "heroname",
                innerText: name,
              }),
              createElement("img", {
                className: "card__pic",
                alt: "",
                src: image,
              }),
              createElement("div", {
                className: "card__info",
                innerText: powerstats,
              }),
              createElement("div", {
                className: "card__info",
                innerText: biography,
              }),
            ],
          }),
          createElement("div", {
            className: "card__back",
            childs: [
              createElement("div", {
                className: "card__back--p",
                innerText: `You lost!`,
              }),
            ],
          }),
        ],
      }),
      createElement("article", {
        className: "leftcard",
        childs: [
          createElement("div", {
            className: "Player",
          }),
          createElement("div", {
            className: "card__front",
            childs: [
              createElement("h2", {
                className: "heroname",
                innerText: name,
              }),
              createElement("img", {
                className: "card__pic",
                alt: "",
                src: image,
              }),
              createElement("div", {
                className: "card__info",
                innerText: powerstats,
              }),
              createElement("div", {
                className: "card__info",
                innerText: biography,
              }),
            ],
          }),
          createElement("div", {
            className: "card__back",
            childs: [
              createElement("div", {
                className: "card__back--p",
                innerText: `You won!`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
