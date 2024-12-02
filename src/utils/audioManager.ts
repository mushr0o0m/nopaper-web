class AudioManager {
  private isPlaying: boolean = false
  private audio: HTMLAudioElement
  private playPromise: Promise<void>
  private loadPromise: Promise<any>

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
        setTimeout(() => rej('Failed to load'), 30_000)

        const listener = () => {
          res(true)
          this.audio.removeEventListener('loadeddata', listener)
        }

        this.audio.addEventListener('loadeddata', listener)
      })
    })
  }

  public async setNewSrc(src: string) {
    await this.loadPromise
    this.pause()

    if (this.playPromise !== undefined) {
      this.playPromise
        .then((_) => {
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
        this.playPromise
          .then((_) => {
            this.audio.pause()
          })
          .catch(() => {})
      }
    }
  }
}

const audioManager = new AudioManager()
export default audioManager
