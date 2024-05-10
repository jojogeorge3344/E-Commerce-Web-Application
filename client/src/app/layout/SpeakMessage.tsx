// Define a global variable to track speech status
let isSpeechEnabled = true;

// Define the SpeechSynthesisUtterance type
declare global {
  interface SpeechSynthesisUtterance {
    lang: string;
    onboundary: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onend: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onerror: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisErrorEvent) => any) | null;
    onmark: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onpause: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onresume: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onstart: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    pitch: number;
    rate: number;
    text: string;
    voice: SpeechSynthesisVoice | null;
    volume: number;
  }
}
// TO DO have to add a toggle button in header for disable and enable all speak ability
// Define a function to speak a message
export const speakMessage = (message: string): void => {
  try {
    // Check if speech is enabled
    if (!isSpeechEnabled) return;

    // Create a new instance of SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(message);
    
    // Speak the message
    speechSynthesis.speak(utterance);
  } catch (error) {
    console.error('Error speaking message:', error);
  }
};

// Function to enable or disable speech
export const toggleSpeech = (enabled: boolean): void => {
  isSpeechEnabled = enabled;
};
