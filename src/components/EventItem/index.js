// Write your code here
import './index.css'

const EventItem = props => {
  const {itemData, itemClickHandler, isActive} = props
  const {id, imageUrl, name, location} = itemData

  const onItemSelection = () => itemClickHandler(id)

  return (
    <li className="event-item-container">
      <button
        className="event-item-container-button"
        type="button"
        onClick={onItemSelection}
      >
        <img
          className={`event-item-img ${isActive ? 'active-event-item' : ''}`}
          src={imageUrl}
          alt="event"
        />
        <p className="event-item-name">{name}</p>
        <p className="event-item-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
