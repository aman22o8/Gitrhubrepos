import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    initiallist: [],
    isLoading: false,
    wentrong: false,
  }

  componentDidMount() {
    this.getallgitrepos()
  }

  getallgitrepos = async () => {
    this.setState({isLoading: true})
    const {activeTabId} = this.state

    const url = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(response)
    console.log(typeof url)
    if (response.ok === true) {
      const updatedData = data.popular_repos.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        issuesCount: each.issues_count,
        id: each.id,
        name: each.name,
        starsCount: each.stars_count,
      }))
      this.setState({initiallist: updatedData, isLoading: false})
    }
    if (response.status === 401) {
      this.setState({wentrong: true})
    }
  }

  updateActivetabId = activeTabId => {
    this.setState({activeTabId}, this.getallgitrepos)
  }

  render() {
    const {activeTabId, initiallist, wentrong, isLoading} = this.state
    console.log(wentrong)
    return (
      <div className="main_container">
        <h1 className="main_heading">Popular</h1>
        <ul className="list_container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              isActive={activeTabId === each.id}
              tabItem={each}
              updateActivetabId={this.updateActivetabId}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="list_container_2">
            {initiallist.map(each => (
              <RepositoryItem key={each.id} initiallist={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
