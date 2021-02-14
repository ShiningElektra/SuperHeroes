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
        className: "card",
        childs: [
          createElement("p", {
            innerText: "Power Battle Game",
          }),
          createElement("h2", {
            className: "card__heroname",
            innerText: name,
          }),
          createElement("img", {
            className: "card__pic",
            alt: "",
            src: image.url,
          }),
          createElement("div", {
            className: "card__info",
            innerText: "Power",
          }),
          createElement("div", {
            className: "card__info",
            innerText: powerstats.power,
          }),
          createElement("div", {
            className: "card__info",
            innerText: biography.publisher,
          }),
        ],
      }),
    ],
  });
}
