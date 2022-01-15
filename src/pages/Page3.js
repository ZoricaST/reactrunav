import React from 'react';
import Nav from '../components/nav';

const Page3 = () => {
     let tabovi = [
        {
        id:1,
        put:'page1',
        ime:'Page1',
        },
        {
        id:2,
        put:'page2',
        ime:'Page2',
        },
        {
        id:4,
        put:'page4',
        ime:'Page4',
        }
        ]
    return (
        <div>
              <Nav tabovi={tabovi}/>
            <h1>Ovo jePage3</h1>   
            <p>Ovde navigacija ima tabove:page1, page2 i page4</p>
                
        </div>
    )
}

export default Page3
