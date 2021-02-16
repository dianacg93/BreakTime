import TriviaQuestionInfo from './TriviaQuestionInfo'
import {Grid, Container, Button, FormControl} from '@material-ui/core';
const TriviaQuestionList = ({trivia, questionIndex, userAnswer, handleChangeQuestion, handleUserChoice}) => {
    const options = [...trivia[questionIndex].incorrect_answers, trivia[questionIndex].correct_answer]

    options.sort(() => Math.random() - 0.5)

    return (
        <Grid>
            <Container>
                <FormControl>
                    <p>{trivia[questionIndex].question}</p>
                    <p>{trivia[questionIndex].category}</p>
                    <p>{trivia[questionIndex].difficulty}</p>
                    {
                        options.map((option, i) => {
                            return <TriviaQuestionInfo 
                            key={i} 
                            option={option} 
                            isChecked={userAnswer === option} 
                            handleUserChoice={handleUserChoice}/>
                        })
                    }
                    <Button onClick={handleChangeQuestion}>Next</Button>
                </FormControl>
            </Container>
        </Grid>
    )
}

export default TriviaQuestionList;