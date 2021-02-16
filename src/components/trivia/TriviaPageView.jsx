import TriviaQuestionList from './TriviaQuestionList'
import {Grid, Container, Button, Typography, TextField, FormControl} from '@material-ui/core';
import './trivia.css'

const Trivia = ({state, handleUserName, handleSubmit, handleChangeQuestion, handleUserChoice, playAgain, userAnswer, isError}) => {
    const {gameStarted, gameEnded, trivia, questionIndex, userName, score} = state.trivia;
    console.log(state.trivia)
    return (
        <Grid>
            <Container align="center" >
            {!gameStarted ?
                 <div className="trivia-container">
                    <Typography variant="h2" color="initial" >Trivia Page</Typography>
                    <form className="trivia-user-form">

                    <FormControl>
                        <TextField onChange={handleUserName} id="username-input" label="Input Your Username" variant="outlined"/>
                        {isError ? <span>Please provide a name</span>: null}
                    <Button disabled={!isError} onClick={handleSubmit} variant="contained" color="primary"> Start </Button>
                    </FormControl>
                    </form>
                </div>
                : null
            }
            { trivia.length && gameEnded===false ? 
            <TriviaQuestionList    
                trivia={trivia}
                questionIndex={questionIndex} 
                handleChangeQuestion={handleChangeQuestion} 
                handleUserChoice={handleUserChoice} 
                userAnswer={userAnswer} 
                /> 
            : 
            null}
            {gameEnded ? 
            <Container>
                <p> {{score} > 0 ? `Great job ${userName}!` : `Try Again!`} </p>
                <p>Score: {score}</p>
                <Button onClick={playAgain}>Play Again</Button>
            </Container>
            :
            null}
            </Container>
        </Grid>
    )
}

export default Trivia;