import { createSlice } from '@reduxjs/toolkit'


let cart = createSlice({ // useState 역할
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {   // 상태 변경 함수 등록
        changeNum(state, data) {
            let find = state.find(function(x){
                return (x.id === data.payload.cart.id)
            });
            console.log(find.id)
            find.count += 1
        },
        addProduct(state, find) {
            let data = find.payload
            state.push({id : data.id, name: data.title, count : data.price})
            console.log(state[2])
        }
    }

})

export let { changeNum, addProduct } = cart.actions  // action은 cart 내부 함수 불러오고 export 하기

export default cart