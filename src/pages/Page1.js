import React from 'react'
import Lista from '../components/Lista'

const Page1 = () => {
    const listapolja1= ['tab1','tab2' ]
    return (
        <div>
            <h1>Ovo je lista za Page1</h1>
            <Lista polja={listapolja1}/>
        </div>
    )
}

export default Page1
