// static/js/model.js

let mediaRecorder;
let audioChunks = [];
let isRecording = false;

// Get references to the buttons and elements
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const transcriptEl = document.getElementById("transcript");
const responseTextEl = document.getElementById("response-text");
const responseAudioEl = document.getElementById("response-audio");

const recordButton = document.getElementById('record-btn');
const queryInput = document.getElementById('query-input');

recordButton.addEventListener('click', async () => {
    if (!isRecording) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            
            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                const formData = new FormData();
                formData.append('audio_data', audioBlob);

                try {
                    const response = await fetch('/process_audio', {
                        method: 'POST',
                        body: formData
                    });

                    const data = await response.json();
                    document.getElementById('transcript').textContent = data.transcript;
                    document.getElementById('response-text').textContent = data.response_text;
                    
                    const audio = document.getElementById('response-audio');
                    audio.src = data.audio_url;
                    audio.play();
                } catch (error) {
                    console.error('Error processing audio:', error);
                }

                audioChunks = [];
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
            isRecording = true;
            recordButton.classList.add('recording');
            recordButton.innerHTML = '<span class="mic-icon">⏺</span>';
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    } else {
        mediaRecorder.stop();
        isRecording = false;
        recordButton.classList.remove('recording');
        recordButton.innerHTML = '<span class="mic-icon">🎤</span>';
    }
});

function sendAudio(audioBlob) {
    const formData = new FormData();
    formData.append('audio_data', audioBlob, 'recording.wav');
    
    fetch('/process_audio', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        transcriptEl.textContent = data.transcript;
        responseTextEl.textContent = data.response_text;
        responseAudioEl.src = data.audio_url;
        // Optionally, auto-play the TTS audio:
        responseAudioEl.play();
    })
    .catch(error => console.error('Error processing audio:', error));
}
