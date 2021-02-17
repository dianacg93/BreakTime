import logo from '../../images/logo/logo.png'

const Jokes = ({joke, handleClick}) => {

    return(
        <div>
            <h1>Dad Jokes</h1>
            <h2>LAUGHTER . . . </h2>
            <h2>Never get enough with </h2>
            <img src={logo} alt="logo" />
            <div>
            {joke.type === "single"? 
                <>
                    <h3>{joke.joke}</h3>
                </>
            :
                <>
                    <h2>{joke.setup}</h2>
                    <h3>{joke.delivery}</h3>
                </>
            }
            </div>
            <button onClick={handleClick}> New Joke</button>
        </div>
    )
}

export default Jokes;