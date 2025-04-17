
// pinta y numero
let suits = ["♠", "♥", "♣", "♦"];
let cardValues = [
 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
];

// generador aleatorio de cartas

function getRandomCard() {
    let suit = suits[Math.floor(Math.random() * suits.length)];
    let value = cardValues[Math.floor(Math.random() * cardValues.length)];
    return { suit: suit, value: value };
  }

// Asignar valores numéricos para ordenamiento donde card es un objeto con propiedades suit y value
function getCardValue(value) {

  if (value === 1) return  "A";
  if (value === 11) return "J";
  if (value === 12) return "Q";
  if (value === 13) return "K";
  return value;
}

// crear elementos de la carta
function createCardElement(card) {
  let cardDiv = document.createElement("div");
  cardDiv.className = "card";

  let top = document.createElement("div");
  top.className = `top ${card.suit === "♦" || card.suit === "♥" ? "red" : "black"}`;
  top.textContent = card.suit;

  let number = document.createElement("div");
  number.className = "number";
  number.textContent = getCardValue(card.value);

  let bottom = document.createElement("div");
  bottom.className = `bottom ${card.suit === "♦" || card.suit === "♥" ? "red" : "black"}`;
  bottom.textContent = card.suit;

  
  cardDiv.appendChild(top);
  cardDiv.appendChild(number);
  cardDiv.appendChild(bottom);

  return cardDiv;
}



let cardArray = [];// Se crea una variable para almacenar las cartas generadas y limpiar el contenedor de cartas antes de pintarlas para añadir las nuevas cartas

function drawCards() {
  let cardLog = document.getElementById("card-container"); // obtener el numero de cartas apartir del input del usuario

  cardLog.innerHTML = ""; // Limpiar el contenedor de cartas
  let count = parseInt(document.getElementById("card-count").value);
  cardArray = []; // Reiniciar el array de cartas

  for (let i = 0; i < count; i++) {
    let card = getRandomCard(); // Generar una carta aleatoria y guardar en la variable card quese es un objeto con propiedades suit y value
    cardArray.push(card); // Guardar la carta en el array
    cardLog.appendChild(createCardElement(card));//crear el elemento de la carta y agregarlo al contenedor
  }
}

document.getElementById("draw-btn").addEventListener("click", drawCards);




const selectSort = (arr) => {
  let cardLog = document.getElementById("card-log"); // obtener el numero de cartas apartir del input del usuario

  cardLog.innerHTML = ""; // Limpiar el contenedor de cartas
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j].value < arr[minIndex].value) {//accedo a la propiedad value de cada objeto para comparar los valores de las cartas
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    let stepDiv = document.createElement("div");
    stepDiv.classList.add("card-container");
    let stepTitle = document.createElement("p");
    stepTitle.textContent = `Paso ${i + 1}`;

    cardLog.appendChild(stepTitle);

    arr.forEach(card => {
      stepDiv.appendChild(createCardElement(card));
    });

    cardLog.appendChild(stepDiv);
  }
    

}

document.getElementById("sort-btn").addEventListener("click", () => selectSort(cardArray));// Llama a la función de ordenamiento al hacer clic en el botón "Ordenar"