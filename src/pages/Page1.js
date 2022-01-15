
import Nav from '../components/nav';

const Page1 = () => {
 let tabovi=[
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
        ]
        
    return (
        <div>
             <Nav tabovi={tabovi}/>
            <h1>Ovo je Page1</h1>
            <p>Ovde navigacija ima tabovepage2 i page3</p>
           
        </div>
    )
}

export default Page1
