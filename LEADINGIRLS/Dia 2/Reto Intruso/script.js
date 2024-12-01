const logEntries = [
    "[2024-11-25 08:15:02] Usuario: Ana - IP: 192.168.1.10 - Acceso a: /dashboard",
    "[2024-11-25 08:20:15] Usuario: Jorge - IP: 172.16.254.1 - Acceso a: /admin/login",
    "[2024-11-25 09:35:50] Usuario: Bernardo - IP: 192.168.1.12 - Acceso a: /settings",
    "[2024-11-26 02:12:05] Usuario: Francisco - IP: 202.0.107.44 - Acceso fallido a: /admin/login",
    "[2024-11-26 02:14:20] Usuario: Alberto - IP: 203.0.113.45 - Acceso fallido a: /admin/login",
    "[2024-11-26 02:20:01] Usuario: Carlos - IP: 201.0.103.31 - Acceso a: /admin/panel",
    "[2024-11-26 02:22:50] Usuario: Carlos - IP: 201.0.103.31 - Exportación desde: /admin/logs",
    "[2024-11-26 09:10:02] Usuario: Lucía - IP: 192.168.1.34 - Acceso a: /dashboard",
    "[2024-11-27 10:24:30] Usuario: Daniel - IP: 172.16.223.1 - Acceso a: /user/documents"
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

    if (answer === "201.0.103.31") {
        resultElement.textContent = "¡Correcto! El ciberdelincuente exportó logs desde áreas restringidas con la IP 201.0.103.31. La flag es 92";
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
