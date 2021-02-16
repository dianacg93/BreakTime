const TriviaQuestionInfo = ({option, handleUserChoice, isChecked}) => {

    return (
        <>
            <input onChange={handleUserChoice} type="radio" value={option} checked={isChecked} />
            <label htmlFor="option">{option}</label> <br/>
        </>
    )
}
export default TriviaQuestionInfo;