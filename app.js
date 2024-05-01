document.getElementById('startBtn').addEventListener('click', function() {
    startRecognition();
});

document.getElementById('stopBtn').addEventListener('click', function() {
    recognition.stop();
});

var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function(event) {
    var speechResult = event.results[0][0].transcript;
    document.getElementById('transcript').value = speechResult;
};

recognition.onstart = function() {
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
};

recognition.onend = function() {
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
};

function startRecognition() {
    document.getElementById('transcript').value = '';  // Clear previous text
    recognition.start();
}
