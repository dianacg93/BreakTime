import TriviaQuestionList from './TriviaQuestionList'
import {Grid, Container, Button, Typography, TextField, FormControl} from '@material-ui/core';
import './trivia.css'

const Trivia = ({state, handleUserName, handleSubmit, handleChangeQuestion, handleUserChoice, playAgain, userAnswer, isDisabled}) => {
    const {gameStarted, gameEnded, trivia, questionIndex, userName, score} = state.trivia;
    return (
        <Grid container
        direction="column"
        justify="center"
        alignItems="center">
            <Container align="center" >
            {!gameStarted ?
                 <div className="trivia-container">
                    <Typography variant="h2" color="initial" >Trivia Page</Typography>
                    <form className="trivia-user-form">

                    <FormControl>
                        <TextField onChange={handleUserName} id="username-input" label="Input Your Name" variant="outlined"/>
                        {isDisabled ? <small>Please provide a name</small>: null}
                    <Button disabled={isDisabled} onClick={handleSubmit} variant="contained" color="primary"> Start </Button>
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
                isDisabled={isDisabled} 
                /> 
            : 
            null}
            {gameEnded ? 
            <Container>
                {score > 0 ? <p> Great job {userName}!</p> : <p>Try Again {userName}!</p>}
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