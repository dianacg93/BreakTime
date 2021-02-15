const TriviaQuestionInfo = ({option, handleUserChoice}) => {
    
    return (
        <>
            <input onClick={handleUserChoice} type="radio" name="options" value={option}/>
            <label htmlFor="option">{option}</label> <br/>
        </>
    )
}
export default TriviaQuestionInfo;