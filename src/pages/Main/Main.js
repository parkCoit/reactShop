import {useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Main.css'
import axios from 'axios'



function Main (props) {

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('watched')) == null ) {
            localStorage.setItem('watched' , JSON.stringify([]))
        }
        
    }, [])
    
    return (
        
        <div>
            <div className='main-bg'>
                
            </div>
            <Container>
                <Row>
                    {
                    props.data.map(function(data ,i) {
                        return(
                            <Col key={i} xs={4}>
                                <Link to={`http://localhost:3000/detail/${i}`}>
                                    <img src= {'https://codingapple1.github.io/shop/shoes'+ (i+1) +'.jpg'} width="80%"/>
                                </Link>
                                <h4> { data.title } </h4>
                                <p> { data.price } </p>
                            </Col>
                        )
                    })  
                    }
                </Row>
                <Button onClick={() => {
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result) => {
                        let copy = [...props.data, ...result.data]
                        props.setData(copy)     
                    })
                }}>더보기</Button>
            </Container>
        </div>
    )
}

export default Main