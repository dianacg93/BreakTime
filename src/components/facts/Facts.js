const Facts = ({ facts, factsClick }) => {

    console.log("facts", facts)
    return (
        <div>
            <h1>Facts</h1>
            <div>
                <h3>{facts.text}</h3>
            </div>
            <button onClick={factsClick}>New Facts</button>
        </div>

    )
}

export default Facts;