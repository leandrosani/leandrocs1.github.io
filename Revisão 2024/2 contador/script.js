const number = document.querySelector('.number');
const buttons = document.querySelectorAll('.btn');

let cont = 0;

function updateNumber() {
  number.innerHTML = cont;
  if (cont > 0) {
    number.style.color = 'green';
  } else if (cont < 0) {
    number.style.color = 'red';
  } else {
    number.style.color = 'black';
  }
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) {
      cont--;
    } else if (index === 1) {
      cont = 0;
    } else if (index === 2) {
      cont++;
    }
    updateNumber();
  });
});

updateNumber();