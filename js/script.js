
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.acordeon-header').forEach(button => {
        button.addEventListener('click', () => {
            const acordeonItem = button.parentElement;
            
            // Cierra todos los demás items
            document.querySelectorAll('.acordeon-item').forEach(item => {
                if (item !== acordeonItem) {
                    item.classList.remove('activo');
                }
            });
            
            // Toggle del item actual
            acordeonItem.classList.toggle('activo');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const chaplin = document.getElementById('chaplin');
    const speechBubble = document.getElementById('speech-bubble');
    const speechText = document.getElementById('speech-text');

    let voices = [];

    function getVoices() {
        voices = speechSynthesis.getVoices();
        console.log(voices);
    }

    speechSynthesis.onvoiceschanged = getVoices;
    getVoices();

    chaplin.addEventListener('click', () => {
        speechBubble.style.display = 'block';
        speakText(speechText.textContent);
    });

function speakText(text) {
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'es-ES';
        speech.voice = voices.find(voice => voice.name === 'Google español'); // Ajusta el nombre de la voz aquí
        window.speechSynthesis.speak(speech);
    } else {
        alert('Lo siento, tu navegador no soporta la síntesis de voz.');
    }
}

});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var role = document.getElementById('role').value;

    if (name === '' || email === '' || role === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('Formulario enviado correctamente.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const chaplin = document.getElementById('chaplin');
    const speechBubble = document.getElementById('speech-bubble');
    const speechText = document.getElementById('speech-text');

    let voices = [];

    function getVoices() {
        voices = speechSynthesis.getVoices();
        console.log(voices);
    }

    speechSynthesis.onvoiceschanged = getVoices;
    getVoices();

    chaplin.addEventListener('click', () => {
        speechBubble.style.display = 'block';
        speakText(speechText.textContent);
    });

    function speakText(text) {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'es-ES';
            speech.voice = voices.find(voice => voice.name === 'Google español'); // Ajusta el nombre de la voz aquí
            window.speechSynthesis.speak(speech);
        } else {
            alert('Lo siento, tu navegador no soporta la síntesis de voz.');
        }
    }
})
