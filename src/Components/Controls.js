import React from 'react'

function Controls({play, pause, reset}) {
    
    return (
        <div className='controlPad'>
            <button onClick={()=>{play()}}>Play</button>
            <button onClick={()=>{pause()}}>Pause</button>
            <button onClick={()=>{reset()}}>Reset</button>
        </div>
    )
}

export default Controls
