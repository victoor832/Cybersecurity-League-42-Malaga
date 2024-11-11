document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('codeInput');
    const submitButton = document.getElementById('submitButton');
    const codeForm = document.getElementById('codeForm');
    const celebration = document.getElementById('celebration');

    // El código correcto - puedes cambiarlo por el que necesites
    const CODIGO_CORRECTO = "10-38-02-42";

    function formatCode(code) {
        code = code.replace(/[^0-9-]/g, '');
        code = code.split('-').map(part => {
            if (part.length > 2) {
                return part.slice(0, 2) + '-' + part.slice(2);
            }
            return part;
        }).join('-');
        return code.replace(/-$/, '').slice(0, 11);
    }

    function isValidFormat(code) {
        return /^(\d{2}-){3}\d{2}$/.test(code);
    }

    function isCorrectCode(code) {
        return code === CODIGO_CORRECTO;
    }

    codeInput.addEventListener('input', (e) => {
        const formattedCode = formatCode(e.target.value);
        e.target.value = formattedCode;
        submitButton.disabled = !isValidFormat(formattedCode);
    });

    codeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const code = codeInput.value;
        
        if (isValidFormat(code)) {
            if (isCorrectCode(code)) {
                window.location.href = 'https://cybersecurity-league-42-malaga-andh.vercel.app/';
            } else {
                alert('¡Código incorrecto! Por favor, intenta de nuevo.');
            }
        }
    });
});