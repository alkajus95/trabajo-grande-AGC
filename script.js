const loginBtn = document.getElementById('login-btn');
const loginSection = document.getElementById('login-section');
const calculatorSection = document.getElementById('calculator-section');
const gridSection = document.getElementById('grid-section');
const registerLink = document.getElementById('register-link');
const registerSection = document.getElementById('register-section');
const registerBtn = document.getElementById('register-btn');
const loginLinkRegister = document.getElementById('login-link');

// Credenciales de usuario predefinidas (solo para demostración)
const usuarios = {
    "usuario1": "contraseña1",
    "usuario2": "contraseña2"
};

loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (usuarios[username] && usuarios[username] === password) {
        loginSection.style.display = 'none';
        calculatorSection.style.display = 'block';
        gridSection.style.display = 'block';
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
});

loginLinkRegister.addEventListener('click', (e) => {
    e.preventDefault();
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});

registerBtn.addEventListener('click', () => {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        usuarios[newUsername] = newPassword;
        alert("Cuenta creada con éxito.");
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    } else {
        alert("Por favor, ingresa usuario y contraseña.");
    }
});

// Calculadora
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calculator-buttons button');

let currentInput = '';
let firstOperand = null;
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            currentInput = '';
            firstOperand = null;
            operator = null;
            display.value = '';
        } else if (value === '=') {
            if (firstOperand !== null && operator !== null) {
                const secondOperand = parseFloat(currentInput);
                let result;

                switch (operator) {
                    case '+': result = firstOperand + secondOperand; break;
                    case '-': result = firstOperand - secondOperand; break;
                    case '*': result = firstOperand * secondOperand; break;
                    case '/': result = firstOperand / secondOperand; break;
                }

                display.value = result;
                currentInput = result.toString();
                firstOperand = null;
                operator = null;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            }
            operator = value;
            currentInput = '';
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Contenido dinámico
const gridContainer = document.querySelector('.grid-container');

function agregarElemento(contenido) {
    const item = document.createElement('div');
    item.textContent = contenido;
    gridContainer.appendChild(item);
}

// Ejemplo de uso del contenido dinámico
agregarElemento('¡Hola, mundo!');
agregarElemento('Este es un ejemplo de contenido dinámico.');
agregarElemento('Puedes agregar más contenido aquí.');