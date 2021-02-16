import TriviaQuestionInfo from './TriviaQuestionInfo'
import {Grid, Container, Button, FormControl, Typography} from '@material-ui/core';
import './trivia.css'

const TriviaQuestionList = ({trivia, questionIndex, userAnswer, handleChangeQuestion, handleUserChoice, isDisabled}) => {
    const options = [...trivia[questionIndex].incorrect_answers, trivia[questionIndex].correct_answer]

    // options.sort(() => Math.random() - 0.5)

    return (
        <Grid>
            <Container>
                <FormControl>
                    <Typography variant="h5">{trivia[questionIndex].question}</Typography>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <p><strong>{trivia[questionIndex].category}</strong></p>
                        <p><strong>{trivia[questionIndex].difficulty}</strong></p>
                    </div>
                    {
                        options.map((option, i) => {
                            return <TriviaQuestionInfo 
                            key={i} 
                            option={option} 
                            isChecked={userAnswer === option} 
                            handleUserChoice={handleUserChoice}
                            />
                        })
                    }
                    <Button disabled={isDisabled} onClick={handleChangeQuestion}>Next</Button>
                </FormControl>
            </Container>
        </Grid>
    )
}

export default TriviaQuestionList;