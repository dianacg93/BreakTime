import logo from '../../images/logo/logo.png'
import blob from '../../images/breaktime-facts-img.png'
import './jokes.css'

const Jokes = ({joke, handleClick}) => {

    return(
        <div className="jokes-container">
            <h1>Dad Jokes</h1>
            <div className="info">
                <div className="blob-container">
                    <img src={blob} alt="background blob"/>
                    <div className="blob-text">
                        <h2>LAUGHTER !</h2>
                        <h2>Never get enough with ...</h2>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="joke-container">
                    <div className="joke">
                        {joke.type === "single"? 
                            <>
                                <h2>{joke.joke}</h2>
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
                <div></div>
            </div>
        </div>
    )
}

export default Jokes;