import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeNum } from './../../store/userSlice.js'


function Cart() {

    let state = useSelector((state) => state) // Redux store 가져 와줌
    let dispatch = useDispatch() // store js로 요청 보내주는 함수

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>개수</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map(function(cart, i){ 
                            return(
                            <tr key={i}>
                                <td> { i+1 } </td>
                                <td> { cart.id } </td>
                                <td> { cart.name } </td>
                                <td> { cart.count } </td>
                                <td> <Button onClick={() => {dispatch(changeNum({cart : cart, num : i}))}}>버튼</Button> </td>
                            </tr>
                            )})
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart