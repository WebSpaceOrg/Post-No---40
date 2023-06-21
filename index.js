// Check if the browser supports speech synthesis
if ('speechSynthesis' in window) {
    const speakButton = document.getElementById('speak-btn');
    const textToSpeak = document.getElementById('text-to-speak');
    
    // Load available voices
    let voices = [];
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices();
      // Display voices
      for (let i = 0; i < voices.length; i++) {
        console.log(voices[i].name); // Print voice names to the console
      }
    };
  
    speakButton.addEventListener('click', () => {
      const speechText = new SpeechSynthesisUtterance(textToSpeak.value);
      
      // Select a desired voice (replace with the desired voice name)
      const desiredVoice = 'Google US English';
      const voice = voices.find(v => v.name === desiredVoice);
      if (voice) {
        speechText.voice = voice;
      } else {
        console.log('Desired voice not found.');
      }
      
      speechSynthesis.speak(speechText);
    });
  } else {
    // Speech synthesis not supported
    console.log('Speech synthesis is not supported in this browser.');
  }
  