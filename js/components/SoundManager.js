// js/components/SoundManager.js
export const SoundManager = {
    audioContext: null,
    sounds: {
        correct: null,
        wrong: null,
        fanfare: null,
        click: null
    },
    isMuted: false,

    init() {
        // Will initialize on first interaction to comply with browser autoplay policies
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioContext = new AudioContext();
                this.synthesizeSounds();
            }
        } catch (e) {
            console.warn("Web Audio API not supported", e);
        }
    },

    synthesizeSounds() {
        if (!this.audioContext) return;

        // Correct ('ting')
        let actx = this.audioContext;
        this.sounds.correct = () => {
            if (this.isMuted) return;
            this._resumeContext();
            let osc = actx.createOscillator();
            let gain = actx.createGain();
            osc.connect(gain);
            gain.connect(actx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, actx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1200, actx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.5, actx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.5);
            osc.start(actx.currentTime);
            osc.stop(actx.currentTime + 0.5);
        };

        // Wrong ('buzzer')
        this.sounds.wrong = () => {
            if (this.isMuted) return;
            this._resumeContext();
            let osc = actx.createOscillator();
            let gain = actx.createGain();
            osc.connect(gain);
            gain.connect(actx.destination);
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, actx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(100, actx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.5, actx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.3);
            osc.start(actx.currentTime);
            osc.stop(actx.currentTime + 0.3);
        };

        // Fanfare
        this.sounds.fanfare = () => {
            if (this.isMuted) return;
            this._resumeContext();
            let osc = actx.createOscillator();
            let gain = actx.createGain();
            osc.connect(gain);
            gain.connect(actx.destination);
            osc.type = 'square';

            // C E G C sequence
            const notes = [523.25, 659.25, 783.99, 1046.50];
            let startTime = actx.currentTime;

            notes.forEach((freq, idx) => {
                osc.frequency.setValueAtTime(freq, startTime + idx * 0.15);
            });

            gain.gain.setValueAtTime(0, actx.currentTime);
            gain.gain.linearRampToValueAtTime(0.3, actx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.3, actx.currentTime + 0.45);
            gain.gain.linearRampToValueAtTime(0, actx.currentTime + 0.7);

            osc.start(actx.currentTime);
            osc.stop(actx.currentTime + 0.8);
        };

        // Click
        this.sounds.click = () => {
            if (this.isMuted) return;
            this._resumeContext();
            let osc = actx.createOscillator();
            let gain = actx.createGain();
            osc.connect(gain);
            gain.connect(actx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, actx.currentTime);
            gain.gain.setValueAtTime(0.1, actx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.1);
            osc.start(actx.currentTime);
            osc.stop(actx.currentTime + 0.1);
        };
    },

    _resumeContext() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    },

    play(soundName) {
        if (!this.audioContext) this.init();
        if (this.sounds[soundName]) {
            try {
                this.sounds[soundName]();
            } catch (e) { console.warn("Audio play failed", e); }
        }
    },

    playCorrect() { this.play('correct'); },
    playWrong() { this.play('wrong'); },
    playFanfare() { this.play('fanfare'); window.celebrate && window.celebrate(); },
    playClick() { this.play('click'); },

    toggleMute() {
        this.isMuted = !this.isMuted;
        return this.isMuted;
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.SoundManager = SoundManager;
    document.addEventListener('click', () => {
        if (!SoundManager.audioContext) SoundManager.init();
        SoundManager._resumeContext();
    }, { once: true });
}
