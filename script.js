const form = document.querySelector('form');
const resultElement = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const month = parseInt(document.querySelector('#month').value);
    const day = parseInt(document.querySelector('#day').value);
    const year = parseInt(document.querySelector('#year').value);

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    resultElement.textContent = `You are ${age} years old.`;
});