import './facts.css';
import blob from '../../images/breaktime-facts-img.png';

const Facts = ({ facts, factsClick }) => {

    console.log("facts", facts)
    return (
        <div className="facts-container">
            <div>
                <h1 className="title-text">Random Facts</h1>
                <div className="text-structure">
                    <div className="page-main-text">
                        <h3>EDUCATE WHILE YOU BREAK</h3>

                    </div>
                </div>
            </div>
            <div className="lower-screen">
                <img src={blob} alt="gradient-blob" width="1000" height="980" />
                <div>
                    <div className="facts-text-button">
                        <div className="facts-display">
                            <h3>{facts.text}</h3>
                        </div>
                        <div className="facts-button">
                            <button onClick={factsClick}> New Facts</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default Facts;