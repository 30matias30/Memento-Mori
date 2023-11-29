const weeksInAYear = 52;  // Asumiendo 52 semanas en un año
const totalWeeksIn80Years = 80 * weeksInAYear;

function calculateMementoMori() {
  const birthdateInput = document.getElementById("birthdate");
  const resultElement = document.getElementById("result");

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

  resultElement.innerText = mementoMoriMessage;

  // Dibuja los cuadrados en filas
  drawSquares(ageInWeeks, totalWeeksIn80Years, weeksInAYear);
  drawNumberColumn();
  
}

function drawSquares(weeksLived, totalWeeks, weeksInAYear) {
    const squaresContainer = document.getElementById("squares-container");
    squaresContainer.innerHTML = ""; // Limpiar el contenedor
  
    const totalRows = Math.ceil(totalWeeks / weeksInAYear);
    let livedSquares = Math.floor(weeksLived);
    let remainingPartWeeks = weeksLived - livedSquares;
  
    for (let i = 0; i < totalRows; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
  
      for (let j = 0; j < weeksInAYear; j++) {
        const square = document.createElement("div");
  
        if (livedSquares > 0) {
          square.classList.add("black-square");
          livedSquares--;
        } else {
          square.classList.add("white-square");
        }
  
        row.appendChild(square);
      }
  
      squaresContainer.appendChild(row);
    }
  
    // if (remainingPartWeeks > 0) {
    //   const partialSquare = document.createElement("div");
    //   partialSquare.classList.add("partial-black-square");
    //   partialSquare.style.width = `${remainingPartWeeks * (100 / weeksInAYear)}%`;
    //   squaresContainer.lastChild.appendChild(partialSquare);
    // }
  }
  
  function drawNumberColumn() {
    const numberColumn = document.getElementById("number-column");
    numberColumn.innerHTML = ""; // Limpiar la columna numerada
  
    for (let i = 1; i <= 80; i++) {
      const numberItem = document.createElement("div");
      numberItem.classList.add("number-item");
        if(i == 1 || i % 5 == 0) {
            numberItem.textContent = i;
            numberColumn.appendChild(numberItem);
        } else {
            numberItem.textContent = '';
            numberColumn.appendChild(numberItem);
        }
    }
  }

