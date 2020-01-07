import React, {useState} from 'react'
import './App.css';

import Header from './Components/Header'
import Break from './Components/Break'
import Session from './Components/Session'
import Display from './Components/Display'
import Controls from './Components/Controls'

import useInterval from './Hooks/useInterval'

import 'bootstrap/dist/css/bootstrap.min.css'

function App(){

  const [sessionTime, setSessionTime] = useState(25)
  const [breakTime, setBreakTime] = useState(5)
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [playPause, setPlayPause] = useState(false)
  const [isSession, setIsSession] = useState(true);

  let breakChange = (dir) => {
    dir === 'up' ? breakTime <= 59 ? setBreakTime((breakTime)=> breakTime+1) : setBreakTime(60) :
    dir === 'down' ? breakTime > 1 ? setBreakTime((breakTime)=> breakTime-1) : setBreakTime(1) : alert('what?')
  }

  let sessionChange = (dir) => {
    dir === 'up' ? sessionTime <= 59 ? updateTime(1) : setSessionTime(60) :
    dir === 'down' ? sessionTime > 1 ? updateTime(-1) : setSessionTime(1) : alert('prablem')
  }

  let updateTime = (inc) => {
    setSessionTime((sessionTime)=> sessionTime + inc)
    setMinutes((minutes)=> minutes + inc)
  }

  let toggleInterval = () => {
    setIsSession(!isSession)
    !isSession ? setMinutes(sessionTime -1) : setMinutes(breakTime -1)
  }

  let updateMinute = () => {
    minutes > 0 ? setMinutes((minutes)=> minutes -1) : toggleInterval() 
  }

  useInterval(() => {
    if (playPause){
      switch (seconds){
        case 0:
          setSeconds(59)
          updateMinute()
        break;
      default: 
        setSeconds(seconds - 1)
      } 

      }
  }, 1000)


  let play = () =>{
    setPlayPause(true)
  }

  let pause = () =>{
    setPlayPause(false)
  }

  let reset = () => {
    setSessionTime(25)
    setBreakTime(5)
    setMinutes(25)
    setSeconds(0)
    setPlayPause(false)
    setIsSession(true)
  }

  return (
    <div className='App'>
      <Header />
      <h1 className='title'>Pomodoro clock</h1>
      <div className='clockFace'>
        <div className='interface'>
        <Break breakLength={breakTime} breakChange={breakChange}/>
        <Session sessionLength={sessionTime} sessionChange={sessionChange}/>
        </div>
        <Display 
          minutes={minutes} 
          seconds={seconds}
          breakTime={breakTime} 
          sessionTime={sessionTime} 
          isSession={isSession}
        />
        <Controls 
          seconds={seconds}
          play={play}
          pause={pause}
          reset={reset} />
      </div>
    </div>

  )
}

export default App;
