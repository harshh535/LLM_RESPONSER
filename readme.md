This is a Flask-based conversational web app where users can record voice input, which is then:

Transcribed using Google Speech Recognition

Sent to Google Gemini API for generating a response

Converted to speech output (MP3) using Google Cloud TTS or gTTS

Played back with a demo talking video loop (via pre-rendered video)


🌐 Web interface using Flask + HTML templates

🎤 Converts WebM audio to WAV using ffmpeg for speech-to-text

🧠 Uses Gemini API (Google Generative AI) for smart replies

🔊 Voice replies with Google TTS or fallback gTTS

🧪 Simple demo with video and voice playback

🎛 Session history (trimmed for performance) 


I am using gemini api key which you need to specify in env also 


# wav2lip can be used for inference for generating relat time video that takes around 4gb of space otherwise there is a simpler model for asynced video playing demo video in behind


I have attached video samples of output by wav2lip .


