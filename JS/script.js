const quotesArray = [
  "“Sometimes a hypocrite is nothing more than a man in the process of changing.”",
  "“The most important word a man can say is, ‘I will do better.‘”",
  "“If I should die,” Dalinar said, ‘then I would do so having lived my life right. It is not the destination that matters, but how one arrives there.‘”",
  "“A journey will have pain and failure. It is not only the steps forward that we must accept. It is the stumbles. The trials. The knowledge that we will fail. That we will hurt those around us. But if we stop, if we accept the person we are when we fail, the journey ends. That failure becomes our destination.”",
  "“The more we value things outside our control, the less control we have.”",
  "“When you arise in the morning, think of what a precious privilege it is to be alive – to breathe, to think, to enjoy, to love.”",
  "“Waste no more time arguing about what a good man should be. Be one.”",
  "“I cannot escape death, but at least I can escape the fear of it.”",
  "“We suffer more often in imagination than in reality.”",
  "“While we wait for life, life passes.”",
  "“Life is long, if you know how to use it.”",
  "“Hurry up and live.”",
  "“Cease to hope and you will cease to fear.”",
  "“Life, if well lived, is long enough.”",
  "“If you want something good, get it yourself.”",
  "“Men are disturbed not by things, but by the view which they take of them.”",
  "“Man conquers the world by conquering himself.”",
  "“God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.”",
  // "“”",
  // "“”",
  // "“”",
  // "“”"
];

const weeksInAYear = 52.1429; // Asumiendo 52 semanas en un año
const totalWeeksIn80Years = 80 * weeksInAYear;

function calculateMementoMori() {
  const birthdateInput = document.getElementById("birthdate");
  const resultElement = document.getElementById("result");
  const quoteElement = document.getElementById("quote-txt");
  const calculatorBody = document.getElementById("calculator");
  const pdfButton = document.getElementById("pdfButton");
  const body = document.querySelector("body");
  const link = document.getElementById("link");

  const birthdate = new Date(birthdateInput.value);
  const currentDate = new Date();

  const ageInMilliseconds = currentDate - birthdate;
  const ageInSeconds = ageInMilliseconds / 1000;

  const secondsInAMinute = 60;
  const minutesInAnHour = 60;
  const hoursInADay = 24;
  const daysInAWeek = 7;

  const secondsInAWeek = secondsInAMinute * minutesInAnHour * hoursInADay * daysInAWeek;
  const secondsInAYear = secondsInAWeek * weeksInAYear;

  const ageInWeeks = ageInSeconds / secondsInAWeek;

  const mementoMoriMessage = `Recuerda que has vivido aproximadamente ${ageInWeeks.toFixed(2)} semanas. Memento Mori.`;

  //resultElement.innerText = mementoMoriMessage;

  console.log(mementoMoriMessage);
  quoteElement.innerText = writeQuote();
  // Dibuja los cuadrados en filas
  drawSquares(ageInWeeks, totalWeeksIn80Years, weeksInAYear);
  // drawNumberColumn();

  calculatorBody.classList.add("none");

  
  // Habilita el boton de PDF
  pdfButton.disabled = false;
  body.classList.remove('centered');
  link.style.display = "inline-block";
}

function drawSquares(weeksLived, totalWeeks, weeksInAYear) {
  const squaresContainer = document.getElementById("squares-container");
  squaresContainer.innerHTML = ""; // Limpiar el contenedor

  const totalRows = Math.ceil(totalWeeks / weeksInAYear);
  let livedSquares = Math.floor(weeksLived);
  let squareCounter = 0; // Variable para contar los cuadrados
  let rowCount = 0; // Variable para contar las filas

  for (let i = 0; i < totalRows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < weeksInAYear; j++) {
      const square = document.createElement("div");

      if (livedSquares > 0) {
        square.classList.add("black-square");
        livedSquares--;
        squareCounter++;
        row.appendChild(square);
      } else {
        square.classList.add("white-square");
        row.appendChild(square);
      }
    }

    squaresContainer.appendChild(row);

    // Verificar si es la quinta fila y agregar la etiqueta label
    if (++rowCount % 5 === 0) {
      const label = document.createElement("label");
      label.classList.add("label-row")
      label.textContent = `${rowCount}`;
      row.appendChild(label);
    }
  }
}

function drawNumberColumn() {
  const numberColumn = document.getElementById("number-column");
  numberColumn.innerHTML = ""; // Limpiar la columna numerada

  for (let i = 1; i <= 80; i++) {
    const numberItem = document.createElement("div");
    numberItem.classList.add("number-item");
    if (i == 1 || i % 5 === 0) {
      numberItem.textContent = i;
      numberColumn.appendChild(numberItem);
    } else {
      numberItem.textContent = '';
      numberColumn.appendChild(numberItem);
    }
  }
}

function writeQuote() {
  const option = document.getElementsByName("quote-rta");
  const txtOption = document.getElementById("textoInput").value;
  for (const options of option) {
    if (options.checked) {
      switch (options.value) {
        case "yes":
          return obtenerElementoAleatorio();
        case "no":
          return '';
        case "custom":
          return `“${txtOption}”`;
        default:
          return '';
      }
    }
  }
}

function obtenerElementoAleatorio() {
  // Genera un número decimal aleatorio entre 0 y 1
  const numeroDecimal = Math.random();

  // Escala y redondea el número para obtener un índice aleatorio
  const indiceAleatorio = Math.floor(numeroDecimal * quotesArray.length);

  // Retorna el elemento del array usando el índice aleatorio
  return quotesArray[indiceAleatorio];
}

function goHome() {

  window.location.href ="https://30matias30.github.io/Memento-Mori/";

}

function display() {
  let labels = document.getElementsByName("quote-rta");

  labels.forEach(label => {
    if (label.checked && label.value === "custom") {
      const textoInput = document.getElementById("textoInput");
      textoInput.style.display = "inline-block";
    } else {
      const textoInput = document.getElementById("textoInput");
      textoInput.style.display = "none";
    }
  });
}

function handleEnterKey(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evitar la acción predeterminada del Enter
    calculateMementoMori();
  }
}

