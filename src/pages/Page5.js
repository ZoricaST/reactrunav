import React from 'react';
import Nav from '../components/nav';

const Page5 = () => {
    let tabovi = [
        {
        id:2,
        put:'page2',
        ime:'Page2',
        },
        {
        id:3,
        put:'page3',
        ime:'Page3',
        },
        {
        id:6,
        put:'page6',
        ime:'Page6',
        }
        ]
    return (
        <div>
             <Nav tabovi={tabovi}/>
            <h1>Ovo jePage5</h1>  
            <p>Ovde navigacija ima tabove:page2, page3, page6</p>
                 
        </div>
    )
}

export default Page5