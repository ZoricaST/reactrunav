import React from 'react'
//import Li from './Li'
function Polje(props) {
    return <li>Ja sam{ props.itemli}</li>;
  }
const Lista = (props) => {
    return (
        <>
        <h1>Ovo su polja liste</h1>
        <ul>
        {props.polja.map((polje) => <Polje key={polje.id} itemli={polje} />)}
      </ul>
    </>
    )
}

export default Lista
