import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchJoke} from '../actions/jokesActions'
import Jokes from '../components/jokes/Jokes.jsx'

const JokesPage = () => {
  
  const dispatch = useDispatch()

  const initialJoke = useSelector((state) => {
    return state.jokes
  })

  const {joke} = initialJoke

  useEffect(() => {
    dispatch(fetchJoke())
  }, [dispatch])

  const handleClick = () => {
    dispatch(fetchJoke())
  }

  const renderJoke = () => {
    if (initialJoke.loading) return <p> Loading Joke...</p>
    if (initialJoke.hasErrors) return <p>An error has occurred</p>
    return joke;
  }
  
  return (
    <div>
      <Jokes joke={renderJoke()} handleClick={() => handleClick()}/>
    </div>
  )
};

export default JokesPage;