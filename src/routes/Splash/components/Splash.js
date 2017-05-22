import React from 'react'
import Logo from '../../../../public/logo.svg'
import RaisedButton from 'material-ui/RaisedButton'
import GoogleLogin from 'react-google-login'

// import PropTypes from 'prop-types'
let styles = {
  title: {
    fontSize: '10vw',
    fontWeight: '100',
    lineHeight: '1em'
  },
  subtitle: {
    fontSize: '5vw',
    fontWeight: '400'
  },
  logo: {
    height: '100%',
    width: '100%'
  },
  col: {
    width: '50%',
    textAlign: 'center',
    display: 'inline-block'
  }
}

export const Splash = (props) => (
  <div style={{ margin: '0 auto', padding: '1em' }} >
    <div style={styles.col}>
      <img style={styles.logo} src={Logo} />
    </div>
    <div style={styles.col}>
      <div style={styles.title}>
        Leaflet
      </div>
      <div style={styles.subtitle}>
        Notetaking, Better
      </div>
      <RaisedButton primary children={
        <GoogleLogin
          style={{ maxWidth: '100%', color: 'white', padding: '1em' }}
          clientId='820499902692-ulb668a9g0evddeog5c4hnpi5tte4cku.apps.googleusercontent.com'
          onSuccess={(response) => { console.log(response) }}
          onFailure={(response) => { console.log(response) }}
          tag='span'
        >
          <span>
            LOGIN WITH GOOGLE
          </span>
        </GoogleLogin>
        } />

    </div>
  </div>
)

Splash.propTypes = {

}

export default Splash
