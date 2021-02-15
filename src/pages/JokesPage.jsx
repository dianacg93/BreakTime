import {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchJoke} from '../actions/jokesActions'
import Jokes from '../components/Jokes'

const JokesPage = ({dispatch, loading, joke, hasErrors}) => {
  
  useEffect(() => {
    dispatch(fetchJoke())
  }, [dispatch])

  const renderJoke = () => {
    if (loading) return <p> Loading Joke...</p>
    if (hasErrors) return <p>An error has occurred</p>
    console.log("RENDERJOKE", joke)
    return joke
  }
  
  return (
    <div>
      <h1>Jokes</h1>
      <Jokes joke = {renderJoke()}/>
    </div>
  )
};

const mapStateToProps = (state) => (
  console.log("MAP", state),
  {
  
  loading: state.jokes.loading,
  joke: state.jokes.joke,
  hasErrors: state.jokes.hasErrors
})

export default connect(mapStateToProps)(JokesPage);