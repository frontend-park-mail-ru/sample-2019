const title = document.getElementsByTagName('h1')[0];
const button = document.getElementById('button');

button.addEventListener('click', () => {
  title.innerText = 'goodbye';

  setTimeout(() => {
    location.href = '/about/';
  }, 1000);
});

button.addEventListener('mouseover', (event) => {
  button.style.left = event.target.offsetLeft + 100 + 'px';
});