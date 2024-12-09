class AudioManager {
  private isPlaying: boolean = false
  private audio: HTMLAudioElement
  private loadPromise: Promise<boolean>

  constructor() {
    this.audio = new Audio()
    this.audio.preload = 'auto'

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false
    })
    this.audio.addEventListener('ended', () => {
      this.isPlaying = false
    })

    this.audio.addEventListener('loadstart', () => {
      this.loadPromise = new Promise((res, rej) => {
        setTimeout(() => rej('Failed to load'), 5_000)
        const listener = () => {
          res(true)
          this.audio.removeEventListener('progress', listener)
        }
        this.audio.addEventListener('progress', listener)
      })
    })
  }
  
  public async setNewSrc(src: string) {
    await this.pause()
    this.audio.src = src
    this.audio.load()
  }

  public async play() {
    await this.loadPromise
    this.isPlaying = true
    this.audio.play()
  
    return new Promise((res) => {
      const onEnded = () => {
        this.audio.removeEventListener('ended', onEnded)
        res(true)
      };
  
      this.audio.addEventListener('ended', onEnded)
    })
  }

  public async pause() {
    if (this.isPlaying) {
      await this.loadPromise
      this.audio.pause()
    }
  }
}

const audioManager = new AudioManager()
export default audioManager