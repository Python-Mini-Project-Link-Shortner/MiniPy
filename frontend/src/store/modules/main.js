const main = {
  namespaced: true,
  state: {
    mainLinks: [
      {name: 'Main', routeName: 'Main', href: '/main#'},
      {name: 'About', routeName: 'Main', href: '/main#about'},
      {name: 'Features', routeName: 'Main', href: '/main#Features'},
      {name: 'Contact', routeName: 'Main', href: '/main#contact'},
      {name: 'API', routeName: 'MainAPI', href: '/main/api'}
    ],
    intersectEnabled: true,
    drawer: false,
    tabIndex: 0,
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer
    },
    setDrawer(state, payload) {
      state.drawer = payload
    },
    setTabIndex(state, payload) {
      payload = Number(payload)
      state.tabIndex = payload
    },
    setIntersection(state, payload) {
      state.intersectEnabled = payload
    }
  }
}

export default main