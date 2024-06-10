import { useRef, useState, useEffect } from 'react'
import './App.css'
import { MainContext } from './context'
import LeaveCommentText from './components/LeaveCommentText'
import Note from './components/Note'
import NoteBox from './components/NoteBox'


function App() {

  const screen = useRef(null)
  const [mode, setMode] = useState(false)
  const [notes, setNotes] = useState(localStorage.notes && JSON.parse(localStorage.notes) || [])
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  const [boxPosition, setBoxPosition] = useState({
    x: 0,
    y: 0
  })
  const [boxVisible, setBoxVisible] = useState(false)

  useEffect(() => {
    screen.current.focus()
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  const handleKeyUp = (e) => {
    if (e.key === 'c') {
      setMode(!mode)
      setBoxVisible(false)
    }
  }
  const handleMouseMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
    // setBoxVisible(true)
  }
  const handleClick = (e) => {
    if (mode) {
      setBoxPosition({
        x: position.x,
        y: position.y
      })
      setBoxVisible(true)
    }
  }
  const data = {
    position,
    boxPosition,
    setMode,
    notes,
    setNotes,
    setBoxVisible,
  }

  return (
    <>
      <MainContext.Provider value={data}>
        <div ref={screen}
          onMouseMove={handleMouseMove}
          tabIndex={0} onKeyUp={handleKeyUp}
          onClick={handleClick}
          className={`screen ${mode && 'editable'}`}
        >

          <img src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/1bcedaff-72ea-4cf0-a688-4c8b5a54a87a/websites_how-to_2x.png" width={1600} height={730} alt="" />

          {mode && <LeaveCommentText />}
          {notes && notes.map((note, index) => <Note key={index} {...note} />)}
          {boxVisible && <NoteBox />}
        </div>
      </MainContext.Provider>
    </>
  )
}

export default App
