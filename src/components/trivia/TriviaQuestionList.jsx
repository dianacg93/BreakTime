import TriviaQuestionInfo from './TriviaQuestionInfo'
import {Grid, Container, Button, FormControl, Typography} from '@material-ui/core';
import {useState, useEffect} from 'react'
import './trivia.css'

//
const htmlDecode = (str) => {
    const el = document.createElement('textarea')
    el.innerHTML = str;
    return el.childNodes.length === 0 ? "" : el.childNodes[0].nodeValue;
}

const TriviaQuestionList = ({trivia, questionIndex, userAnswer, handleChangeQuestion, handleUserChoice, isDisabled}) => {

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
        <Grid>
            <Container>
                <FormControl>
                    <Typography variant="h5">{htmlDecode(trivia[currentQuestionIndex].question)}</Typography>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <p><strong>{trivia[currentQuestionIndex].category}</strong></p>
                        <p><strong>{trivia[currentQuestionIndex].difficulty}</strong></p>
                    </div>
                    {
                        randomOptions.map((option, i) => {
                            return <TriviaQuestionInfo 
                            key={i} 
                            option={option} 
                            isChecked={userAnswer === option} 
                            handleUserChoice={handleUserChoice}
                            />
                        })
                    }
                    <Button onClick={handleChangeQuestion}>Next</Button>
                </FormControl>
            </Container>
        </Grid>
    )
}

export default TriviaQuestionList;