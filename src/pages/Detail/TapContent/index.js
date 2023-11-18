import {useState, useEffect} from 'react'
import { changeName } from './../../../store.js'

function TabContent ({tab, shoes}) {

    let tabArr = [<div>{shoes[0].title}</div>, <div>내용 2</div>, <div>내용 3</div>]

    let [fade, setFade] = useState('')

    useEffect( () => {
        setTimeout(() => {setFade('end')}, 100)
        return () => {
            setFade('')
        }
    }, [tab] )

    return (
        <div className={'start ' + fade} > {tabArr[tab]} </div>
    )
}

export default TabContent