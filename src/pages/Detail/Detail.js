import { useEffect, useState, React } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Detail.css'
import styled from 'styled-components'




function Detail(props) {

    let [sale, setSale] = useState(true)
    let [str, setStr] = useState('')
    let [tab, setTab] = useState(0)
    let [fade, setFade] = useState('')
    let [fade2, setFade2] = useState('')
 
    let {id} = useParams(0)
    id = Number(id)

    let tabArr = [<div>내용 1</div>, <div>내용 2</div>, <div>내용 3</div>]

    let find = props.data.find(function(x){
        return (x.id === id)
    });

    useEffect(() => {
        let time = setTimeout(() => {setSale(false)}, 2000)
        
        return () => {
            clearTimeout(time)
        }
    }, [])
    
    useEffect( () => {console.log(str)
        if (isNaN(str) == false , str ==! '' ) {
            alert('문자를 입력하세요')
        }
    }, [str] )

    useEffect( () => {
        setTimeout(() => {setFade('end')}, 100)
        return () => {
            setFade('')
        }
    }, [tab] )

    useEffect( () => {
        setFade2('end')
        return () => {
            setFade2('')
        }
    }, [] )

    return(
        <Container className={'start ' + fade2 }>
            {
                sale == true
                ? <div className='alert'>2초이내 구매시 할인</div>
                : null
            }
            <Row>
                <Col>
                    <img src= {'https://codingapple1.github.io/shop/shoes'+(id+1)+'.jpg'} width="80%"/>
                </Col>
                <Col className='center'>
                    <h4> { find.title } </h4>
                    <p> { find.content } </p>
                    <p> ₩{ find.price } </p>
                    <input type='text' placeholder='문자만 입력 하세요' onChange={(e) => {setStr(e.target.value)}} />
                    <Button variant="outline-primary">주문하기</Button>
                </Col>
            </Row>
            <div>
                <Nav variant="tabs" defaultActiveKey="link-0">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => { setTab(0) }} > 버튼1 </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1 " onClick={() => { setTab(1) }} > 버튼2 </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={() => { setTab(2) }} > 버튼3 </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className={'start ' + fade} > {tabArr[tab]} </div>
        </Container>
    )
}

export default Detail