import TriviaQuestionList from './TriviaQuestionList'
import {Grid, Container, Button, TextField, FormControl} from '@material-ui/core';
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
                    <h1 className="title" >It's Trivia Time! </h1>
                    <form className="trivia-user-form">
                        <FormControl className="name-form">
                            <TextField className="name-input" onChange={handleUserName} id="username-input" label="Input Your Name" variant="outlined"/>
                            {isDisabled ? <small className="name-warning">Please provide a name</small>: null}
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
            <div className="score-container">
                {score > 0 ? <h2> Great job {userName}!</h2> : <h2>Try Again {userName}!</h2>}
                <h3>Score: {score}</h3>
                <Button onClick={playAgain}>Play Again</Button>
            </div>
            :
            null}
            </Container>
        </Grid>
    )
}

export default Trivia;