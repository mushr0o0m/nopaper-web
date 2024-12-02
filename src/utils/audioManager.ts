class AudioManager {
  private isPlaying: boolean = false
  private audio: HTMLAudioElement
  private playPromise: Promise<void>

  constructor() {
    this.audio = new Audio()
    this.audio.preload = 'auto'

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false
    })
    this.audio.addEventListener('ended', () => {
      this.isPlaying = false
    })
  }

  public setNewSrc(src: string) {
    console.log(this.isPlaying, this.playPromise)
    if (this.playPromise !== undefined) {
      this.playPromise.then(_ => {
        this.audio.src = src
        this.audio.load()
      })
      .catch(() => {})
    } else {
      this.audio.src = src
      this.audio.load()
    }
  }

  public async play() {
    this.isPlaying = true
    await this.audio.play()
  }

  public pause() {
    if (this.isPlaying) {
      if (this.playPromise !== undefined) {
        this.playPromise.then(_ => {
          this.audio.pause();
        })
        .catch(() => {})
      }
    }
  }
}

const audioManager = new AudioManager()
export default audioManager