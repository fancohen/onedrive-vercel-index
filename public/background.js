const imageUrl = 'https://qn-n4-lz02.obs.cn-north-4.myhuaweicloud.com/meiyan-common-img/photo/6715899a68eee8m1koz07n6918.jpg';
const styleElement = document.createElement('style');
styleElement.innerHTML = `
  body {
    background-image: url(${imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
document.head.appendChild(styleElement);
