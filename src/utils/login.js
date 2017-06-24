import firebase from 'firebase'

class Login {
  static getLocalData() {
    let profile = this.getLocalProfile()
    let monster = this.getLocalMonster()
    return {
      profile: profile,
      monster: monster
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

  static isLoggedIn() {
    let localData = this.getLocalData()
    if (typeof localData.profile.uid !== undefined && localData.profile.uid)
      return true
    else
      return false
  }
}

export default Login