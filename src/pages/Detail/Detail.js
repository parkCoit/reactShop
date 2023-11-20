import { useEffect, useState, React, useContext } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link, useParams} from 'react-router-dom';
import './Detail.css'
import TabContent from './TapContent/index.js';
import { addProduct } from './../../store/userSlice.js'
import { useDispatch } from 'react-redux';




function Detail(props) {

    let [sale, setSale] = useState(true)
    let [str, setStr] = useState('')
    let [tab, setTab] = useState(0)
    let [fade2, setFade2] = useState('')

    let dispatch = useDispatch()
 
    let {id} = useParams(0)
    id = Number(id)

    let find = props.data.find(function(x){
        return (x.id === id)
    });

    useEffect(() => {
        let storage = localStorage.getItem('watched')
        storage = JSON.parse(storage)
        storage.push(find.id)
        storage = new Set(storage)
        storage = Array.from(storage)
        localStorage.setItem('watched', JSON.stringify(storage))
    }, [])
    

    

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
                        <img src= {'https://codingapple1.github.io/shop/shoes'+(id+1)+'.jpg'} width="80%" />
                </Col>
                
                <Col className='center'>
                    <h4> { find.title } </h4>
                    <p> { find.content } </p>
                    <p> ₩{ find.price } </p>
                    <input type='text' placeholder='문자만 입력 하세요' onChange={(e) => {setStr(e.target.value)}} />
                    <Link to='/cart'> 
                        <Button onClick={ () => { dispatch(addProduct(find)) } } variant="outline-primary">주문하기</Button>
                    </Link>
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
            <TabContent tab={tab} shoes={props.data}/>
        </Container>
    )
}

export default Detail