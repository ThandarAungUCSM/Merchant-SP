const namespaced = true

const state = {
  selectedLang: 'ja',
  langs: ['en', 'ja']
}

const getters = {
    getSelectedLang: state => {
      if (state.selectedLang) {
        return state.selectedLang
      }
      return 'ja'
    }
}

const mutations = {
  setLang (state, lang) {
    state.selectedLang = lang
    window.localStorage.setItem('project-language', lang)
  },
  setDefaultLanguage (state) {
    let localState = window.localStorage.getItem('project-language')

    if (localState) {
      state.selectedLang = localState
    } else {
      // set default language is Japanese
      state.selectedLang = 'ja'
      window.localStorage.setItem('project-language', state.selectedLang)
    }
  }
}

export default{
  namespaced,
  state,
  mutations,
  getters
}
