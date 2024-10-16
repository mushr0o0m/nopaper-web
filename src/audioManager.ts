class AudioManager {
    private isPlaying: boolean = false
    private audio: HTMLAudioElement

    constructor() {
        this.audio = new Audio()

        this.audio.addEventListener('pause', () => {
            this.isPlaying = false
        })
        this.audio.addEventListener('ended', () => {
            this.isPlaying = false
        })
    }

    public setNewSrc(src: string) {
        this.audio.src = src
        this.audio.load()
    }

    public play() {
        this.isPlaying = true
        this.audio.play()
    }

    public pause() {
        if (this.isPlaying) {
            this.audio.pause()
        }
    }
}

const audioManager = new AudioManager()
export default audioManager