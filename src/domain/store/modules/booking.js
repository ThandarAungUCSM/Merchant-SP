const namespaced = true

const state = {
  
  hostelInfo: {
    name: null, 
    topImageUrl: null
  },
  
  bookInfo: {
    bookId: null,
    customerId: null,
    
    guestInfo: {},
    
    accompanyInfo: []
  },
  
  deleteGuestInfo: null,
  bedStatusInfo: [],

  pastRervBookInfo: {},
  pastRervHostelInfo: {}
}

const getters = {
  getPastRervBookInfo: state => {
    return state.pastRervBookInfo
  },
  getPastRervHostelInfo: state => {
    return state.pastRervHostelInfo
  }
}

const mutations = {
  
  updateStateData (state, data) {
    state.bookInfo = JSON.parse(JSON.stringify(data.book))
    state.hostelInfo = JSON.parse(JSON.stringify(data.hostel))
    state.bedStatusInfo = data.bedStatus
  },

  updatePastRervBookInfo (state, bookInfo) {
    state.pastRervBookInfo = bookInfo
  },

  updatePastRervHostelInfo (state, hostel) {
    state.pastRervHostelInfo = hostel
  }
};

export default {
  namespaced,
  state,
  getters,
  mutations
};
