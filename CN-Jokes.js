const newJoke = document.querySelector('.joke');
const jokebtn = document.querySelector('.btn');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        newJoke.innerHTML = JSON.parse(this.responseText).value;
      } else {
        newJoke.innerHTML = 'went wrong';
      }
    }
  };
  xhr.send();
};

jokebtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);