// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  let activeEventRegistrationDetailsUI = null

  if (registrationStatus === 'YET_TO_REGISTER') {
    activeEventRegistrationDetailsUI = (
      <div className="active-event-registration-details-container">
        <img
          className="event-registration-main-img"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
        />
        <p className="event-registration-description">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form.
        </p>
        <button type="button" className="registration-button">
          Register Here
        </button>
      </div>
    )
  } else if (registrationStatus === 'REGISTERED') {
    activeEventRegistrationDetailsUI = (
      <div className="active-event-registration-details-container">
        <img
          className="event-registration-success-img"
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
        />
        <h1 className="event-registration-header">
          You have already registered for the event
        </h1>
      </div>
    )
  } else if (registrationStatus === 'REGISTRATIONS_CLOSED') {
    activeEventRegistrationDetailsUI = (
      <div className="active-event-registration-details-container">
        <img
          className="event-registration-main-img"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
        />
        <h1 className="event-registration-header">
          Registrations are closed now!
        </h1>
        <p className="event-registration-description">
          Stay tuned. We will reopen the registrations soon!
        </p>
      </div>
    )
  } else {
    // registrationStatus === 'NO_ACTIVE_EVENT'
    activeEventRegistrationDetailsUI = (
      <div className="active-event-registration-details-container no-active-event-container">
        <p className="no-active-event-message">
          Click on an event, to view its registration details
        </p>
      </div>
    )
  }

  return activeEventRegistrationDetailsUI
}

export default ActiveEventRegistrationDetails
