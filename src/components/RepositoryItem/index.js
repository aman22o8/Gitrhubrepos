// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {initiallist} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = initiallist
  return (
    <li className="list_item_container">
      <img src={avatarUrl} alt="open issues" className="image1" />
      <h1 className="heading">{name}</h1>
      <div className="in_between">
        <img
          className="image_2"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="each_desc">{starsCount} stars</p>
      </div>
      <div className="in_between">
        <img
          className="image_2"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="each_desc">{forksCount} forks</p>
      </div>
      <div className="in_between">
        <img
          className="image_2"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="issues"
        />
        <p className="each_desc">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
