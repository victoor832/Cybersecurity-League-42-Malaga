document.addEventListener('DOMContentLoaded', () => {
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submitButton');
    const resultDiv = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');
    const encryptedMessage = document.getElementById('encryptedMessage');
  
    submitButton.addEventListener('click', checkAnswer);
    answerInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        checkAnswer();
      }
    });
  
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(encryptedMessage.textContent)
        .then(() => {
          copyButton.textContent = 'Copiado!';
          setTimeout(() => {
            copyButton.textContent = 'Copiar';
          }, 2000);
        })
        .catch(err => {
          console.error('Error al copiar: ', err);
        });
    });
  
    function checkAnswer() {
      const answer = answerInput.value.trim().toLowerCase();
  
      if (answer.toLowerCase() === "sierra nevada") {
        resultDiv.textContent = "¡Correcto! Has encontrado el tesoro en Sierra Nevada. Tu flag es: 48";
        resultDiv.className = "result correct";
      } else {
        resultDiv.textContent = "Respuesta incorrecta. Intenta nuevamente.";
        resultDiv.className = "result incorrect";
      }
  
      answerInput.value = '';
    }
  });

// Changed the validation for all cases


  
  