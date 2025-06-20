This is a Flask-based conversational web app where users can record voice input, which is then:

🎤 Transcribed using Google Speech Recognition

🤖 Sent to Google Gemini API for generating a text response

🔊 Converted to speech output (MP3) using Google Cloud TTS or gTTS

📽️ Played back with a demo talking video loop (pre-rendered or real-time with Wav2Lip)

✨ Features
🌐 Web interface built with Flask and HTML templates

🎧 Converts WebM audio to WAV using ffmpeg for speech-to-text

🧠 Uses Gemini API (Google Generative AI) to generate smart, concise replies

🔊 Converts response to audio using Google Cloud TTS or gTTS (fallback)

🧪 Plays back voice with a demo video, simulating real-time speaking

🗂️ Maintains conversation session history

🔁 Wav2Lip-based lip-synced video generation (optional, demo available)

🔑 Environment Variables
Create a .env file or set these in your shell:

bash
Copy
Edit
GOOGLE_API_KEY=your-gemini-api-key
FLASK_SECRET=your-flask-secret-key
✅ GOOGLE_API_KEY is required for Gemini API integration.

🔧 Installation & Setup
Clone the repository:
Install dependencies:

bash
Copy
Edit
pip install -r requirements.txt
Run the app:

bash
Copy
Edit
python app.py
Open in your browser: http://localhost:5000

🧠 Gemini API Integration
The app sends user transcriptions as prompts to Gemini 2.0 Flash model using your Google API key. Responses are kept short (20 words max) as defined by a system message prompt.

🗣️ Text-to-Speech
The assistant voice is generated using:

✅ Google Cloud TTS (if available)

🔁 Fallback to gTTS (lightweight, no authentication needed)

📽️ Wav2Lip (Optional: Real-Time Talking Video)
You can use Wav2Lip to generate lip-synced video responses.

Wav2Lip requires ~4GB of space

It uses files like hparams.py, inference.py, and a pre-trained model

You'll need to set up the environment according to your Python version and install dependencies like torch, opencv, etc.

All necessary files (sample outputs and setup instructions) are provided in the repository

📁 Attached with the project:

Sample output videos generated using Wav2Lip

Images/screenshots of the UI and responses

Pre-rendered demo video for fallback video playback

📦 requirements.txt
txt
Copy
Edit
Flask
speechrecognition
gtts
google-cloud-texttospeech
requests
ffmpeg-python
📸 Demo Screenshots
(Screenshots and sample video files are included in the repository)

📚 Credits
Google Gemini API

Google Cloud Text-to-Speech

gTTS

Wav2Lip

FFmpeg

📌 Notes
ffmpeg must be installed and accessible via system PATH

You can choose to use either a simple demo video or integrate Wav2Lip for dynamic lip-synced video generation

Make sure to manage API limits and file sizes when deploying publicly
