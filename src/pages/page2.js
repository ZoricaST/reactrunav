import React from 'react'
import Lista from '../components/Lista'

const Page2 = () => {
    const listapolja2= ['tab21','tab22' ]
    return (
        <div>
            <h1>Ovo je lista za Page2</h1>
            <Lista polja={listapolja2}/>
        </div>
    )
}

export default Page2
