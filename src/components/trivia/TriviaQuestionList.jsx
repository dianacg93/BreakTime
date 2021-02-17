import TriviaQuestionInfo from './TriviaQuestionInfo'
import {Button} from '@material-ui/core';
import {useState, useEffect} from 'react'
import './trivia.css'

const htmlDecode = (str) => {
    const el = document.createElement('textarea')
    el.innerHTML = str;
    return el.childNodes.length === 0 ? "" : el.childNodes[0].nodeValue;
}

const TriviaQuestionList = ({trivia, questionIndex, userAnswer, handleChangeQuestion, handleUserChoice}) => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
    const [randomOptions, setRandomOptions] = useState([])

    useEffect(() => {
        const options = [...trivia[questionIndex].incorrect_answers, trivia[questionIndex].correct_answer]
        options.sort(() => Math.random() - 0.5)
        if (randomOptions.length === 0 || currentQuestionIndex !== questionIndex) {
            setCurrentQuestionIndex(questionIndex)
            setRandomOptions(options)
        }
    }, [currentQuestionIndex, randomOptions, questionIndex, trivia])

    return (
        <div className="question-container">
            <h2 className="question-text">{htmlDecode(trivia[questionIndex].question)}</h2>
            <form className="options-form">
                {randomOptions.map((option, i) => {
                return <TriviaQuestionInfo 
                key={i} 
                option={option} 
                isChecked={userAnswer === option} 
                handleUserChoice={handleUserChoice}
                />
            })
            }
            </form>
            <Button onClick={handleChangeQuestion}>Next</Button>
        </div >
    )
}

export default TriviaQuestionList;