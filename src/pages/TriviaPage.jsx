import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchTrivia} from '../actions/triviaActions'
import TriviaPageView from '../components/trivia/TriviaPageView'

const TriviaPage = () => {

  const dispatch = useDispatch()

  const initialTrivia = useSelector((state) => {
    return state
  })

  const {questionIndex} = initialTrivia.trivia;
  const {trivia} = initialTrivia.trivia;
  const {score} = initialTrivia.trivia;

  const scoreVals = {
    "easy" : 100,
    "medium": 200,
    "hard": 300
  }
  
  const [userName, setUserName] = useState("")
  const [userAnswer, setUserAnswer] = useState("")
  
  const handleUserName = (e) => {
    setUserName(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchTrivia())
    dispatch({
      type: "CHANGE_USERNAME", 
      payload: userName
    })
    dispatch({
      type: "START_GAME"
    })
  }

  const handleUserChoice = (e) => {
    setUserAnswer(e.target.value)
  }

  const handleChangeQuestion = () => {
    const correctAnswer = trivia[questionIndex].correct_answer;
    const difficulty = trivia[questionIndex].difficulty;
    
    if(userAnswer === correctAnswer){
      dispatch({
        type: "CHANGE_SCORE",
        payload: score + scoreVals[difficulty]
      })
    }
    if(questionIndex !== trivia.length-1) {
      dispatch({
        type: "CHANGE_QUESTION",
        payload: questionIndex + 1
      })
    } else {
      dispatch({
        type: "END_GAME"
      })
    }
    setUserAnswer("")
  }

  const playAgain = () => {
    dispatch({
      type: "PLAY_AGAIN"
    })
    dispatch(fetchTrivia())
  }  
  
  const renderTrivia = () => {
    if (initialTrivia.loading) return <p> Loading Questions...</p>
    if (initialTrivia.hasErrors) return <p>An error has occurred</p>
    return <TriviaPageView  
              state={initialTrivia} 
              handleUserName={handleUserName} 
              handleSubmit={handleSubmit} 
              handleUserChoice={handleUserChoice} 
              handleChangeQuestion={handleChangeQuestion} 
              playAgain={playAgain} 
            />
  }
  
  return (
    <div>
      {renderTrivia()}
    </div>
  )
};

export default TriviaPage;