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

  const scoreVals = {
    "easy" : 100,
    "medium": 200,
    "hard": 300
  }
  
  const [userName, setUserName] = useState("")
  const [userAnswer, setUserAnswer] = useState("")
  const [isDisabled, setIsDisabled] = useState(true)
  
  const handleUserName = (e) => {
    if(e.target.value) {
      setUserName(e.target.value);
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
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
    if (e.target.value) {
      setUserAnswer(e.target.value)
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }

  const handleChangeQuestion = () => {

    const correctAnswer = trivia[questionIndex].correct_answer;
    const difficulty = trivia[questionIndex].difficulty;

    if(userAnswer === correctAnswer){
      dispatch({
        type: "CHANGE_SCORE",
        payload: scoreVals[difficulty]
      })
    }
    setUserAnswer("")
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
              userAnswer={userAnswer} 
              isDisabled={isDisabled} 
            />
  }
  
  return (
    <div>
      {renderTrivia()}
    </div>
  )
};

export default TriviaPage;