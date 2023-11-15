import { useState } from 'react';
import { Route, Routes, useNavigate, Outlet} from "react-router-dom";
import { Container, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import data from './data.js'
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';


function App() {
  
  let [shoes] = useState(data)
  let navigate = useNavigate()

  return (
    <div className="App">


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ () => {navigate('/')} }>Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 


      <Routes>
        <Route path='/' element={<Main data={shoes}/>} />
        <Route path='*' element={<div>없는 페이지</div>} />
        <Route path='/detail/:id' element={<Detail data={shoes}/>} />
        <Route path='event' element={<Event/>}>
          <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path='two' element={<p>생일기념 쿠폰받기</p>}/>
        </Route>
      </Routes>
    
    </div>
  );

  function Event() {
    return(
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet> </Outlet>
      </div>
    )
  }
}

export default App;
