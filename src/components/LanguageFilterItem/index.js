// Write your code here
// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {tabItem, isActive, updateActivetabId} = props
  const {id, language} = tabItem
  //   console.log(id, isActive)
  const activeclass = isActive ? 'activemy' : ''
  const activemyId = () => {
    updateActivetabId(id)
  }
  return (
    <li className="mylist">
      <button
        onClick={activemyId}
        className={`mybutton ${activeclass}`}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
