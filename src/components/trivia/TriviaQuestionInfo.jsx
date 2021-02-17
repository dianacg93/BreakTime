import './trivia.css'
import {FormControlLabel, Radio} from '@material-ui/core';

const TriviaQuestionInfo = ({option, handleUserChoice, isChecked}) => {

    return (
        <div className="options-container">
            <FormControlLabel value={option} checked={isChecked} onChange={handleUserChoice} control={<Radio color="primary" />} labelPlacement="bottom" />
            <label className="option-text" htmlFor="option">{option}</label> <br/><br/>
        </div>
    )
}
export default TriviaQuestionInfo;