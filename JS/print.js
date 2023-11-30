function generatePDF() {
  // Obtén los elementos que quieres convertir a PDF
  const h1Element = document.getElementById('h1Element');
  const bodyElement = document.getElementById('squares-container');
  const quoteElement = document.getElementById('quote-txt');

  // Establece el alto del contenedor para que sea lo suficientemente grande
  const containerHeight = 1500; // Ajusta este valor según sea necesario

  // Combina los elementos en un nuevo contenedor para mantener su formato
  const container = document.createElement('div');
  container.style.height = `${containerHeight}px`; // Ajusta la altura
  container.style.marginTop = '0px'; // Ajusta la distancia desde la parte superior
  container.style.display = 'flex'; // Centra el contenido
  container.style.flexFlow = 'column';
  container.style.alignItems = 'center';

  container.appendChild(h1Element.cloneNode(true));
  container.appendChild(bodyElement.cloneNode(true));
  container.appendChild(quoteElement.cloneNode(true));

  // Opciones para la generación del PDF
  const options = {
    margin: 10,
    filename: 'Memento Mori.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  // Utiliza html2pdf para generar el PDF
  html2pdf(container, options);
}

