import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {useState} from 'react'
 
function Detail(props) {

    let {id} = useParams(0)
    id = Number(id)
    let find = props.data.find(function(x){
        return (x.id == id)
    });
    return(
        <Container>
                <Row>
                    <Col sm>
                        <img src= {'https://codingapple1.github.io/shop/shoes'+(id+1)+'.jpg'} width="80%"/>
                        <h4> { find.title } </h4>
                        <p> { find.content } </p>
                        <p> { find.price } </p>
                    </Col>
                </Row>
                <Button variant="outline-primary">주문하기</Button>{' '}
            </Container>
    )
}

export default Detail