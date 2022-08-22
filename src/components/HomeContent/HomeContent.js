import Card from 'react-bootstrap/Card';
import "./homeContent.css"

function HomeContent(){
    return(
        <Card>
        <Card.Body className='front'>
        <div className="front1">
                    <h3>YO SOY</h3>
        </div>
        <div className="front2">
            <h1>FACUNDO <br/>DE LUCA <span className="spanFront"><span className="frontPunto1">.</span><span className="frontPunto2">.</span></span></h1>
        </div>
        <div className="front3">
        <h3>FRONT-END <br/>DEVELOPER</h3>
        </div> 
        </Card.Body>
      </Card>
    )
}

export default HomeContent;