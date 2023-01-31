import './index.css'

const ItemsList = props => {
  const {item, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = item

  const onRemove = () => {
    onDelete(id)
  }

  return (
    <li>
      <p className="time">{timeAccessed}</p>
      <div className="right">
        <div className="right-top">
          <img className="logo" src={logoUrl} alt="domain logo" />=
          <div className="text">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
        <button data-testid="delete" type="button" className="for-del">
          <img
            onClick={onRemove}
            className="del"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ItemsList
