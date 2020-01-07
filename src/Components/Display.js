import React from 'react'

function Display({minutes, seconds, isSession}) {
    
    
    return (
        <div>
            <div className='displayContainer'>
                <h5>{isSession ? 'Session' : 'Break Time'}</h5>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds === 0 ? '00' : seconds < 10 ? '0' + seconds : seconds}</span>
            </div>
        </div>
    )
}

export default Display