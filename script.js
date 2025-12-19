const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonExit = document.querySelector('.button-exit');

buttonAuth.addEventListener('click', () => {
    modalAuth.classList.add('open');
});

logInForm.addEventListener('submit', logIn);

function logIn(event) {
    event.preventDefault();

    const login = loginInput.value;
    localStorage.setItem('user', login);

    userName.textContent = login;
    userName.style.display = 'inline';

    buttonAuth.style.display = 'none';
    buttonExit.style.display = 'inline';

    modalAuth.classList.remove('open');
    logInForm.reset();
}

buttonExit.addEventListener('click', () => {
    localStorage.removeItem('user');

    userName.textContent = '';
    buttonAuth.style.display = 'inline';
    buttonExit.style.display = 'none';
});

const savedUser = localStorage.getItem('user');

if (savedUser) {
    userName.textContent = savedUser;
    userName.style.display = 'inline';
    buttonAuth.style.display = 'none';
    buttonExit.style.display = 'inline';
}
