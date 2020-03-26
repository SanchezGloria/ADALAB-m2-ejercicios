const buttonElement = document.querySelector('.btn');

const handleButtonConsole = event => {
  console.log(event);
};

buttonElement.addEventListener('click', handleButtonConsole);
