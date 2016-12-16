let mainElement;

const draw = (page) => {
  if (!mainElement) {
    mainElement = document.getElementById('main');
  }

  mainElement.innerHTML = '';
  mainElement.appendChild(page);
};

export default draw;
