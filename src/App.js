import { useState, createContext } from 'react';
import { Route, Routes, useNavigate, Outlet} from "react-router-dom";
import { Container, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import data from './data.js'
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export let Context = createContext();

function App() {
  
  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate()

  
  let result = useQuery({
    queryKey : ['작명'],
    queryFn : () => axios.get('https://codingapple1.github.io/userdata.json').
    then( (a) => { return a.data}),
    
  })

  return (
    <div className="App">


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>

          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ () => {navigate('/')} }>Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto text-color'>
          { result.isLoading ? '로딩중' :
            result.error ? '에러남' :
            result.data ? result.data.name : ''}
          </Nav>

        </Container>
      </Navbar> 


      <Routes>

        <Route path='/' element={<Main data={shoes} setData={setShoes}/>} />
        <Route path='*' element={<div>없는 페이지</div>} />
        <Route path='/detail/:id' element={
          <Context.Provider value={shoes}> 
            <Detail data={shoes}/>
          </Context.Provider>
        } />
        <Route path='/cart' element={<Cart/>} />

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
