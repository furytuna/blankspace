class Login {
  static getLocalData() {
    let profile = this.getLocalProfile()
    let monster = this.getLocalMonster()
    let currentScene = this.getLocalCurrentScene()
    let music_player = this.getLocalMusicPlayer()
    return {
      profile: profile,
      monster: monster,
      currentScene: currentScene,
      music_player: music_player
    }
  }

  static getLocalProfile() {
    let profile = localStorage.getItem('profile')
    if (profile) {
      return JSON.parse(profile)
    }

    return {}
  }

  static getLocalMonster() {
    let monster = localStorage.getItem('monster')
    if (monster) {
      return JSON.parse(monster)
    }

    return null
  }

  static getLocalCurrentScene() {
    let currentScene = localStorage.getItem('currentScene')
    if (currentScene) {
      return currentScene
    }
    return ''
  }

  static getLocalMusicPlayer() {
    let music_player = localStorage.getItem('music_player')
    if (music_player) {
      return music_player
    }

    return 'PLAY'
  }

  static isLoggedIn() {
    let localData = this.getLocalData()
    if (typeof localData.profile.uid !== undefined && localData.profile.uid)
      return true
    else
      return false
  }
}

export default Login
