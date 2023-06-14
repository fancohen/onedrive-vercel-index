const imageUrl = 'https://www.linweifan.com/sail.jpg';
const styleElement = document.createElement('style');
styleElement.innerHTML = `
  body {
    background-image: url(${imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
document.head.appendChild(styleElement);
