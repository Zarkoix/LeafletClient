import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import leafletTheme from '../theme'

class AppContainer extends Component {
  static propTypes = {
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { store } = this.props
    const routes = require('../routes/index').default(store)
    return (
      <MuiThemeProvider muiTheme={leafletTheme}>
        <Provider store={store}>
          <div style={{ height: '100%' }}>
            <Router history={browserHistory} children={routes} />
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default AppContainer
