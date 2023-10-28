import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  private synthesis: SpeechSynthesis;
  private availableVoiceNames: string[] = [];
  private desiredVoiceName = 'Microsoft Zira - English (United States)';
  private desiredVoice: SpeechSynthesisVoice | undefined;

  constructor() {
    this.synthesis = window.speechSynthesis;
    this.initialize();
    this.requestPermission(); // Request permission upon initialization
  }

  private initialize() {
    if (this.isSupported() && this.synthesis.onvoiceschanged !== undefined) {
      this.synthesis.onvoiceschanged = () => {
        this.synthesis.onvoiceschanged = null; // Reset event
        this.updateAvailableVoiceNames();
        this.setDesiredVoice();
      };
    }
  }

  isSupported(): boolean {
    return !!this.synthesis;
  }

  private updateAvailableVoiceNames() {
    const voices = this.synthesis.getVoices();
    this.availableVoiceNames = voices.map(voice => voice.name);
    console.log(`Available voice names: ${this.availableVoiceNames.join(', ')}`);
  }

  private setDesiredVoice() {
    if (this.availableVoiceNames.includes(this.desiredVoiceName)) {
      this.desiredVoice = this.synthesis.getVoices().find(voice => voice.name === this.desiredVoiceName);
    } else {
      console.error('Desired voice not found in available voices.');
    }
  }

  // Check if permission is granted for speech synthesis
  isPermissionGranted(): boolean {
    return this.synthesis.speaking || this.synthesis.pending;
  }

  // Request permission for speech synthesis
  requestPermission(): void {
    if (!this.isPermissionGranted()) {
      // Create an utterance and speak an empty message to trigger the permission request
      const utterance =  new SpeechSynthesisUtterance('');
      this.synthesis.speak(utterance);
    }
  }

  speak(text: string): Observable<void> {
    return new Observable((observer: Observer<void>) => {
      if (!this.synthesis) {
        observer.error('Text-to-speech is not supported in this browser.');
        return;
      }

      // Ensure the speech synthesis API is initialized
      if (this.synthesis.getVoices().length === 0) {
        // If voices are not available, wait and retry
        const retryInterval = setInterval(() => {
          if (this.synthesis.getVoices().length > 0) {
            clearInterval(retryInterval);
            this.speakInternal(text, observer);
          }
        }, 1000); // Retry every 1 second (adjust as needed)
      } else {
        //this.speakInternal(text, observer);
      }
    });
  }

  speakWelcomeMessage(): Observable<void> {
    if (!this.isPermissionGranted()) {
      this.requestPermission(); // Request permission before speaking the welcome message
    }

    const welcomeMessage = "Hey Welcome.  You have the option to access the system either by entering your username and password or by using your ID ";
  
    return this.speak(welcomeMessage);
  }

  private speakInternal(text: string, observer: Observer<void>) {
    const utterance = new SpeechSynthesisUtterance();

    if (this.desiredVoice) {
      utterance.voice = this.desiredVoice;
    }
    utterance.text = text;

    utterance.onend = () => {
      observer.next();
      observer.complete();
    };

    utterance.onerror = (error: SpeechSynthesisErrorEvent) => {
      observer.error(error);

      if (error.error === 'not-allowed') {
        console.log('User did not grant permission for speech synthesis.');
      }
    };

    this.synthesis.speak(utterance);
  }
}
