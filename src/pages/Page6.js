import React from 'react';
import Nav from '../components/nav';
import { useState} from 'react'


const Page6 = () => {
    const [tabovi,setTabovi] = useState([
        {
        id:2,
        put:'page2',
        ime:'Page2',
        },
        {
        id:3,
        put:'page3',
        ime:'Page3',
        }
        ])
    return (
        <div>
            <Nav tabovi={tabovi}/>
            <h1>Ovo jePage6</h1> 
            <p>Ovde navigacija ima tabove:page2 i page3</p>
                  
        </div>
    )
}

export default Page6