import {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchTrivia} from '../actions/triviaActions'
import Trivia from '../components/Trivia'

const TriviaPage = ({dispatch, loading, trivia, hasErrors}) => {

  useEffect(() => {
    dispatch(fetchTrivia())
  }, [dispatch])

  const renderTrivia = () => {
    if (loading) return <p> Loading Questions...</p>
    if (hasErrors) return <p>An error has occurred</p>
    return trivia.map((question, i) => {
      return <Trivia question={question} key={i} />
    })
  }
  
  return (
    <div>
      <h1>Trivia</h1>
      {renderTrivia()}
    </div>
  )
};

const mapStateToProps = (state) => ({
  loading: state.trivia.loading,
  trivia: state.trivia.trivia,
  hasErrors: state.trivia.hasErrors
})



export default connect(mapStateToProps)(TriviaPage);
