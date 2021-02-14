import TriviaQuestionList from './TriviaQuestionList'
import {Grid, Container, Button, Typography, TextField, FormControl} from '@material-ui/core';
import './trivia.css'

const Trivia = ({state, handleUserName, handleSubmit, handleChangeQuestion, handleUserChoice, playAgain}) => {
    const {gameStarted, gameEnded, trivia, questionIndex, userName, score} = state.trivia;
    
    return (
        <Grid>
            <Container align="center" >
            {!gameStarted ?
                 <div className="trivia-container">
                    <Typography variant="h2" color="initial" >Trivia Page</Typography>
                    <form className="trivia-user-form">

                    <FormControl>
                        <TextField onChange={handleUserName} id="username-input" label="Input Your Username" variant="outlined"/>
                    </FormControl>
                    <Button onClick={handleSubmit} variant="contained" color="primary"> privyet Comrad!</Button>
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
                /> 
            : 
            null}
            {gameEnded ? 
            <Container>
                <p> {{score} > 0 ? `Great job ${userName}!` : `Try AGAIN!`} </p>
                <p>Score: {score}</p>
                <Button onClick={playAgain}>Play Again</Button>
                <p>Advertise Russia</p>
            </Container>
            :
            null}
            </Container>
        </Grid>
    )
}

export default Trivia;