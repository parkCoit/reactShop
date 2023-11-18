import { configureStore } from '@reduxjs/toolkit'
import cart from './store/userSlice.js'


export default configureStore({
	reducer: { 
        cart : cart.reducer, //등록
	}
})