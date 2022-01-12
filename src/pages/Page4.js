import React from 'react';
import Nav from '../components/nav';
import { useState} from 'react'

const Page4 = () => {
    const [tabovi,setTabovi] = useState([
        {
        id:1,
        put:'page1',
        ime:'Page1',
        },
        {
        id:3,
        put:'page2',
        ime:'Page2',
        },
        {
            id:5,
            put:'page5',
            ime:'Page5',
            }
        ])
    return (
        <div>
            <Nav tabovi={tabovi}/>
            <h1>Ovo jePage4</h1>  
            <p>Ovde navigacija ima tabove: page1, page2 i page5</p>
                 
        </div>
    )
}

export default Page4