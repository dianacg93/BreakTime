const Jokes = ({joke}) => {

    console.log("INSIDE JOKE", joke)
    return(
        <div>
            <p>{joke.category}</p>
            <p>{joke.type}</p>
            <p>{joke.category}</p>
        </div>
    )
}

export default Jokes;