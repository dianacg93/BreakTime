const Jokes = ({joke}) => {

    console.log("INSIDE JOKE", joke)
    return(
        <div>
            <h1>Jokes</h1>
            {joke.type === "single"? 
                <div>
                    <p>{joke.category}</p>
                    <p>{joke.type}</p>
                    <p>{joke.joke}</p>
                </div>
            :
                <div>
                    <p>{joke.category}</p>
                    <p>{joke.type}</p>
                    <p>{joke.setup}</p>
                    <p>{joke.delivery}</p>
                </div>
            }
        </div>
    )
}

export default Jokes;