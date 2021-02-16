import './trivia.css'

const TriviaQuestionInfo = ({option, handleUserChoice, isChecked}) => {

    return (
        <div>
            <input onChange={handleUserChoice} type="radio" value={option} checked={isChecked} />
            <label htmlFor="option">{option}</label> <br/><br/>
        </div>
    )
}
export default TriviaQuestionInfo;