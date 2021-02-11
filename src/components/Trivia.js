const Trivia = ({question}) => {

    return (
        <div>
            <p>Category: {question.category}</p>
            <p>Difficulty: {question.difficulty}</p>
            <p>Question: {question.question}</p>
                {question.type === "multiple" ?
                <form>
                    {/* <input type="radio" value={question.correct_answer}/> */}
                    <input type="radio" id="other" name="multiple" value="other"></input>
                </form> 
                :
                <form>
                    "here"
                    {/* <input type="radio" name="boolean" value="no"/> */}
                </form> 
                }
        </div>
    )
}

export default Trivia;