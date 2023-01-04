import React, {useEffect, useState} from 'react'

const Useeffects = () => {
    const [number, setNumber]= useState(0)
    useEffect(() => {
        document.title = `Hari (${number + 1 })`
    });
    return <div>
        <h1>{number}</h1>
        <button onClick={()=> setNumber(number+1)} className="button">Click</button>
       
    </div>
}


export default Useeffects
