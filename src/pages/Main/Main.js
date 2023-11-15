
import { Container, Row, Col } from 'react-bootstrap';
import './Main.css'

function Main (props) {

    return (
        
        <div>
            <div className='main-bg'></div>
            <Container>
                <Row>
                    {
                    props.data.map(function(data ,i) {
                        return(
                            <Col key={i} sm>
                                <img src= {'https://codingapple1.github.io/shop/shoes'+ (i+1) +'.jpg'} width="80%"/>
                                <h4> { data.title } </h4>
                                <p> { data.price } </p>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Main