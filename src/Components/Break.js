import React from 'react'

function Break({breakLength, breakChange}) {
    return (
        <div className='mx-3'>
        <h4 className='sectionHeader'>Break Length</h4>
        <div className='intervalContainer'>

            <button onClick={()=>breakChange('up')}>+</button>
            <p className='interfaceTime'>{breakLength}</p>
            <button onClick={()=>breakChange('down')}>-</button>               
        </div>
        </div>
    )
}

export default Break
