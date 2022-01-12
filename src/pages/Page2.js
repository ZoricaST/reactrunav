import React from 'react';
import Nav from '../components/nav';
import { useState} from 'react'

const Page2 = () => {
    const [tabovi,setTabovi] = useState([
        {
        id:1,
        put:'page1',
        ime:'Page1',
        },
        {
        id:4,
        put:'page4',
        ime:'Page4',
        }
        ])
    return (
        <div>
            
            <Nav tabovi={tabovi}/> 
            <h1>Ovo jePage2</h1> 
            <p>Ovde navigacija ima tabove page1 i page4</p>     
        </div>
    )
}

export default Page2
