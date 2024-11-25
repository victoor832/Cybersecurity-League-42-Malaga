const logEntries = [
    "[2024-11-25 12:30:02] Usuario: Ana - IP: 192.168.1.10 - Acceso a: /dashboard",
    "[2024-11-25 12:35:15] Usuario: Jorge - IP: 172.16.254.1 - Acceso a: /admin/login",
    "[2024-11-25 12:35:30] Usuario: Jorge - IP: 172.16.254.1 - Acceso fallido a: /admin/panel",
    "[2024-11-25 12:36:05] Usuario: Bernardo - IP: 192.168.1.12 - Acceso a: /settings",
    "[2024-11-25 12:40:02] Usuario: Ana - IP: 192.168.1.10 - Acceso a: /profile"
];

const logElement = document.getElementById('log');
const resultElement = document.getElementById('result');
const answerInput = document.getElementById('answer');

function typeWriter(text, element, index = 0) {
    return new Promise(resolve => {
        if (index < text.length) {
            element.textContent = text.substring(0, index + 1) + '_';
            setTimeout(() => resolve(typeWriter(text, element, index + 1)), 50);
        } else {
            element.textContent = text + '\n_';
            resolve(true);
        }
    });
}

function displayLogs() {
    let fullText = logEntries.join('\n');
    logElement.textContent = fullText;
}

function checkAnswer() {
    const answer = answerInput.value.trim().toLowerCase();
    resultElement.style.display = 'block';

    if (answer === "intruso") {
        resultElement.textContent = "¡Correcto! El usuario 'Intruso' intentó acceder a áreas restringidas con la IP 172.16.254.1. La flag es 92";
        resultElement.style.color = '#00ff00';
    } else {
        resultElement.textContent = "Respuesta incorrecta. Revisa los registros nuevamente.";
        resultElement.style.color = '#ff0000';
    }
}

answerInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

document.addEventListener('DOMContentLoaded', displayLogs);
