class Login {
  static getLocalData() {
    let profile = this.getLocalProfile()
    return {
      profile: profile
    }
  }

  static getLocalProfile() {
    let profile = localStorage.getItem('profile')
    if (profile) {
      return JSON.parse(profile)
    }

    return {}
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