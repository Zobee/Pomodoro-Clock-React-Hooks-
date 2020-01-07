import React from 'react'

function Session({sessionLength, sessionChange}) {
    return (
        <div className='mx-3'>
            <h4 className='sectionHeader'>Session Length</h4>
            <div className='intervalContainer'>
                <button onClick={()=>{sessionChange('up')}}>+</button>
                <p className='interfaceTime'>{sessionLength}</p>
                <button onClick={()=>{sessionChange('down')}}>-</button>
            </div>
        </div>

    )
}

export default Session
