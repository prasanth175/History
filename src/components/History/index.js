import {Component} from 'react'
import ItemsList from '../ItemsLIst'
import './index.css'

class History extends Component {
  state = {li: [], isRender: true}

  render() {
    let {li} = this.state
    const {isRender} = this.state
    const {historyList, deleteItem, onSearch} = this.props
    if (isRender === true) {
      li = [...historyList]
    }
    console.log(li)

    const onGet = event => {
      const final = onSearch(event, li)
      return this.setState({li: final, isRender: false})
    }

    const onDelete = unique => {
      const result = deleteItem(unique, li)
      return this.setState({li: result, isRender: false})
    }

    return (
      <div className="all">
        <div className="main">
          <div className="top">
            <img
              className="nav-logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
              alt="app logo"
            />
            <div className="search-field">
              <img
                className="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                alt="search"
              />
              <input
                onChange={onGet}
                type="search"
                placeholder="Search History"
              />
            </div>
          </div>

          <div className="bottom">
            <ul>
              {li.length === 0 ? (
                <p className="history">There is no history to show</p>
              ) : (
                li.map(each => (
                  <ItemsList item={each} key={each.id} onDelete={onDelete} />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default History
