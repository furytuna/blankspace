class Login {
  static getLocalData() {
    let raw_json = localStorage.getItem('current_user')
    if (raw_json) {
      return JSON.parse(raw_json)
    }

    return false
  }

  static isLoggedIn() {
    let localData = this.getLocalData()
    if (localData) {
      return true
    }
    return false
  }
}

export default Login